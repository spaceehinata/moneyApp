import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 526;

const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonWrapper}>
        {/* Sign In Button */}
        <TouchableOpacity onPress={() => router.navigate("./signin")}>
          <LinearGradient
            colors={["#6075FF", "#1433FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.signinButton, styles.sharedShadow]}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.signinText}>Sign In</Text>
              <Image
                source={require("../assets/images/arrow.png")}
                style={styles.arrowIcon}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity onPress={() => router.navigate("./signin")}>
          <LinearGradient
            colors={["#6075FF", "#1433FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.gradientBorder, styles.sharedShadow]}
          >
            <View style={styles.whiteInner}>
              <View style={styles.buttonContent}>
                <Text style={styles.signupText}>Sign Up</Text>
                <Image
                  source={require("../assets/images/arrow2.png")}
                  style={styles.arrowIcon}
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
  signinButton: {
    borderRadius: 28,
    height: 72,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  gradientBorder: {
    borderRadius: 28,
    padding: 1,
    backgroundColor: "transparent",
  },
  whiteInner: {
    backgroundColor: "#fff",
    borderRadius: 27,
    height: 72,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  signinText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 20,
  },
  signupText: {
    color: "#556BFF",
    fontWeight: "400",
    fontSize: 20,
  },
  arrowIcon: {
    width: 21,
    height: 17,
    resizeMode: "contain",
  },
  sharedShadow: {
    shadowColor: "#1B39FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
});
