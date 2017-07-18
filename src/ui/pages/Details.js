import React, { Component } from 'react';

class Details extends Component {
  constructor(props){
    super(props);
    this.uri = props.location.pathname;
    this.deleteResource = this.deleteResource.bind(this);
  }
  componentDidMount(){
    let this_component = this;

		fetch('http://localhost:3000/api'+this.uri)
			.then(resp => resp.json()) // Transform the data into json
			.then(function(payload) {
				console.log(payload);
        /*
				this_component.setState({
					data: search.results
				});*/
			})
  }
  deleteResource(){
    fetch('http://localhost:3000/api'+this.uri, {
      method: 'delete'
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
	}
  render(){
    return(
      <div>
        <h1> Details </h1>
        <h1 onClick={this.deleteResource}> Delete </h1>
      </div>
    );
  }
}

export default Details;
