import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
import { connect } from "react-redux"
import Menu from "./MenuComponent"
import { Route, Switch, Redirect,withRouter } from "react-router-dom"
import Detail from "./dishdetail"
import About from "./aboutus"
import Home from "./home"
import Contact from "./contact"



const mapStateToProps=(state)=>{
    return {
        dishes : state.dishes,
        comments:state.comments,
        leaders:state.leaders,
        promotions:state.promotions
    }
}
class Main extends Component {


    constructor(props) {
        super(props)
       
    }

    render() {
        const sendidtocomponent=({match})=>{
            console.log(match.params);
         return(
            <Detail dish={this.props.dishes.filter(dish=>dish.id ===parseInt(match.params.id,10))[0]}
            comments={this.props.comments.filter(comment=>comment.dishId ===parseInt(match.params.id,10))}/>
            )

        }

        return (<div>
            <Header />
            <Switch>
            <Route exact path="/aboutus" children={<About leaders={this.props.leaders}/>}/>
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/home" children={<Home dish={this.props.dishes.filter(dish => dish.featured === true)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured === true)[0]}
                    leader={this.props.leaders.filter(leader => leader.featured === true)[0]} />} />
                <Route exact path="/menu" children={<Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:id" component={sendidtocomponent}/>
                <Redirect to="/home" />
            </Switch>


            <Footer />
        </div>);
    }
}

export default withRouter(connect(mapStateToProps)(Main)) ;

