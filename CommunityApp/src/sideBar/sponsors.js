export class Sponsors
{
    constructor()
    {
        this.message = 'Test Message';
        setTimeout(() => this.message = 'Changed after binding.', 3000);
    }
}