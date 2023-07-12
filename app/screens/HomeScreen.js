import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import HomeHeader from "../components/HomeHeader";
import FirstSection from "../components/FirstSection";

const HomeScreen = () => {
  return (
    <>
      <HomeHeader />
      <View style={styles.firstSliderContainer}>
        <Svg width={101} height={172} viewBox="0 0 101 172" fill="none">
          <Path
            d="M100.844 85.354L18.153 171.707L0.252991 154.355L63.037 85.355L0.249992 16.504L18.153 0.294006L100.844 85.354Z"
            fill="#3EBDAC"
            fillOpacity={0.3}
          />
        </Svg>
        <Svg width={101} height={172} viewBox="0 0 101 172" fill="none">
          <Path
            d="M100.844 85.354L18.153 171.707L0.252991 154.355L63.037 85.355L0.249992 16.504L18.153 0.294006L100.844 85.354Z"
            fill="#3EBDAC"
            fillOpacity={0.6}
          />
        </Svg>
        <Svg width={101} height={172} viewBox="0 0 101 172" fill="none">
          <Path
            d="M100.844 85.354L18.153 171.707L0.252991 154.355L63.037 85.355L0.249992 16.504L18.153 0.294006L100.844 85.354Z"
            fill="#3EBDAC"
            fillOpacity={0.9}
          />
        </Svg>
      </View>

      <View style={styles.container}>
        <FirstSection />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 330,
    left: 25,
    right: 15,
  },
  firstSliderContainer: {
    justifyContent: "center",
    zIndex: -1,
    flexDirection: "row",
  },
});

export default HomeScreen;
