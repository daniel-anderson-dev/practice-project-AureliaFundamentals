import {inject, Lazy, All} from 'aurelia-framework';
import {DataCache} from 'dataCache';
import {ImLazy} from 'ImLazy';

@inject(DataCache, Lazy.of(ImLazy), All.of('SuperPlugin'))
export class Events
{
    constructor(dataCache, lazyOfImLazy, plugins)
    {
        this.events = 
        [
            {id: 1, title: 'First Item'},
            {id: 2, title: 'Second Item'}
        ];

        this.cache = dataCache;
        this.cache.data.push('a');
        this.lazyOfImLazy = lazyOfImLazy;

        plugins.forEach(function(plugIn) {
            plugIn.doPlugInStuff();
        });
    }

    createAndUseLazy()
    {
        console.log('about to use lazy object.');
        this.lazyOfImLazy().doStuff();
    }
}