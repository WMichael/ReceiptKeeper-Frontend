import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class Receipt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<>
        <Table.Row>
            <Table.Cell>{this.props.item.name}</Table.Cell>
            <Table.Cell>{this.props.item.description}</Table.Cell>
            <Table.Cell>£{this.props.item.price}</Table.Cell>
            <Table.Cell>{this.props.item.purchase_date}</Table.Cell>
            <Table.Cell>{this.props.item.image_url}</Table.Cell>
            <Table.Cell><span role='img' aira-label='Edit'>🛠</span><span role='img' aira-label='Delete'>❌</span></Table.Cell>
        </Table.Row>
        </>
        );
    }
}

export default Receipt;