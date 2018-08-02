import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button,Icon } from 'native-base';
export default class Signup extends Component {
    render() {
        return (
            <View>
                <Form>
                    <Item rounded style={styles.inputFields}>
                        <Icon name="person" />
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item rounded style={styles.inputFields}>
                        <Icon name="lock" />
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button block style={{margin:10}} danger>
                        <Text style={{color:"white"}}>Login</Text>
                    </Button>
                </Form>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputFields: {
        margin: 10,
        padding: 5
    }
})