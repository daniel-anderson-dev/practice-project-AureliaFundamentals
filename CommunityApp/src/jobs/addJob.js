import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {ValidationRules, ValidationController, validateTrigger} from 'aurelia-validation';

@inject(DataRepository, ValidationRules, ValidationController)
export class AddJob
{
    constructor(dataRepository, controller)
    {
        this.job = { jobType: 'Full Time', jobSkills: [] };
        this.dataRepository = dataRepository;
        this.dataRepository.getStates().then(states => {
            this.states = states;
        });
        this.dataRepository.getJobTypes().then(jobTypes => {
            this.jobTypes = jobTypes;
        });
        this.dataRepository.getJobSkills().then(jobSkills => {
            this.jobSkills = jobSkills;
        });

        // Validation does not work.  Either I made a typo or there may be framework updates which are inconsitent with the demo.

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;

        ValidationRules.customRule('notCEO'
            , (value, object) => value !== 'CEO'
            , 'not going to happen');

        ValidationRules
        .ensure(j => j.title)
        .required()
        .minLength(3)
        .satisfiesRule('notCEO')
        .on(this.job);
    }

    activate(params, routeConfig, navigationInstruction)
    {
        this.router = navigationInstruction.router;
    }

    save()
    {
        if (this.controller.errors && this.controller.errors.length > 0) return;
        if (this.job.needDate) {
            this.job.needDate = new Date(this.job.needDate);
        }

        this.dataRepository.addJob(this.job).then(job => this.router.navigateToRoute('jobs'));
    }
}