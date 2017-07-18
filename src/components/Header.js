'use strict';

import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import { withRouter } from 'react-router-dom';


const Header = () => (

			<div className="component--appbar">
				<AppBar
					title='Janus'
					iconElementLeft={<img width='40' height='40' src='./images/icons_light.svg' />}
					iconElementRight={
						<IconMenu
      				iconButtonElement={<IconButton><AccountIcon /></IconButton>}
      				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      				targetOrigin={{horizontal: 'left', vertical: 'top'}}
    				>
				      <MenuItem primaryText="Refresh" />
				      <MenuItem primaryText="Settings" />
				      <MenuItem primaryText="Help" />
				      <MenuItem primaryText="Sign out" />
    				</IconMenu>
					}/>
			</div>

)

export default withRouter( Header );
