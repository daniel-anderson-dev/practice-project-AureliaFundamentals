import toastr from 'toastr';

export class Shell
{
    configureRouter(config, router)
    {
        this.router = router;
        config.title = 'Browser Title';

		// config.addPipelineStep('authorize', LogNextStep);
		// config.addPipelineStep('preActivate', LogNextStep);
		// config.addPipelineStep('preRender', LogNextStep);
		// config.addPipelineStep('postRender', LogNextStep);
		config.addPipelineStep('authorize', NavToastStep);

        config.map([
                // Copy-paste
				{ route: ['', 'events'], 
					viewPorts: { mainContent: {moduleId: 'events/events'}, 
					sideBar: {moduleId: 'sideBar/sponsors'}} , 
					name: 'Events', title: 'Events', nav: true},
				{ route: 'jobs', name: 'jobs', viewPorts: { mainContent: {moduleId: 'jobs/jobs'}, 
					sideBar: { moduleId: 'sideBar/sponsors'}},  
					title: 'Jobs', nav: true },
				{ route: 'discussion', viewPorts: { mainContent: {moduleId: 'discussion/discussion'}, 
					sideBar: { moduleId: 'sideBar/ads'} } , 
					title: 'Discussion', nav:true },
				{ route: 'eventDetail/:eventId', viewPorts: { mainContent: { moduleId: 'events/eventDetail'}, 
					sideBar: { moduleId: 'sideBar/ads'} } , name: 'eventDetail'},
				{ route: 'addJob', name: 'addJob', viewPorts:
					{ mainContent: { moduleId: 'jobs/addJob' }, sideBar: { moduleId: 'sideBar/sponsors'} }}
        ]);
    }
}

class LogNextStep
{
	run(navigationInstruction, next)
	{
		return next().then(result => {
			console.log(JSON.stringify(result));
			return result;
		});
	}
}

class NavToastStep
{
	run(navigationInstruction, next)
	{
		return next().then(result =>
		{
			if (result.status === 'canceled')
				toastr.error('Navigation Cancelled');
			if (result.status === 'completed')
				toastr.info('Navigation Completed');
			return result;
		});
	}
}