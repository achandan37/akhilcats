import React from 'react'
import {fetchRandomCat} from './catApi'


// fetching cat url from api
export class CatLoader extends React.Component {
  fetchCat = () =>{
    fetchRandomCat().then(data=>{
      this.props.mainCat(data.file);
    })
  }
  componentDidMount() {
    this.fetchCat();
  }

  render() {
    return (
        <>
          <img className={this.props.classlist} src= { this.props.imagesrc } alt="Probably a cat"/><br/>
          <div className='clearfix'><button className='btn btn-primary' onClick={() => this.fetchCat()}>Next</button></div>
        </>
    )
  }
}