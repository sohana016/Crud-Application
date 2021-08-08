import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'antd';
class AddDataModal extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Modal
                    style={{ height: "100%" }}
                    title="ADD Product"
                    visible={this.props.isVisibility}
                    onOk={this.props.onSubmit}
                    onCancel={this.props.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.props.handleCancel} >
                            Return
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.props.onSubmit}>
                            Submit
                        </Button>,
                    ]}
                >
                    <div>
                        <Row>
                            <Col span={2}> <label>Title</label></Col>
                            <Col span={12}> <input type="text" size="30" onChange={this.props.onChangeTitle} /></Col>
                            <Col span={2}></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={2}> <label>Body</label></Col>
                            <Col span={12}> <textarea size="50" onChange={this.props.onChangeBody} />
                                <Col span={2}></Col>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddDataModal;