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
      <View style={styles.main}>
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
    flex: 1,
  },
  header: {
    height: hp(15),
    backgroundColor: "tomato",
  },
  main: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
  },
  section1: {
    flex: 1,
    backgroundColor: "orange",
  },
  section2: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  footer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
});

export default LayoutScreen;
