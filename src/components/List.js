import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import UserIcon from 'material-ui/svg-icons/action/account-box';
import { Link } from 'react-router-dom';

const List = (props) => (
  <div style={{width: '70%', margin: '0 auto', marginTop: 30, height: '20em', overflowY: 'scroll'}}>
    <Divider />
    <ul>
      {props.tiles.map((tile) => (
        <div key={tile['_id']}><Link to={'/'+tile['type']+'/'+tile['_id']}>{tile[Object.keys(tile)[1]]}</Link><h1>{tile['type']}</h1><h1 style={{float: 'right'}} onClick={(e) => props.setPanel(e, tile['_id'])}>Copy</h1></div>
      ))}
    </ul>
    {/*
    <Menu style={{width: '60%', margin: '0 auto'}}>
      {props.tiles.map((tile) => (
        <Link to={'/'+tile['type']+'/'+tile['_id']}>
        <MenuItem key={tile['_id']}
          onTouchTap={() => props.history.push('/'+tile['type']+'/'+tile['_id'])}
          primaryText={tile[Object.keys(tile)[1]]}
          leftIcon={<Avatar icon={<UserIcon />}/>}
          rightIcon={<ContentAdd onClick={(e) => props.setPanel(e, tile['_id'])} onTouchTap={(e) => props.setPanel(e, tile['_id'])} style={{width: 40, height: 40, marginTop: 3 }} />}/>
        </Link>
      ))}
    </Menu>
    */}
  </div>
)

export default List;
