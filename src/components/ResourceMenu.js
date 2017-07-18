import React from 'react';

import { Link } from 'react-router-dom';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const ResourceMenu = (props) => (
  <div style={{position: 'fixed', bottom: '200px', left: '30px', textAlign: 'right'}}>
    <Link to='/dashboard'><RaisedButton label="Dashboard" primary={true} /></Link>
    <div onClick={() => props.searchDB('users')}>Users</div>
    <div onClick={() => props.searchDB('properties')}>Properties</div>
    <Divider />
    <div onClick={() => props.openModal('user')}>Add user</div>
    <div onClick={() => props.openModal('property')}>Add property</div>
  </div>
)

export default ResourceMenu;
