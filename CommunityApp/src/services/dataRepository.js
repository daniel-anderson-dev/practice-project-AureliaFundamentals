import {eventsData} from 'services/eventsData'
import {jobsData, states, jobTypes, jobSkills} from 'services/jobsData'
// Apparently moment is not an ES6 "module" and is instead "just an object".
import moment from 'moment';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

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

	return results;
}

@inject(HttpClient)
export class DataRepository
{
    constructor(httpClient)
    {
		this.httpClient = httpClient;
	}

    getEvents(pastOrFuture)
    {
        // Copy-paste
		var promise = new Promise((resolve, reject) => {
			if (!this.events) {
				this.httpClient.get('http://localhost:27092/api/Events')
				.then(result => {
					var data = JSON.parse(result.response);
					this.events = data.sort((a,b) =>
					 a.dateTime >= b.dateTime ? 1 : -1);
					resolve(filterAndFormat(pastOrFuture, this.events));
				});
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

	addJob(job)
	{
		var promise = new Promise((resolve,reject) => {
			this.jobs.push(job);
			resolve(job);
		});
		return promise;
	}

	/* copy-paste*/
	getJobs() {
		var promise = new Promise((resolve, reject) => {
			if (!this.jobs) {
				this.jobs = jobsData;
			}
			resolve(this.jobs);
		});
		return promise;
	}

	getStates() {
		var promise = new Promise((resolve, reject) => {
			if (!this.states) {
				this.states = states;
			}
			resolve(this.states);
		});
		return promise;
	}

	getJobTypes() {
		var promise = new Promise((resolve, reject) => {
			if (!this.jobTypes) {
				this.jobTypes = jobTypes;
			}
			resolve(this.jobTypes);
		});
		return promise;
	}
	
	getJobSkills() {
		var promise = new Promise((resolve, reject) => {
			if (!this.jobSkills) {
				this.jobSkills = jobSkills;
			}
			resolve(this.jobSkills);
		});
		return promise;
	}

}