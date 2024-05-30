import React, { Component } from 'react';

class PtdProductList extends Component {
  ptdBtnEdit = (product) => {
    console.log("Edit:", product);
    this.props.ptdOnEdit(product);
  }

  render() {
    const { renderProducts } = this.props;
    console.log("Products:", renderProducts);

    let fnStatus = (param) => {
      if (param === 1) {
        return 'Hien thi';
      }
      return 'An';
    }

    let elementProducts = renderProducts.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.active ? 'Hien thi' : 'An'}</td>
          <td>
            <button className='btn btn-success mx-1'
              name='ptdBtnEdit'
              onClick={() => this.ptdBtnEdit(item)}>
              <i className="fa-regular fa-fen-to-square"></i>
            </button>
            <button className='btn btn-danger mx-1' name='ptdBtnDelete'>
              <i className="fa-regular fa-fen-to-square"></i>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Function</th> 
            </tr>
          </thead>
          <tbody>
            {elementProducts} {/* Hiển thị danh sách sản phẩm */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PtdProductList;