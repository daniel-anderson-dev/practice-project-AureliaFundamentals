import {DataCache} from 'dataCache';
import {inject} from 'aurelia-framework';

@inject(DataCache)
export class Events
{
    constructor(dataCache)
    {
        this.events = 
        [
            {id: 1, title: 'First Item'},
            {id: 2, title: 'Second Item'}
        ];

        this.cache = dataCache;
        this.cache.data.push('a');
    }
}