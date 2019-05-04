import React from 'react'

class CategoryDisplay extends React.Component{	
	render(){
		return(
				<>
					<h3>{this.props.selectedcategory}</h3>
					<div className="catshowcase">
    					{this.props.categoryurls.map((image,i) => <img className="showcase" alt="More cats that match the cat-egory" key={i} src={image}/>)}
					</div>
				</>
			)
	}
}

export class CatList extends React.Component {
  render() {
    return <CategoryDisplay selectedcategory={this.props.selectedcategory} categoryurls={this.props.categoryurls}/>
  }
}