import { combineReducers } from 'redux';

import alertReducers from './alert/alertReducers';
import projectReducers from './project/reducers';
import projectsReducers from './projects/projectsReducers';
import projectDeploymentReducers from './projectDeployments/reducers';

export default combineReducers({
  alert: alertReducers,
  project: projectReducers,
  projects: projectsReducers,
  projectDeployments: projectDeploymentReducers
});
