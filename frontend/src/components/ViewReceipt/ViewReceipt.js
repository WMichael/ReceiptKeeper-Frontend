import React, { Component } from 'react';
import { Modal, Header, Image, Button, Confirm } from 'semantic-ui-react';

class ViewReceipt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteConfirmOpen: false,
            showModal: false
        }
    }

    showDeleteConfirm = () => this.setState({deleteConfirmOpen: true});

    deleteNo = () => this.setState({deleteConfirmOpen: false});

    deleteYes = () => {
        this.setState({deleteConfirmOpen: false, showModel: false});
        this.deleteReceipt();
        this.props.refreshReceipts();
    }
    
    deleteReceipt() {
        fetch(`${process.env.REACT_APP_API}/receipts/${this.props.receipt._id}`,{method : 'DELETE'}).then(() => {
        }).catch( err => {
            // TODO: catch this error!
        });
    }

    render() {
        return (
            <>
            <Modal trigger={<Button>{this.props.receipt.name}</Button>} open={this.props.showModal} centered={false}>
                <Modal.Header>{this.props.receipt.name}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.receipt.image_url} />
                <Modal.Description>
                    <Header>Receipt Info:</Header>
                    <u>Description</u>
                    <p>{this.props.receipt.description}</p>
                    <u>Price</u>
                    <p>£{this.props.receipt.price}</p>
                    <u>Purchased date</u>
                    <p>{this.props.receipt.purchase_date}</p>
                <Button color='green'>Edit</Button>
                <Button color='red' onClick={this.showDeleteConfirm}>Delete</Button>
                </Modal.Description>
                </Modal.Content>
            </Modal>
                <Confirm open={this.state.deleteConfirmOpen}
                    cancelButton="No"
                    confirmButton="Yes"
                    onCancel={this.deleteNo}
                    onConfirm={this.deleteYes}
                    size="small"
                 />
                 </>
        );
    }
}

export default ViewReceipt;