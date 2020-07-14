import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWhiteGold(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{props.onPress()}}>
      <Text style={[styles.caption, props.captionstyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 1,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  caption: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  }
});

export default MaterialButtonWhiteGold;
