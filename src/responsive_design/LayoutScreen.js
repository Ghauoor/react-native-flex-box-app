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
        <View style={styles.section2}>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            aliquid facere aliquam explicabo maxime excepturi at modi
            voluptatibus obcaecati quisquam iure hic veniam eos vitae incidunt
            qui, sequi illum? Expedita minima nisi illo repudiandae fuga,
            nesciunt cupiditate velit quo fugiat consequatur assumenda? Quidem
            voluptates quibusdam a aut molestiae unde tempora.
          </Text>
        </View>
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
    // flexDirection: "row",
  },
  section1: {
    flex: 1,
    backgroundColor: "orange",
  },
  section2: {
    flex: 3,
    backgroundColor: "skyblue",
  },
  footer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  content: {
    fontSize: hp(3),
  },
});

export default LayoutScreen;
