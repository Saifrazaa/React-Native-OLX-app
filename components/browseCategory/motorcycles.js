import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail } from "native-base";
const { height, width, fontScale } = Dimensions.get("window");

export default class MotorBikes extends React.Component {
    constructor() {
        super();
        this.state = {
            property: [
                { id: 1, name: "Harley Davidson", price: "RS 9,950,854", imageUri: "../../images/propertyforsale/1.jpg" },
                { id: 2, name: "Yamaha 6J", price: "RS 9,784,021", imageUri: "../../images/propertyforsale/2.jpg" },
                { id: 3, name: "Honda CD-125", price: "RS 6,125,784", imageUri: "../../images/propertyforsale/3.jpg" }
            ]
        }
    }
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View>
                <Text style={styles.text}>Motor Bikes</Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {this.state.property.map((card, index) => {
                        return (
                            <TouchableOpacity>
                                <Card key={index} style={styles.cardStyle}>
                                    <CardItem cardBody>
                                        <View>
                                            <Image style={styles.imageStyle} source={require("../../images/bikes/1.jpg")} />
                                            <Text style={{textAlign:"center"}}>{card.name}</Text>
                                            <Text style={{ color: "green",textAlign:"center" }}>{card.price}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: fontScale * 16,
        padding: 10,
        fontWeight: "bold",
    },
    cardStyle: {
        height: height / 5,
        width: width / 3.29,
        marginLeft: 8,
    },
    imageStyle: {
        width: width / 3.31,
        height: height / 7,
        padding:5
    },
})