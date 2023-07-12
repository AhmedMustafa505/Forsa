import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";

function HeaderIcons(props) {
  return (
    <View style={styles.container}>
      <IconButton type={"like"} />
      <IconButton type={"notification"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default HeaderIcons;
