import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import TodoInfo from './scenes/Todo/Todo';
import Viewer from './scenes/ReactViewer/ViewerList';
import ReactDropzone from './scenes/ReactViewer/ReactDropzone';
import ReduxFormDemo from './scenes/ReduxForm/ReduxFormDemo';
import SimpleBootStrapDemo from './scenes/ReactBootstrap/SimpleBootStrapDemo';
import ReactYouTubeDemo from './scenes/ReactViewer/ReactYouTubeDemo';
import ReactSlickDemo from './scenes/ReactViewer/ReactSlickDemo';
import UserefDemo from './scenes/ReactHooks/UseRef';
import UsePreviousDemo from './scenes/ReactHooks/UsePrevious';
import ReactPoper from './scenes/ReactViewer/ReactPoper';
import Login from './scenes/auth/Login';
import SignUp from './scenes/auth/SignUp';
import Book from './scenes/Dashboard/Books';

const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/app/signin" component={Login} />
    <Route exact path="/app/signup" component={SignUp} />

    <Route exact path='/app/books' component={Book} />
    <Route exact path="/app/todo" component={TodoInfo} />
    <Route exact path="/app/viewer" component={Viewer} />
    <Route exact path="/app/dropzone" component={ReactDropzone} />
    <Route exact path="/app/redux-form" component={ReduxFormDemo} />
    <Route exact path="/app/bootstrap" component={SimpleBootStrapDemo} />
    <Route exact path="/app/react-youtube" component={ReactYouTubeDemo} />
    <Route exact path="/app/react-slick" component={ReactSlickDemo} />
    <Route exact path="/app/useref" component={UserefDemo} />
    <Route exact path="/app/usePrevious" component={UsePreviousDemo} />
    <Route exact path='/app/react-poper' component={ReactPoper} />
    </Switch>
    </BrowserRouter>
)

export default Routes;