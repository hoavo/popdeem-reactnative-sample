/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

const RNPopdeem = NativeModules.RNPopdeem;
type Props = {};
export default class App extends Component<Props> {
  onPressLogin = () => {
    RNPopdeem.pushSocialLogin(3, () => {}, () => {});
  };
  onPressPushHome = () => {
    RNPopdeem.pushPopdeemHome(() => {}, () => {});
  };
  onPressDeliveryToken = () => {
    RNPopdeem.deliverThirdPartyToken("token", () => {}, () => {});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Popdeem React Native Sample!
        </Text>
        <View style={styles.line} />
        <Button
          onPress={this.onPressLogin}
          title="Push Social Login"
          color="#841584"
          accessibilityLabel="Push Social Login"
        />
        <View style={styles.line} />
        <Button
          onPress={this.onPressPushHome}
          title="Push Popdeem Home"
          color="#841584"
          accessibilityLabel="Push Popdeem Home"
        />
        <View style={styles.line} />
        <Button
          onPress={this.onPressDeliveryToken}
          title="Deliver Third Party Token"
          color="#841584"
          accessibilityLabel="Deliver Third Party Token"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  line: {
    marginBottom: 20
  }
});
