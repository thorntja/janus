'use strict';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import DB from 'app/utils/DB';
import Search from 'app/components/Search';
import List from 'app/components/List';
import ResourceMenu from 'app/components/ResourceMenu';
import UserFormModal from 'app/components/modal/UserForm';
import PropertyFormModal from 'app/components/modal/PropertyForm';
import Boss from 'app/components/Boss';
import Drawer from 'material-ui/Drawer';
import Board from 'app/components/Board';

class ResourcePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      panelVisible: false,
      panelData: [],
      modal: false,
			form: '',
			data: []
    };
		this.fetchResources = this.fetchResources.bind(this);
		this.openPanel = this.openPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.searchDB = this.searchDB.bind(this);
	}

	componentWillUpdate(nextProps, nextState) {
		// when the menu becomes visible, setup some handlers so we can close the menu easily
		if(nextState.panelData != '') document.addEventListener('keydown', this.handleKeyDown);
		else document.removeEventListener('keydown', this.handleKeyDown);
	}
	componentDidMount() {
	let apiUrl = this.props.location.pathname+this.props.location.search;
	this.fetchResources(apiUrl);
	}

	fetchResources(url) {
		let networkDataReceived = false;
		const URL = `http://localhost:3000/api${ url }`;
		let this_component = this;

		const networkUpdate = fetch( URL )
			.then( (response) => {
				return response.json();
			})
			.then( (data) => {
				networkDataReceived = true;
				this_component.setState({ data: data.results });
			});

		// fetch cached data
		caches.match( URL )
			.then(function(response) {
				if ( ! response ) throw Error("No data");
				return response.json();
			})
			.then(function(body) {
				// don't overwrite newer network data
				if ( ! networkDataReceived ) {
					this_component.setState({ data: body.results });
				}
			})
			.catch(function() {
				// we didn't get cached data, the network is our last hope:
				return networkUpdate;
			})
			.catch(function(error) {
				this_component.setState({ loading: false, error: true });
			});
	}
	openModal(resource) {
		this.setState({ modal: true, form: resource });
	}
	closeModal() {
		this.setState({ modal: false, form: '' });
	}
	handleKeyDown(e){
    if(e.keyCode === 37)
      this.openPanel();
    else
      this.closePanel();
  }

  openPanel(){
    this.setState({
      panelVisible: true
    });
  }
  closePanel(){
    if(this.state.panelVisible)
    this.setState({
      panelVisible: false
    });
  }
  setPanel(e, id){
		let resource = { id: id, name: e.target.parentNode.firstChild.textContent };
    this.setState({
      panelData: resource
    });
    e.stopPropagation();
  }
	searchDB(url){
		let this_component = this;
		fetch('http://localhost:3000/api/'+url)
			.then((resp) => resp.json()) // Transform the data into json
			.then(function(search) {
				console.log(search.results);
				this_component.setState({
					data: search.results
				});
			})
	}

	render() {

		return (
			<div>
        <Drawer open={this.state.panelVisible} openSecondary={true} width={400} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
          <Board resource={this.state.panelData}/>
        </Drawer>
        {this.state.panelData.name &&
          <div className='panel-button' onClick={this.openPanel} onTouchStart={this.openPanel} style={{backgroundColor: 'rgba(0,0,0,0)', position: 'absolute', right: 0, top: '10em', height: 'calc(100% - 64px)'}}>View {this.state.panelData.name}</div>
        }
        <div style={{marginTop: 30}} onClick={this.closePanel} onTouchStart={this.closePanel}>
	  			<Search />
					<List tiles={this.state.data} setPanel={this.setPanel} />
				</div>
				<ResourceMenu openModal={this.openModal} searchDB={this.searchDB} />
				{this.state.form == 'user' ?
					<UserFormModal open={this.state.modal} close={this.closeModal} />
				:
					<PropertyFormModal open={this.state.modal} close={this.closeModal} />
				}
			</div>
		)
	}

}

export default ResourcePage;
