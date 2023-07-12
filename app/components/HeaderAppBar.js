import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";
import IconButton from "./IconButton";
import HeaderIcons from "./HeaderIcons";

function HeaderAppBar(props) {
  return (
    <>
      <Svg width={width + 1} height={height / 3} fill="none">
        <Path
          d="M188 244C450.335 244 663 127.594 663 -16C663 -159.594 450.335 -276 188 -276C-74.3353 -276 -287 -159.594 -287 -16C-287 127.594 -74.3353 244 188 244Z"
          fill="#072040"
        />
      </Svg>
      <View style={styles.headerContainer}>
        <IconButton type={"Search"} />
        <View style={styles.logoContainer}>
          <Svg width={37} height={63} viewBox="0 0 37 63" fill="none">
            <Path
              d="M25.758 34.061H21.773V30.701H25.758V27.155H21.773V25.041H25.758V21.495H21.773V17.221H33.016V10.674H21.773V6.547H33.016V0.00100708H15.226V21.494H11.241V25.04H15.226V27.154H11.241V30.701H15.226V34.063H11.241C8.6998 34.0639 6.24457 34.9835 4.32812 36.6523C2.41166 38.3211 1.16325 40.6266 0.813042 43.1436C0.462837 45.6606 1.03445 48.2193 2.42254 50.3479C3.81063 52.4765 5.92156 54.0315 8.36602 54.726C8.99142 56.9316 10.3193 58.8729 12.1482 60.2553C13.977 61.6377 16.207 62.3856 18.4995 62.3856C20.792 62.3856 23.022 61.6377 24.8509 60.2553C26.6797 58.8729 28.0077 56.9316 28.633 54.726C31.0775 54.0315 33.1884 52.4765 34.5765 50.3479C35.9646 48.2193 36.5362 45.6606 36.186 43.1436C35.8358 40.6266 34.5873 38.3211 32.6709 36.6523C30.7544 34.9835 28.2993 34.0639 25.758 34.063V34.061ZM7.25805 44.592C7.25937 43.5358 7.67953 42.5232 8.42638 41.7764C9.17324 41.0295 10.1858 40.6093 11.242 40.608H17.802L9.80901 48.308C9.05837 48.0184 8.41293 47.5085 7.95745 46.8453C7.50198 46.1821 7.25778 45.3966 7.25701 44.592H7.25805ZM18.5001 55.835C17.7055 55.8336 16.9294 55.5949 16.2714 55.1495C15.6134 54.704 15.1035 54.0722 14.807 53.335L18.5001 49.778L22.193 53.335C21.8966 54.0725 21.3865 54.7045 20.7283 55.1501C20.0702 55.5958 19.2938 55.8346 18.499 55.836L18.5001 55.835ZM27.191 48.306L19.199 40.606H25.759C26.6899 40.6046 27.5918 40.9292 28.3082 41.5237C29.0245 42.1181 29.51 42.9448 29.6802 43.8599C29.8504 44.7751 29.6945 45.721 29.2398 46.5332C28.7851 47.3455 28.0602 47.9727 27.191 48.306Z"
              fill="#3EBDAC"
            />
          </Svg>
        </View>
        <HeaderIcons />
      </View>
    </>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 50,
    alignItems: "center",
    zIndex: 1,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginLeft: 10,
  },
});

export default HeaderAppBar;
