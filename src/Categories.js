import React from 'react'

// Form for adding new categories for an image
class Form extends React.Component{
	state = {
		category: ''
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.submitfunction(this.state.category);
		// resetting to an empty input after submit
		this.setState({"category":''})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<input 
						className="form-control" 
						type="text" 
						value={this.state.category}
						onChange={event=> this.setState({ category: event.target.value })}
						placeholder="Category" 
						required/>
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		)
	}
}

// Displaying category buttons for all categories that have been input
class Category extends React.Component{
	render(){
		return (

			<div className='clearfix'>
				<div>
					{this.props.categories.map((category,i) => <button className="btn btn-info" key={i} onClick={()=>this.props.selectcategoryfn(category.category)}> {category.category} {category.value}</button>)}
				</div>
			</div>)
	}
}
	
export class Categories extends React.Component {
	render() {
		return( 
			<>
				<Form submitfunction={(categoryname)=>this.props.newcategoryfunction(categoryname)}/>
				<Category categories={this.props.categories} selectcategoryfn={this.props.selectcategoryfn}/>
			</>
		)
	}
}