import 'bootstrap';
import {PlugIn1} from 'Plugin1';
import {PlugIn2} from 'Plugin2';

export function configure(aurelia)
{
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a => a.setRoot('shell'));

    aurelia.use.transient('SuperPlugin', PlugIn1);
    aurelia.use.transient('SuperPlugin', PlugIn2);
}