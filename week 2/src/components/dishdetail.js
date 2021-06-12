import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem,Breadcrumb} from "reactstrap"
import {Link} from  "react-router-dom"
const Detail=({dish,comments})=> {
    
  
   
        return (<div className="container">
            
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
            <div className="row ">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody >
                            <CardTitle >
                                {dish.name}
                            </CardTitle>
                            <p>{dish.description}</p>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardTitle >
                               Comments
                            </CardTitle>
                        <CardBody >
                        {comments.map(comment=>{

                            return(
                                <CardText key={comment.id}>
                                
                                    {comment.comment}
                                
                                <br/>
                                
                                    ---{comment.author},{new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(comment.date)))}
                                
                            </CardText>)
                        })}
                        </CardBody>
                    </Card>
                </div>
                
            </div>)
            </div>
        )

    
}

export default Detail;







