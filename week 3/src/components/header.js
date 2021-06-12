import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron,Form,FormGroup,Label,Input ,Button,Modal,ModalHeader,ModalBody} from "reactstrap"
import {NavLink} from "react-router-dom"
class Header extends Component {
    constructor(props){
        super(props)  
        this.state={
            isNavOpen:false,
            isModalopen:false
        }
        this.toggleNav=this.toggleNav.bind(this)
        this.toggleModal=this.toggleModal.bind(this)
        this.handellogin=this.handellogin.bind(this)
    }
    handellogin(event){
        event.preventDefault()
        this.toggleModal();
        alert("Usernme:"+this.username.value+"  Password:"+this.password.value+ "  Remember:" +this.remember.checked)
        
    }
     toggleNav() {
         this.setState({isNavOpen:!this.state.isNavOpen})
         
     }
     toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})
     }
    render() {
       
        return (<React.Fragment>
            <Navbar dark  expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/" ><img src="assets/images/logo.png" height="30" width="41" alt="Ristorsnte Con Fusion"/></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About us</NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span>contact us</NavLink>
                        
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span>Login
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our Lipmacking creations will tickle your culinary senses!</p>

                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handellogin}>
                        <FormGroup>
                            <Label htmlfor="username" >Username</Label>
                            <Input id="username" type="text" name="username" innerRef={(input)=>this.username=input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="password" >Password</Label>
                            <Input id="password" type="password" name="password" innerRef={(input)=>this.password=input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" onSubmit={this.handellogin}>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>);
    }
}

export default Header;