import {inject, Lazy, All} from 'aurelia-framework';
import {DataCache} from 'dataCache';
import {ImLazy} from 'ImLazy';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataCache, Lazy.of(ImLazy), All.of('SuperPlugin'), DataRepository, Router)
export class Events
{
    constructor(dataCache, lazyOfImLazy, plugins, dataRepository, router)
    {
        dataRepository.getEvents().then(events => {
            this.events = events
            this.events.forEach(item => item.detailUrl = router.generate('eventDetail', { eventId: item.id }));
        });

        this.cache = dataCache;
        this.cache.data.push('a');
        this.lazyOfImLazy = lazyOfImLazy;

        plugins.forEach(function(plugIn) {
            plugIn.doPlugInStuff();
        });
    }

    createAndUseLazy()
    {
        // Left in for future reference.
        console.log('about to use lazy object.');
        this.lazyOfImLazy().doStuff();
    }
}