export class Sponsors
{
    constructor()
    {
        this.message = 'Test Message';
        setTimeout(() => this.message = 'Changed after binding.', 3000);
        this.mapCollection = new window.Map();
        this.mapCollection.set('a', 'Alpha');
        this.mapCollection.set('b', 'Bravo');
        this.mapCollection.set('c', 'Charlie');
        this.mapCollection.set('d', 'Delta');
    }

    doSomething(passedMessage)
    {
        console.log(passedMessage);
    }
}