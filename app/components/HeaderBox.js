import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Path, Svg } from "react-native-svg";

function HeaderBox(props) {
  return (
    <View style={styles.headerBoxContainer}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/images/HeaderBackground.png")}
      >
        <View style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <Svg width={50} height={50} viewBox="0 0 50 50" fill="none">
              <Path
                d="M50 16.25L13.4208 31.825C10.3875 33.1083 7.83959 33.7521 5.77918 33.7521C3.44584 33.7521 1.75209 32.9354 0.702092 31.3C0.0416756 30.25 -0.152074 28.9187 0.118759 27.3042C0.389592 25.6896 1.11043 23.9708 2.27709 22.1417C3.25001 20.6625 4.84376 18.7187 7.06251 16.3083C6.30994 17.4931 5.75807 18.7939 5.42918 20.1583C4.84584 22.6479 5.37084 24.475 7.00418 25.6417C7.78126 26.1854 8.85001 26.4583 10.2125 26.4583C11.3 26.4583 12.525 26.2833 13.8875 25.9333L50 16.25Z"
                fill="white"
              />
            </Svg>
          </View>
          <Text style={styles.text}>Check our latest offers</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBoxContainer: {
    position: "absolute",
    top: 178,
    width: 325,
    height: 138,
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 15,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginLeft: 12,
    fontSize: 16,
    fontFamily: "inter-regular",
  },
});

export default HeaderBox;
