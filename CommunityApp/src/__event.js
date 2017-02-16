// Holding on to the demo code.

import {DataCache} from 'dataCache';
import {inject} from 'aurelia-framework';

@inject(DataCache)
export class Event
{
    constructor(cache)
    {
        cache.data.push('b');
    }

    activate(bindingContext)
    {
        this.item = bindingContext;
    }
}