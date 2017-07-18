'use strict';

import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import all the custom styles
import 'app/css/reset.css';
import 'app/css/style.css';
import 'app/css/helper.css';
import 'app/css/typography.css';


// Needed for onTouchTap
// It's a mobile-friendly onClick() alternative for components in Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import DefaultLayout from 'app/ui/layouts/Default';

import { install } from 'offline-plugin/runtime';


// render the component
render(
	(
	<Router>
	<MuiThemeProvider>

		<DefaultLayout />

	</MuiThemeProvider>
	</Router>
	),
	document.getElementById('root')
);



// install the service worker.
install();
