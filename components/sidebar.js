import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchAbleOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { List, ListItem, Content, Container, CardItem, Right, Thumbnail, Button, Left, Card } from "native-base";
const { height, width, fontScale } = Dimensions.get("window");
export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: "Mobile Phones", icon_name: "mobile", icon_color: "#5c2784" },
                { name: "Vehicles", icon_name: "car", icon_color: "#163e80" },
                { name: "Furnitures", icon_name: "bed", icon_color: "#00b973" },
                { name: "Motor Bikes", icon_name: "motorcycle", icon_color: "#ff7700" },
                { name: "Books", icon_name: "book", icon_color: "#81c8ea" },

            ]
        }
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white", height: height, width: width / 2 }}>
                <Content>
                    <Image source={require('../images/olx_icon.png')} style={styles.iconstyle} />
                    <View>
                        {this.state.list.map((menu, index) => {
                            return (
                                <Button transparent>
                                    <Card>
                                        <CardItem style={styles.sideBarItems}>
                                            <Left>
                                                <Icon active name={menu.icon_name} style={{ marginRight: 5, color: menu.icon_color, fontSize: fontScale * 15 }} />
                                                <Text>{menu.name}</Text>
                                            </Left>
                                            <Right>
                                                <Icon name="long-arrow-right" />
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </Button>
                            )
                        })}
                    </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    inputFields: {
        margin: 10,
        padding: 5
    },
    iconstyle: {
        height: height / 4,
        width: width / 2.5,
        marginLeft: 15,
        marginTop: 5
    },
    sideBarItems: {
        padding: 10,
        marginTop: 20
    }
})