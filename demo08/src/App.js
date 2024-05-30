import React, { Component } from 'react'
import PtdProductAddOrEdit from './compornent/PtdProductAddOrEdit';
import PtdProductList from './compornent/PtdProductList';

 class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products : [
       
        { title: 'Cabbage', id: 1, active:true},
        { title: 'Garlic', id: 2, active:false},
        { title: 'Apple', id: 3, active:true},
    
      
      ],
    }
  }
  ptdHandldSubmit =(param)=>{
    console.log("App:",param);
    //them vao  mang du lieu
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  ptdHandleEdit = (products)=>{
    console.log("App-edit:",products);
    this.setState({
      products:products
      
    })
  }
  render() {
    return (
      <div className='container boder mt-5'>
        <h1> Pham Thanh Dat-render-Data-eventform </h1>
        <hr/>
        < PtdProductList renderProducts={this.state.products} ptdOnEdit={this.ptdHandleEdit}/>
        <hr/>
        <PtdProductAddOrEdit onSubmit ={this.ptdHandldSubmit} 
        renderProduct = {this.state.products}/> 
      
        </div>
    );
  }
}
export default App;
