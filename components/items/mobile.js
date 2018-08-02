import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { CardItem, Card, Left, Right, Icon } from "native-base";

const { height, width, fontScale } = Dimensions.get("window");

export default class Mobile extends React.Component {
    constructor() {
        super();
        this.state = {
            mobiles: [
                { id: 1, name: "Samsung galaxy S1", price: "RS 25,000", rating: "4" },
                { id: 2, name: "Samsung galaxy S2", price: "RS 30,000", rating: "5" },
                { id: 3, name: "Samsung galaxy S3", price: "RS 35,000", rating: "4.5" },
                { id: 4, name: "Samsung galaxy S4", price: "RS 38,000", rating: "3.9" },
                { id: 5, name: "Samsung galaxy S5", price: "RS 40,000", rating: "4" },
            ]
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.columnFlex}>
                        {this.state.mobiles.map((mobile, index) => {
                            return (
                                <Card key={index} style={styles.cardSize}>
                                    <CardItem>
                                        <View style={{ flex: 1, flexDirection: "row" }}>
                                            <Image source={require('../../images/mobiles/1.jpg')} style={styles.imgaeSize} />
                                            <Left>
                                                <View style={styles.columnFlex}>
                                                    <View style={styles.rowFlex}><Text>Name :</Text><Text style={styles.mobileName}>{mobile.name}</Text></View>
                                                    <View style={styles.rowFlex}><Text>Price :</Text><Text style={styles.mobilePrice}>{mobile.price}</Text></View>
                                                    <View style={styles.rowFlex}><Text>Name :</Text><Text>{mobile.name}</Text></View>
                                                </View>
                                            </Left>
                                            <Right>
                                                <TouchableOpacity>
                                                    <View style={styles.rowFlex}>
                                                        <Text style={{ color: "purple" }}>Add To Cart</Text>
                                                        <Icon name="cart" style={{ color: "purple" }} />
                                                    </View>
                                                </TouchableOpacity>
                                            </Right>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cardSize: {
        width: width / 1.1,
        height: height / 5,
        marginLeft: 15
    },
    imgaeSize: {
        height: height / 6,
        width: width / 5
    },
    mobileName: {
        color: "red"
    },
    mobilePrice: {
        color: "green"
    },
    columnFlex: {
        flex: 1,
        flexDirection: "column"
    },
    rowFlex: {
        flex: 1,
        flexDirection: "row"
    }
})