import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Job from './components/job.js';
import Task from './components/task.js';
import Deploy from './components/deploy.js';
import Model from './components/model.js';

function RouterConfig({ history }) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={ IndexPage } />
        <Route path="/job" component={ Job } />
        <Route path="/task" component={ Task } />
        <Route path="/deploy" component={ Deploy } />
        <Route path="/model" component={ Model } />
        {/* <Redirect to="/" /> */}
      </Switch>
    </HashRouter>
  );
}
export default RouterConfig;
