import {eventsData} from 'services/eventsData'
// Apparently moment is not an ES6 "module" and is instead "just an object".
import moment from 'moment';

// Copy-paste
function filterAndFormat(pastOrFuture, events) {
	var results = JSON.parse(JSON.stringify(events));
	if (pastOrFuture == 'past') {
		results = results.filter(item => moment(item.dateTime) < moment());
	}
	else if (pastOrFuture == 'future') {
		results = results.filter(item => moment(item.dateTime) > moment());
	}
	else {
		results = results;
	}
	results.forEach(item => {
		var dateTime = moment(item.dateTime)
			.format("MM/DD/YYYY HH:mm");
			item.dateTime = dateTime;
	});

	return results;
}

export class DataRepository
{
    constructor()
    { }

    getEvents(pastOrFuture)
    {
        // Copy-paste
		var promise = new Promise((resolve, reject) => {
			if (!this.events) {
				setTimeout(() => {
					this.events = eventsData.sort((a,b) =>
					 a.dateTime >= b.dateTime ? 1 : -1);
					resolve(filterAndFormat(pastOrFuture, this.events));					
				},10);
			}
			else {
				resolve(filterAndFormat(pastOrFuture, this.events));
			}
		});

        return promise;
    }

    getEvent(eventId)
    {
        return this.events.find(item => item.id == eventId);
    }
}