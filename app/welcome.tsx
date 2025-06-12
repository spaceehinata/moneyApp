import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import CustomButton from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 526;

const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonWrapper}>
        <CustomButton
          variant="blue"
          text="Sign In"
          arrowIcon={require("../assets/images/arrow.png")}
          backgroundImage={require("../assets/images/Group1.png")}
          navigateTo="./signin"
        />

        <CustomButton
          variant="white"
          text="Sign Up"
          arrowIcon={require("../assets/images/arrow2.png")}
          backgroundImage={require("../assets/images/Group2.png")}
          navigateTo="./signup"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
  },
  buttonWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 46,
    gap: 26,
    marginTop: 80,
  },
});
