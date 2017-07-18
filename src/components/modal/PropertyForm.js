'use strict';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import DB from 'app/utils/DB';
import Loading from 'app/components/Loading';


class PropertyForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			address: '',
			processing: false,
		};
		this.updateField = this.updateField.bind(this);
		this.submit = this.submit.bind(this);
	}


	updateField( field, value ) {
		this.setState({ [field]: value });
	}

	submit() {
    const address = this.state.address;
		this.setState({ processing: true, address: '' });
    fetch('/api/properties', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address: address
      })
    }).then(res => {
      this.props.close();
		});
    /*
		return DB.addSubReddit({ title, url, description })
		.then( res => {
			this.setState({ processing: false });
			this.props.update();
			this.props.close();
		});
*/
	}


	render() {

		const actions = [
			<FlatButton
				label="Cancel"
				primary={ true }
				onTouchTap={ this.props.close }
			/>,
			<FlatButton
				label="Submit"
				primary={ true }
				disabled={ ! this.state.address }
				onTouchTap={ this.submit }
			/>,
		];



		return (
			<Dialog
				title="Add New Property"
				actions={ actions }
				modal={ true }
				open={ this.props.open }
			>

				<p>Enter new property's details below.</p>

				{ this.state.processing &&
					<div>
						<Loading />
					</div>
				}

				{ ! this.state.processing &&
				<div>
					<TextField
						floatingLabelText="Address"
						fullWidth={true}
						defaultValue={ this.state.address }
						onChange={ (event,newValue) => { this.updateField('address', newValue) } }
						autoFocus={true} />
				</div>
				}

			</Dialog>
		)

	}

}

export default PropertyForm;
