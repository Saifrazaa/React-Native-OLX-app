import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Root } from "native-base";
import Routes from "./routes";
export default class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Routes />
        </Container>
      </Root>
    );
  }
}
console.disableYellowBox = true;
const styles = StyleSheet.create({
});
