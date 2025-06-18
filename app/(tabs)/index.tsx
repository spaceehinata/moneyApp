import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/Button";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 278;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function indexPage() {
  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Rectangle 3.png")}
      />
      <View style={styles.topBar}>
        <Image
          style={styles.menuIcon}
          source={require("../../assets/images/menuu.png")}
        />
        <Image
          style={styles.pfp}
          source={require("../../assets/images/prof pic.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>Good morning</Text>
        <Text style={styles.text2}>Emma,</Text>
      </View>

      <View style={styles.borderedBox}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Your total balance</Text>
          <Text style={styles.dots}>...</Text>
        </View>
        <Text style={styles.balanceAmount}>$850.00</Text>

        <Image
          style={styles.columnsImage}
          source={require("../../assets/images/Columns.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.pad}>
        <CustomButton
          variant="bank"
          text={`Check Your Bank\nAccounts`}
          backgroundImage={require("../../assets/images/bank.png")}
          navigateTo="./"
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: screenWidth,
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
    resizeMode: "cover",
  },
  topBar: {
    position: "absolute",
    top: 71,
    left: 30,
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    width: 30,
    height: 29,
  },
  pfp: {
    width: 50,
    height: 50,
  },
  textContainer: {
    position: "absolute",
    top: 120,
    left: 50,
  },
  text1: {
    fontSize: 32,
    fontWeight: "400",
    color: "#ffffff",
  },
  text2: {
    fontSize: 32,
    fontWeight: "400",
    color: "#ffffff",
  },
  borderedBox: {
    width: 315,
    height: 321,
    backgroundColor: "#ffffff",
    borderRadius: 40,
    paddingHorizontal: 32,
    alignSelf: "center",
    marginTop: -40,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 10,
    marginBottom: 30,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  dots: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "400",
    color: "#000000",
    // marginTop:-20,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2D99FF",
    marginTop: 8,
  },
  columnsImage: {
    width: "100%",
    height: 166,
    marginTop: 26,
  },
  pad: {
    paddingHorizontal: 32,
  },
});
