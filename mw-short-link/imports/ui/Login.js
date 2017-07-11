import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
	constructor(props) {
       super(props);
       this.state = {
          error: ''
       };
	}
	render() {
		return (
			<div>
			    <h1>Join Short Link</h1>

			   {this.state.error ? <p>{this.state.error}</p> : undefined}
               
			   <form onSubmit={this.onSubmit.bind(this)}>
	                <input type="email" ref="email" name="email" placeholder="Email"/>
	                <input type="password" ref="password" name="password" placeholder="Password"/>
	                <button>Create Account</button>
                </form>

			   <Link to="/signup">Have an account?</Link>
			</div>
		);
	}
}