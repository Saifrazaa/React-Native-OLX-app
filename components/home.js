import React from "react";
import { Container, Card, CardItem, Header, Left, Button } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from "react-native-router-flux";
import { Text, Dimensions, View, StyleSheet,ScrollView } from "react-native";
import BrowseCategory from "./browsecategory";
const { height, width, fontScale } = Dimensions.get("window");
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <View>
                <ScrollView>
                <Button block style={styles.adButton}>
                    <Icon name='pencil-square-o' style={{ color: "white", fontSize: fontScale * 20, marginRight: 20 }} />
                    <Text style={{ color: "white", fontSize: fontScale * 20 }}>Submit a Free Ad</Text>
                </Button>
                <Text style={styles.itemCategoryText}>Item Categories</Text>
                <Card style={{ width: width / 1.05, marginLeft: 10 }}>
                    <CardItem>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Button style={{ width: width / 5, height: height / 9.5 }} bordered light onPress={()=>Actions.push('mobiles')}>
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "purple" }} name="mobile" />
                                    <Text style={styles.categoryText}>Mobiles and Tablets</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#bfc000" }} name="tv" />
                                    <Text style={styles.categoryText}>Electronics and Home</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#163e80" }} name="car" />
                                    <Text style={styles.categoryText}>Cars and Other Vehicles</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#ff8113" }} name="motorcycle" />
                                    <Text style={styles.categoryText}>Motor Bikes and Heavy Bikes</Text>
                                </View>
                            </Button>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Button style={{ width: width / 5, height: height / 9.5 }} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#792289" }} name="building" />
                                    <Text style={styles.categoryText}>Property for Sale</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#e22726" }} name="building" />
                                    <Text style={styles.categoryText}>Property for Rent</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#54942d" }} name="briefcase" />
                                    <Text style={styles.categoryText}>Jobs and Other Opportunities</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#0097d2" }} name="wrench" />
                                    <Text style={styles.categoryText}>Mechanic and Plumber Services</Text>
                                </View>
                            </Button>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Button style={{ width: width / 5, height: height / 9.5 }} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#a3240d" }} name="industry" />
                                    <Text style={styles.categoryText}>Business,industrial and Agriculture</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#00b973" }} name="bed" />
                                    <Text style={styles.categoryText}>Furniture and Home Decoration</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#007686" }} name="ship" />
                                    <Text style={styles.categoryText}>Pet Animals Services</Text>
                                </View>
                            </Button>
                            <Button style={styles.categoryButton} bordered light >
                                <View>
                                    <Icon style={{ fontSize: fontScale * 15, textAlign: "center", color: "#81c8ea" }} name="book" />
                                    <Text style={styles.categoryText}>Books,Sports and Hobbies</Text>
                                </View>
                            </Button>
                        </View>
                    </CardItem>
                </Card>
                <BrowseCategory />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    adButton: {
        backgroundColor: "orange",
        width: width / 1.2,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10
    },
    itemCategoryText: {
        fontSize: fontScale * 16,
        padding: 10,
        fontWeight: "bold"
    },
    categoryButton: {
        width: width / 5,
        height: height / 9.5,
        marginLeft: 7
    },
    categoryText: {
        fontSize: fontScale * 10,
        paddingTop: 8,
        paddingLeft: 5
    },
    categoryIcon: {
        fontSize: fontScale * 15,
        textAlign: "center"
    }
})