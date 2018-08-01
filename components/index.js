import React, { Component } from "react";
import { Dimensions, ScrollView,View } from "react-native";
import { Container, Header, Left, Right, Body, Footer, Content, Drawer, Form, Input, Button, Icon, FooterTab,Text } from "native-base";

import Home from "./home";
const { width, height, fontScale } = Dimensions.get("window");
export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            drawer: false,
            page:"home"
        }
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Form>
                            <Input floatingLabel="true" placeholder="Search" style={{ width: width * 30, color: "white" }} />
                        </Form>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="pin" />
                        </Button>
                        <Button transparent>
                            <Icon name="md-text" />
                        </Button>
                    </Right>
                </Header>
                <Content >
                    <Home />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active={this.state.page==="home"?true:false}>
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Login</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="person-add" />
                            <Text>Sign Up</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="book" />
                            <Text>About</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}