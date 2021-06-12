import React, { Component } from 'react';

// import {Media} from "reactstrap"
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from "reactstrap"
import Detail from './dishdetail';
class Menu extends Component {
    constructor (props){
        super(props);
        this.state={
            selecteddish:null
           
        }
    }
    ondishSelect (dish) {
        this.setState({selecteddish:dish})
    }
    
    render() { 
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Media tag="li">
                        <Media left middle >
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                        </Media>
                        </Media> */}
                    <Card onClick={()=>this.ondishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>

                        
                    </Card>


                </div>
            );
        });
        return ( 
            <div className="container">
                <div className="row">
                   {menu} 
                </div>
                
                <Detail dish={this.state.selecteddish}/>
                
            </div>
         );
    }
}
 
export default Menu;
