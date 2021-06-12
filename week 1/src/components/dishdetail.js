import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"
class Detail extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (<React.Fragment>
            {this.props.dish!=null && (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody >
                            <CardTitle >
                                {this.props.dish.name}
                            </CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardTitle >
                               Comments
                            </CardTitle>
                        <CardBody >
                        {this.props.dish.comments.map(comment=>{

                            return(
                                <CardText>
                                <div>
                                    {comment.comment}
                                    
                                </div>
                                <br/>
                                <div>
                                    ---{comment.author}, {new Date(comment.date).toLocaleString('default', { month: 'short', })} {new Date(comment.date).getDay()},{new Date(comment.date).getFullYear()}
                                </div>
                            </CardText>)
                        })}
                        </CardBody>
                    </Card>
                </div>
                
            </div>)}
            </React.Fragment>
        )

    }
}

export default Detail;







{/*  */ }