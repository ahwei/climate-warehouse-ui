import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IndeterminateProgressOverlay, Dashboard } from '../components/';
import * as Pages from '../pages';

import { AppContainer, Modal, NotificationContainer } from '../components';

const AppNavigator = () => {
  const { showProgressOverlay, connectionCheck, socketStatus } = useSelector(
    store => store.app,
  );
  return (
    <AppContainer>
      <NotificationContainer socketStatus={socketStatus} />
      {showProgressOverlay && <IndeterminateProgressOverlay />}
      {!connectionCheck && (
        <Modal
          type="error"
          label="Try Again"
          onOk={() => window.location.reload()}
          showButtons
          title="Network Error"
          body={
            'There is a connection error. The Climate Warehouse is inaccessible'
          }
        />
      )}
      <Router>
        <Dashboard>
          <Suspense fallback={<IndeterminateProgressOverlay />}>
            <Route exact path="/">
              <Pages.Home />
            </Route>
            <Route exact path="/units">
              <Pages.Units />
            </Route>
            <Route exact path="/projects">
              <Pages.Projects />
            </Route>
            <Route exact path="/projects/add">
              <Pages.AddProject />
            </Route>
            <Route exact path="/units/add">
              <Pages.AddUnits />
            </Route>
            <Route exact path="/storybook">
              <Pages.StoryBook />
            </Route>
          </Suspense>
        </Dashboard>
      </Router>
    </AppContainer>
  );
};

export { AppNavigator };
