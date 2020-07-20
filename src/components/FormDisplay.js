import React from 'react';

class FormDisplay extends React.Component {
	state = { isSubmitted: false };

	onFormSubmit = (e) => {
		e.preventDefault();
		// const doesSubmit = this.state.isSubmitted
		this.setState({ isSubmitted: true });
	};

	render() {
		return this.state.isSubmitted ? (
			<h1 className='display-3 p-5 font-weight-bolder bg-primary text-light '>
				Form Submitted
			</h1>
		) : (
			<form onSubmit={this.onFormSubmit}>
				<h1 className='text-center mb-5 text-uppercase font-weight-bold'>
					Log in
				</h1>
				<div className='form-group'>
					<label htmlFor='exampleInputEmail1'>Email address</label>
					<input
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='exampleInputPassword1'>Password</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<div className='form-group form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
					/>
					<label className='form-check-label' htmlFor='exampleCheck1'>
						Check me out
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		);
	}
}

export default FormDisplay;
