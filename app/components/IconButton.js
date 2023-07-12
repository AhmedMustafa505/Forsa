import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function IconButton({ type, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("PRESSED")}
    >
      {type === "like" ? (
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={30}
          color="white"
        />
      ) : type === "notification" ? (
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={30}
          color="white"
        />
      ) : (
        <EvilIcons name="search" size={40} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});

export default IconButton;
