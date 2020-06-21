import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import '../../styles/style.css';
import ViewReceipt from '../ViewReceipt/ViewReceipt';

class Receipt extends Component {
    render() {
        return(<>
        <Table.Row>
            <Table.Cell><ViewReceipt receipt={this.props.item} refreshReceipts={this.props.refreshReceipts}></ViewReceipt></Table.Cell>
            <Table.Cell>{this.props.item.description}</Table.Cell>
            <Table.Cell>£{this.props.item.price}</Table.Cell>
            <Table.Cell>{this.props.item.purchase_date}</Table.Cell>
        </Table.Row>
        </>
        );
    }
}

export default Receipt;