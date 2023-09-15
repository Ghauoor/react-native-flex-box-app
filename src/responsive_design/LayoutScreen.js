import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />
      {/* main view */}
      <View>
        <View style={styles.section1} />
        <View style={styles.section2} />
      </View>
      {/* footer */}
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  header: {
    height: 180,
    backgroundColor: "tomato",
  },
  main: {
    height: 500,
    display: "flex",
  },
  section1: {
    flexDirection: "row",
    width: 200,
    backgroundColor: "orange",
  },
  section2: {
    flexDirection: "row",
    width: 200,
    backgroundColor: "skyblue",
  },
  footer: {
    height: 180,
    backgroundColor: "lightgreen",
  },
});

export default LayoutScreen;
