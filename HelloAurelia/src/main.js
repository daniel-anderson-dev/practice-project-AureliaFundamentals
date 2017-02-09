import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

// Demo purposes - probably not necessary.
LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia)
{
    aurelia.use.standardConfiguration();
    aurelia.start().then(a => a.setRoot());
}