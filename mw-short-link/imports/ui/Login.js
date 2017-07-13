import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
	constructor(props) {
       super(props);
       this.state = {
          error: ''
       };
	}
	onSubmit(e) {
		e.preventDefault();

		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
        	if (err) {
              this.setState({error: err.reason});
            } else {
              this.setState({error: ''});
            }
        });
	  }
	render() {
		return (
			<div>
			    <h1>Short Link</h1>

			   {this.state.error ? <p>{this.state.error}</p> : undefined}
               
			   <form onSubmit={this.onSubmit.bind(this)}>
	                <input type="email" ref="email" name="email" placeholder="Email"/>
	                <input type="password" ref="password" name="password" placeholder="Password"/>
	                <button>Log In</button>
                </form>

			   <Link to="/signup">Have an account?</Link>
			</div>
		);
	}
}