import React, { Component } from 'react'

class Form extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<main>
					<form onSubmit={this.onSubmit} ref={el => {this.form = el}}>
						<input type="file" accept="image/*;capture=camera" name="file" ref={el => {this.input = el}}/>
						<input type="submit" value="Submit" />
					</form>
				</main>
			</div>
		)
	}
}

export default Form