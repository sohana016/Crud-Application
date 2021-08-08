import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';
import AddDataModal from './AddDataModal';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
const style = { padding: '8px 0' };
class gridView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: "",
            visible: false,
            title:"",
            body:"",
            value:""
        }
        this.removeItem = this.removeItem.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
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
                    // console.log(",,,,,,,,,,,,,delete", item.id)
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    onChangeTitle(event) {
        this.setState({ title : event.target.value })
      }
      onChangeBody(event) {
        this.setState({ body : event.target.value })
      }

      onSubmit(){
        try {
            fetch(`$https://jsonplaceholder.typicode.com/posts`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
              },
              body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
              })
            })
              .then(response => response.json())
      
      
              .then(data => {
              })
      
          } catch (error) {
            console.log("error...", error)
          }
      
          this.setState({
            visible: false,
          });
      }
    render() {
        const datas = this.state.data

        return (

            <div style={{ marginLeft: "80px", padding: "50px" }}>
                <div style={{ marginLeft: "56%", marginBottom: "2%" }}>
                    <Button type="primary" onClick={this.showModal}>
                        ADD NEW
                    </Button>
                </div>
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
                                                <Col span={9}>
                                                    <a href={`/details?id=${item.id}`} style={{ marginRight: "180px", color: "blue" }}>Details</a>
                                                </Col>
                                                <Col span={1}></Col>
                                                <Col span={6}>
                                                    <Button onClick={() => { this.removeItem(item) }} style={{ marginLeft: "80px", color: "blue", marginBottom: "50px" }}> Remove</Button>
                                               </Col>
                                           </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}
                </Row>
                {this.state.visible === true ? <AddDataModal isVisibility={this.state.visible} handleCancel={this.handleCancel} title={this.state.title} body={this.state.body} onChangeTitle={this.onChangeTitle} onChangeBody={this.onChangeBody} onSubmit={this.onSubmit}/> : ""}
            </div>
        );
    }
}

const mapStateToProps=(state)=>({ 

    // data:state.data 
})
const mapDispatchToProps = (dispatch) => {
  return {
    // addData: ()=> dispatch(addData)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(gridView)

