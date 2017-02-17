import {eventsData} from 'services/eventsData'
// Apparently moment is not an ES6 "module" and is instead "just an object".
import moment from 'moment';

export class DataRepository
{
    constructor()
    {
        this.events = eventsData;
    }

    getEvents()
    {
        var promise = new Promise((resolve, reject) =>
        {
            if (!this.events)
            {
                setTimeout(_ => {
                    this.events = eventsData;

                    this.events.forEach(item => {
                        var dateTime = moment(item.dateTime).format('MM/DD/YYYY HH:mm');
                        item.dateTime = dateTime;
                    });

                    resolve(this.events);
                }, 2000);
            }
            else
            {
                resolve(this.events);
            }
        });

        return promise;
    }

    getEvent(eventId)
    {
        return this.events.find(item => item.id == eventId);
    }
}