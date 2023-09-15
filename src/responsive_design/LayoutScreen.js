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
    height: hp(100),
  },
  header: {
    height: hp(15),
    backgroundColor: "tomato",
  },
  main: {
    height: hp(70),
    display: "flex",
    flexDirection: "row",
  },
  section1: {
    width: wp(50),
    backgroundColor: "orange",
  },
  section2: {
    width: wp(50),
    backgroundColor: "skyblue",
  },
  footer: {
    height: hp(15),
    backgroundColor: "lightgreen",
  },
});

export default LayoutScreen;
