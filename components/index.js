import React, { Component } from "react";

//built in components
import { Dimensions, ScrollView, View } from "react-native";
import { Container, Header, Left, Right, Body, Footer, Content, Drawer, Form, Input, Button, Icon, FooterTab, Text } from "native-base";
import { Actions } from "react-native-router-flux";

//custom components
import Home from "./home";
import SideBar from "./sidebar";

//Dimensions
const { width, height, fontScale } = Dimensions.get("window");

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false,
            page: "home"
        }
    }
    static navigationOptions = {
        header: null
    }
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        return (
            <Container>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator}/>}
                    onClose={() => this.closeDrawer()}
                >
                    <Header>
                        <Left>
                            <Button transparent onPress={this.openDrawer}>
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
                            <Button vertical active={this.state.page === "home" ? true : false} >
                                <Icon name="home" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical onPress={() => Actions.push("login")}>
                                <Icon name="person" />
                                <Text>Login</Text>
                            </Button>
                            <Button vertical onPress={() => Actions.push("signup")}>
                                <Icon active name="person-add" />
                                <Text>Sign Up</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="book" />
                                <Text>About</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Drawer>
            </Container>
        )
    }
}