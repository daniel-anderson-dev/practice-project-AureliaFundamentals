export class Shell
{
    configureRouter(config, router)
    {
        this.router = router;
        config.title = 'Browser Title';
        config.map([
                // Copy-paste
				{ route: ['', 'events'], 
					viewPorts: { mainContent: {moduleId: 'events/events'}, 
					sideBar: {moduleId: 'sideBar/sponsors'}} , 
					name: 'Events', title: 'Events', nav: true},
				{ route: 'jobs', viewPorts: { mainContent: {moduleId: 'jobs/jobs'}, 
					sideBar: { moduleId: 'sideBar/sponsors'}},  
					title: 'Jobs', nav: true },
				{ route: 'discussion', viewPorts: { mainContent: {moduleId: 'discussion/discussion'}, 
					sideBar: { moduleId: 'sideBar/ads'} } , 
					title: 'Discussion', nav:true },
				{ route: 'eventDetail/:eventId', viewPorts: { mainContent: { moduleId: 'events/eventDetail'}, 
					sideBar: { moduleId: 'sideBar/ads'} } , name: 'eventDetail'}
        ]);
    }
}