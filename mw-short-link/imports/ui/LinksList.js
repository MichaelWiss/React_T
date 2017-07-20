import React from 'react';

export default class LinksList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: []
		};
	}
	componentDidMount() {
		console.log('componentDidMount LinksList');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount LinksList');
	}
	render() {
		return (
          <div>
            <p>Links List</p>
            
          </div>
		);
	}
};