import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/Button";
import InputField from "../components/InputField";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 373;
const DESIGN_HEIGHT = 298;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function SignupPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require("../assets/images/welcome2.png")}
      />

      <View style={styles.div1}>
        <Text style={styles.header}>Sign Up</Text>

        <InputField
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          showCheckmark={email.includes("@")}
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomButton
          variant="white"
          text="Sign Up"
          arrowIcon={require("../assets/images/arrow2.png")}
          backgroundImage={require("../assets/images/Group2.png")}
          navigateTo="./profile"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: screenWidth,
    flexDirection: "column",
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
    left: -20,
    position: "relative",
    resizeMode: "cover",
  },
  div1: {
    marginTop: 33,
    paddingHorizontal: 40,
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 28,
    textTransform: "capitalize",
    marginBottom: 47,
    color: "#3A3A3A",
  },
});
