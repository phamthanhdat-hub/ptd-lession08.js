import React, { Component } from 'react';

class PtdProductAddOrEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            title: 'Cabbage',
            active: true,
        }
    }

    componentDidMount() {
        const { renderProduct } = this.props;
        if (renderProduct) {
            this.setState({
                title: renderProduct.title,
                id: renderProduct.id,
                active: renderProduct.active,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.renderProduct !== this.props.renderProduct) {
            const { renderProduct } = this.props;
            this.setState({
                title: renderProduct.title,
                id: renderProduct.id,
                active: renderProduct.active,
            });
        }
    }

    ptdHandleChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = name === 'active' ? JSON.parse(value) : value;
        this.setState({
            [name]: parsedValue
        });
    }

    ptdHandleSubmit = (ev) => {
        ev.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='cod-mb-6' onSubmit={this.ptdHandleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">ID</span>
                        <input
                            type="text"
                            className="form-control"
                            id='id'
                            name='id'
                            value={this.state.id}
                            onChange={this.ptdHandleChange}
                            aria-label='Id'
                            aria-describedby="basic-addon1"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Title</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name='title'
                            value={this.state.title}
                            onChange={this.ptdHandleChange}
                            aria-label='title'
                            aria-describedby="basic-addon2"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">Active</span>
                        <select
                            className="form-control"
                            name='active'
                            value={this.state.active}
                            onChange={this.ptdHandleChange}
                            aria-label='Active'
                            aria-describedby="basic-addon3"
                        >
                            <option value={true}>Hiển thị</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>

                    <button className='btn btn-success' type="submit">Ghi lại</button>
                </form>
            </div>
        );
    }
}

export default PtdProductAddOrEdit;