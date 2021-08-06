import React, { Component } from 'react';
import { Row, Col, Card ,Button} from 'antd';
const style = { padding: '8px 0' };
class gridView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id :""
        }

    }

    componentDidMount() {

        this.getData();
    }

    async getData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
            });
            let res = await response.json();
            this.setState({ data: res })
         

        } catch (error) {
            console.log("error...", error)
        }
    }

    

    removeItem(item) {
        if (window.confirm('Are you Sure?')) {
    
          if (item && item.id) {
            try {
              fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
                method: "DELETE",
                headers: {
                  'Content-Type': 'application/json',
                  "accept": "application/json"
                },
              });
              this.getData()
              console.log(",,,,,,,,,,,,,delete", item.id)
            } catch (error) {
              console.log(error);
            }
          }
        }
    }
    render() {
        const datas = this.state.data

        return (

            <div style={{ marginLeft: "80px", padding: "50px" }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {datas.map((item, index) => {
                        return (
                            <div>
                                <Col className="gutter-row" span={6}>

                                    <Card style={{ width: 300, height: 250, justifyContent: "center", marginBottom: "50px" }}>
                                        <div style={{ color: "red" }}>{item.title}</div>
                                        <div style={style}>{item.body}</div>
                                        <div>
                                            <Row>
                                                <Col>
                                            <a href={`/details?id=${item.id}`} style={{ marginRight: "180px", color: "blue" }}> Read More</a>
                                                
                                                </Col>
                                                <Col></Col>
                                                <Col>
                                            <Button onClick={() => { this.removeItem(item) }} style={{ marginLeft: "80px", color: "blue" ,marginBottom:"50px"}}> Remove</Button>
                                                
                                                </Col>
                                            </Row>

                                        </div>
                                        
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}

                </Row>
            </div>

        );
    }
}

export default gridView;