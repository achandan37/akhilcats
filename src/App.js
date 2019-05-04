import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { CatList } from './CatList';
import { Categories } from './Categories';

class App extends Component {
  state = {
    selectedcategory:"",
    catimage:[],
    categories:[],
    categoryurls:[]
  };
  // Retrieving the local storage everytime app is loaded
  componentDidMount(){
    if(localStorage.getItem("categories")){
      this.setState({categories: JSON.parse(localStorage.getItem("categories"))});
    }
  }
  // using this function to set local storage and include urls and previously set 
  // categories everytime a new category is assigned to an image
  addCatImage = (imageref) => {
    this.setState({currentcat:imageref});
    this.setState({catimage: {"url":imageref,"categories":""}})
  }

// using this function to append to previously set categories 
  addCategory = (categoryname) => {
    let categories=[];
    if(localStorage.getItem("categories")){
      categories= JSON.parse(localStorage.getItem("categories"));
      this.setState({categories: categories});
    }
    //seeing if the category has previously been included
    let includes=false;
    if(categories.length>0){
      categories.find((o, i) => {
        if (o.category === (categoryname)) {
            if(o.url.includes(this.state.catimage.url)){
            }
            else{
              o.url.push(this.state.catimage.url)
              o.value+=1;
            }
           includes=true;
        }
        return includes
      });
    }
    // if it hasnt been included including the category
    if(includes===false){
      let urlarray=[];
      urlarray.push(this.state.catimage.url)
      categories.push({category: categoryname,value:1,url: urlarray});
    }
    // adding category changes to local storage
    localStorage.setItem('categories', JSON.stringify(categories));
    this.setState({categories: categories});
    this.selectedcategory(this.state.selectedcategory,categories);
  }
  // filtering cat images for when cat button is clicked
  selectedcategory = (selectedcategory,category) => {
      let selectedurls=[];
      let catarray=[];
      if(category){
        catarray=category;
      }
      else{
        catarray=this.state.categories;
      }
      catarray.map(category => {
        if(selectedcategory===category.category){
            selectedurls=category.url;
        }
        return selectedurls
      })
      this.setState({selectedcategory:selectedcategory})
      this.setState({categoryurls:selectedurls})      
  }
  render() {
    return (
      <div className="container">
        <CatLoader classlist="JumboCatImg" mainCat={this.addCatImage} imagesrc={this.state.currentcat} />
        <Categories newcategoryfunction={this.addCategory} categories={this.state.categories} selectcategoryfn={this.selectedcategory}/>
        <CatList selectedcategory={this.state.selectedcategory} categoryurls={this.state.categoryurls}/>
      </div>
    );
  }
}

export default App;
