import React from "react";
import { View, Text } from "react-native";
import PropertForSale from "./browseCategory/propertyForSale";
import PropertForRent from "./browseCategory/propertyForRent";
import MotorBikes from "./browseCategory/motorcycles";
import Cars from "./browseCategory/cars";
import Furniture from "./browseCategory/furniture";
import Animals from "./browseCategory/animals";
export default class BrowseCategory extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <View>
                <PropertForSale />
                <PropertForRent />
                <MotorBikes />
                <Cars />
                <Furniture />
                <Animals />
            </View>
        )
    }
}