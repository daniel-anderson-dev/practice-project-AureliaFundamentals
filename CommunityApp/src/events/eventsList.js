import {inject, Lazy, All} from 'aurelia-framework';
import {DataCache} from 'dataCache';
import {ImLazy} from 'ImLazy';
import {DataRepository} from 'services/dataRepository';
import {Router, activationStrategy} from 'aurelia-router';

@inject(DataCache, Lazy.of(ImLazy), All.of('SuperPlugin'), DataRepository, Router)
export class Events
{
    constructor(dataCache, lazyOfImLazy, plugins, dataRepository, router)
    {
		console.log('Constructor Call for eventsList.js');
        this.dataRepository = dataRepository;
        this.router = router;

        // Kept in for demo purposes.
        this.cache = dataCache;
        this.cache.data.push('a');
        this.lazyOfImLazy = lazyOfImLazy;

        plugins.forEach(function(plugIn) {
            plugIn.doPlugInStuff();
        });
    }

	activate(params, routeConfig) {
		console.log('activate for eventsList.js');
		var pastOrFuture = routeConfig.name == '' ? 'future' : routeConfig.name;
		return this.dataRepository.getEvents(pastOrFuture).then(events => {
            // Copy-paste
			if (params.speaker || params.topic) {
				var filteredResults = [];
				events.forEach(item=> {
					if (params.speaker && item.speaker.toLowerCase()
						.indexOf(params.speaker.toLowerCase()) >= 0) {
						filteredResults.push(item);
					}
					if (params.topic && item.title.toLowerCase()
						.indexOf(params.topic.toLowerCase()) >= 0) {
						filteredResults.push(item);
					}
				});
				this.events = filteredResults;
			}
			else {
				this.events = events;
			}
			this.events.forEach(item => item.detailUrl = 
				this.router.generate('eventDetail', {eventId: item.id}));
		});
	}

    createAndUseLazy()
    {
        // Left in for future reference.
        console.log('about to use lazy object.');
        this.lazyOfImLazy().doStuff();
    }

	goToDiscussion()
	{
		this.router.navigate('#/discussion');
		// Navigates to a single Event Detail (the first in the array).
		// this.router.navigateToRoute('eventDetail', {eventId: this.events[0].id});
	}

	canActivate()
	{
		console.log('canActivate');
		return true; // We want it to keep processing.
	}

	canDeactivate()
	{
		console.log('canDeactivate');
		return true;
	}

	deactivate()
	{
		console.log('deactivate');
	}

	determineActivationStrategy()
	{
		console.log('determineActivationStrategy called.');
		//return activationStrategy.invokeLifecycle;
		
		// Invokes reconstruction.
		return activationStrategy.replace;
	}

}