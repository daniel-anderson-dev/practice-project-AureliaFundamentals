export class Discussion
{
    activate()
    {
        let promise = new Promise((resolve, reject) => {
            setTimeout(_ => resolve(), 3000);
        });
        return promise;
    }
}