import React, { Component } from 'react';

export class Await extends Component {
	constructor(props) {
		super(props);
		this.state = { resolved: null };
	}

	componentDidMount() {
		const promise = this.props.children;
		promise.then(resolved => this.setState({ resolved }));
	}

	render() {
		const Pending = this.props.pending;
		return this.state.resolved || <Pending />;
	}
}
