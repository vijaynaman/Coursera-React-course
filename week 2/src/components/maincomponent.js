import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
import { DISHES } from "../shared/dishes"
import { COMMENTS } from "../shared/comments"
import { LEADERS } from "../shared/leaders"
import { PROMOTIONS } from "../shared/promostions"
import Menu from "./MenuComponent"
import { Route, Switch, Redirect } from "react-router-dom"
import Detail from "./dishdetail"
import About from "./aboutus"
import Home from "./home"
import Contact from "./contact"
class Main extends Component {


    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,

        }
    }

    render() {
        const sendidtocomponent=({match})=>{
            console.log(match.params);
         return(
            <Detail dish={this.state.dishes.filter(dish=>dish.id ===parseInt(match.params.id,10))[0]}
            comments={this.state.comments.filter(comment=>comment.dishId ===parseInt(match.params.id,10))}/>
            )

        }

        return (<div>
            <Header />
            <Switch>
            <Route exact path="/aboutus" children={<About leaders={this.state.leaders}/>}/>
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/home" children={<Home dish={this.state.dishes.filter(dish => dish.featured === true)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured === true)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured === true)[0]} />} />
                <Route exact path="/menu" children={<Menu dishes={this.state.dishes} />} />
                <Route path="/menu/:id" component={sendidtocomponent}/>
                <Redirect to="/home" />
            </Switch>


            <Footer />
        </div>);
    }
}

export default Main;

