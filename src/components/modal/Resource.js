'use strict';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import DB from 'app/utils/DB';
import Loading from 'app/components/Loading';


class UserForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			processing: false,
		};
		this.updateField = this.updateField.bind(this);
		this.submit = this.submit.bind(this);
	}


	updateField( field, value ) {
		this.setState({ [field]: value });
	}

	submit() {
    const username = this.state.username;
    const password = this.state.password;
		this.setState({ processing: true, username: '', password: '' });
    fetch('/auth/users/create', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: ''+username,
        password: ''+password
      })
    }).then(res => {
			console.log(res);
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
				disabled={ ! this.state.username || ! this.state.password }
				onTouchTap={ this.submit }
			/>,
		];



		return (
			<Dialog
				title="Add New User"
				actions={ actions }
				modal={ true }
				open={ this.props.open }
			>

				<p>Enter new user's details below.</p>

				{ this.state.processing &&
					<div>
						<Loading />
					</div>
				}

				{ ! this.state.processing &&
				<div>
					<TextField
						floatingLabelText="Username"
						fullWidth={true}
						defaultValue={ this.state.username }
						onChange={ (event,newValue) => { this.updateField('username', newValue) } }
						autoFocus={true} />
					<TextField
						floatingLabelText="Password"
						fullWidth={true}
						defaultValue={ this.state.password }
						onChange={ (event,newValue) => { this.updateField('password', newValue) } } />
				</div>
				}

			</Dialog>
		)

	}

}

export default UserForm;
