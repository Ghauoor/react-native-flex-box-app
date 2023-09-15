import { StyleSheet, Text, View } from "react-native";
import LayoutScreen from "./src/responsive_design/LayoutScreen";

export default function App() {
  return <LayoutScreen />;
  // return (
  //   <View
  //     style={{
  //       padding: 50,
  //       flexDirection: "row",
  //       width: "80%",
  //       height: 300,
  //       justifyContent: "space-between",
  //       alignItems: "center",
  //     }}
  //   >
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: "red",
  //         // width: 100,
  //         // height: 100,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>1</Text>
  //     </View>
  //     <View
  //       style={{
  //         flex: 2,
  //         backgroundColor: "green",
  //         // width: 100,
  //         // height: 100,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>2</Text>
  //     </View>
  //     <View
  //       style={{
  //         flex: 2,
  //         backgroundColor: "blue",
  //         // width: 100,
  //         // height: 100,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>3</Text>
  //     </View>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
