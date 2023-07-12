import React from "react";
import Svg, { Path } from "react-native-svg";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import HeaderIcons from "./HeaderIcons";

function ProfileAppBar(props) {
  return (
    <>
      <Svg width={width + 1} height={150} viewBox="0 0 375 244" fill="none">
        <Path
          d="M188 244C450.335 244 663 127.594 663 -16C663 -159.594 450.335 -276 188 -276C-74.3353 -276 -287 -159.594 -287 -16C-287 127.594 -74.3353 244 188 244Z"
          fill="#072040"
        />
      </Svg>
      <View style={styles.container}>
        <Text style={styles.header} flex={1}>
          Profile
        </Text>
        <HeaderIcons />
      </View>
    </>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    paddingVertical: 50,
    alignItems: "center",
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    fontFamily: "inter-regular",
    color: "white",
    left: width / 2.3,
  },
});

export default ProfileAppBar;
