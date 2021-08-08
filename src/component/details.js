import React, { Component } from 'react';
import queryString from 'query-string';
import { Row, Col, Card } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            dataById: ''
        }

    }
    componentWillMount() {
        let params = queryString.parse(this.props.location.search)
        if (params && params.id) {
            this.setState({ id: params.id })
        }
    }
    componentDidMount() {
        this.getDataById();
    }

    async getDataById() {
        const id = this.state.id
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
            });
            let res = await response.json();
            this.setState({ dataById: res })
        } catch (error) {
            console.log("error...", error)
        }
    }
    render() {
        const dataById = this.state.dataById
        return (
            <div style={{ marginLeft: "20px", padding: "50px" }}>
                <a href="/" style={{ marginRight: "250px", color: "blue" }}>Back</a>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={9}>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card style={{ width: 300, height: 250, justifyContent: "center", marginBottom: "50px" }}>
                            <div style={{ color: "red" }}>{dataById.title}</div>
                            <div >{dataById.body}</div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={9}>
                    </Col>

                </Row>
            </div>
        );
    }
}



export default Data;