import {inject, Lazy} from 'aurelia-framework';
import {DataCache} from 'dataCache';
import {ImLazy} from 'ImLazy';

@inject(DataCache, Lazy.of(ImLazy))
export class Events
{
    constructor(dataCache, lazyOfImLazy)
    {
        this.events = 
        [
            {id: 1, title: 'First Item'},
            {id: 2, title: 'Second Item'}
        ];

        this.cache = dataCache;
        this.cache.data.push('a');
        this.lazyOfImLazy = lazyOfImLazy;
    }

    createAndUseLazy()
    {
        console.log('about to use lazy object.');
        this.lazyOfImLazy().doStuff();
    }
}