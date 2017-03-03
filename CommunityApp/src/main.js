import 'bootstrap';
import {PlugIn1} from 'Plugin1';
import {PlugIn2} from 'Plugin2';

export function configure(aurelia)
{

    aurelia.use.instance('apiRoot','http://localhost:27092/');
    aurelia.use.globalResources('common/dateFormat');

    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a => a.setRoot('shell'));

    aurelia.use.transient('SuperPlugin', PlugIn1);
    aurelia.use.transient('SuperPlugin', PlugIn2);
}