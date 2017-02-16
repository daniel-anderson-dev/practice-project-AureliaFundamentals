export class Shell
{
    configureRouter(config, router)
    {
        this.router = router;
        config.title = 'Browser Title';
        config.map([
            { route: ['', 'events'], moduleId: 'events'}
        ]);
    }
}