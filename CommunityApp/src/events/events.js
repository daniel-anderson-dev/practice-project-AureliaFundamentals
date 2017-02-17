import {inject, Lazy, All} from 'aurelia-framework';
import {DataCache} from 'dataCache';
import {ImLazy} from 'ImLazy';
import {DataRepository} from 'services/dataRepository';

@inject(DataCache, Lazy.of(ImLazy), All.of('SuperPlugin'), DataRepository)
export class Events
{
    constructor(dataCache, lazyOfImLazy, plugins, dataRepository)
    {
        dataRepository.getEvents().then(events => this.events = events);

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