import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem,Breadcrumb,Button,ModalBody,Modal,ModalHeader,Col, Label,Row} from "reactstrap"
import {Link} from  "react-router-dom"
import {Control,LocalForm,Errors} from "react-redux-form"



const maxLength =(len)=>(val)=>!val || (val.length<=len);
const minLength =(len)=>(val)=>val && (val.length>=len);
class Detail extends Component {
    constructor(props){
        super(props)  
        this.state={
            isModalopen:false
        }
        
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleSubmit(values){
    
        console.log("current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
        
    }
    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})
     }
   render(){
       return (<React.Fragment> <div className="container">
            
   <div className="row">
       <Breadcrumb>
       <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
       <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
       </Breadcrumb>
       <div className="col-12">
           <h3>{this.props.dish.name}</h3>
           <hr/>
       </div>
   </div>
<div className="row ">
   <div className="col-12 col-md-5 m-1">
       <Card>
           <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
           <CardBody >
               <CardTitle >
                   {this.props.dish.name}
               </CardTitle>
               <p>{this.props.dish.description}</p>
           </CardBody>
       </Card>
       </div>
       <div className="col-12 col-md-5 m-1">
       <Card>
       <CardTitle className="m-3">
                  Comments
               </CardTitle>
           <CardBody >
           {this.props.comments.map(comment=>{

               return(
                   <CardText key={comment.id}>
                   
                       {comment.comment}
                   
                   <br/>
                   
                       ---{comment.author},{new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(comment.date)))}
                   
               </CardText>)
           })}
           </CardBody>
           <Button outline className="col-5 ml-3 mb-2" onClick={this.toggleModal}> <span className="fa fa-pencil fa-lg" ></span>Submit Comment</Button>
       </Card>
   </div>
   
</div>
</div>
<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                <Row className="form-group">
                <Label htmlfor="rating"  md={12}>
                                    Rating
                                </Label>
                                <Col md={12}>
                    <Control.select model=".rating" id="rating" className="form-control" name="rating"  >
                        <option>1</option>
                        <option>2</option>  
                        <option>3</option>
                        <option>4</option> 
                        <option>5</option>
                    </Control.select>
                    </Col>
                               
                </Row>
                <Row className="form-group">
                                <Label htmlfor="name"  md={12}>
                                    Your Name
                                </Label>
                                <Col md={12}>
                                    <Control.text model=".authorname" className="form-control"  id="name" name="authorname" placeholder="Your name" 
                                    validators={
                                        { minLength: minLength(3), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger"
                                    model=".authorname"
                                    show="touched"
                                    messages={{minLength:"must be greater than 2 character",maxLength:"must be less than 15 characters"}}/>
                                </Col>
                </Row>
                <Row className="form-group">
                                <Label htmlfor="comment"  md={12}>
                                    Comment
                                </Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" className="form-control" id="comment"  name="comment"   rows="6"/>
                                </Col>
                </Row>
                <Row className="form-group">
                                <Col md={{size:11}}>
                                    <Button type="submit" color="primary" >
                                        Submit
                                    </Button>
                                </Col>
                </Row>
                            
                </LocalForm >
                </ModalBody>
            </Modal>
</React.Fragment>
)}
        

    
}

export default Detail;







