'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'app/components/Header';
import Login from 'app/ui/pages/Login';
import Dashboard from 'app/ui/pages/Dashboard';
import Settings from 'app/ui/pages/Settings';
import ResourcePage from 'app/ui/pages/ResourcePage';
import Details from 'app/ui/pages/Details';

class DefaultLayout extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<Header title="Reddit PWA" />
				<div className="component--content">
					<Route exact path="/" component={ Login } />
					<Switch>
						<Route exact path="/dashboard" component={ Dashboard } />
						<Route exact path="/settings" component={ Settings } />
						<Route path="/search" component={ ResourcePage } />
						<Route path="/:resource/:id" component={ Details } />
					</Switch>
				</div>
			</div>
		);
	}
}

export default DefaultLayout;
