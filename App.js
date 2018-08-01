import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container } from "native-base";
import Main from "./components";
import NavigationApp from "./routes";
export default class App extends Component {
  render() {
    return (
      <Container>
        <Main />
        {/* <NavigationApp /> */}
      </Container>
    );
  }
}
console.disableYellowBox = true;
const styles = StyleSheet.create({
});
