import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import Receipt from '../Receipt/Receipt';

class ReceiptsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API}/receipts`).then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    };


    render() {
        const receipts = (
            this.state.items.map(item => (
                <Receipt key={item._id} item={item}></Receipt>
            ))
        );

        return(
            <Table celled>
                 <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Purchase Date</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {receipts}
                </Table.Body>
            </Table>
        );
    }
}

export default ReceiptsTable;