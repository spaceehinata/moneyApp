import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.main}>
      <Image
        source={require("../assets/images/otp.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.desc}>
        We will send you a one-time password to this mobile number.
      </Text>
      <Text style={styles.label}>Enter mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. +995 592 08 50 69"
        placeholderTextColor="#B9B9B9"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={20}
      />
      <CustomButton
        variant="otp"
        text="Get OTP"
        backgroundImage={require("../assets/images/Group1.png")}
        backgroundImage2={require("../assets/images/Group3.png")}
        navigateTo="./profile"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: screenWidth,
    flexDirection: "column",
    gap: 28,
    paddingHorizontal: 37,
  },
  image: {
    height: 269,
    width: 254,
    marginTop: 86,
    alignSelf: "center",
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3A3A3A",
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    color: "#3A3A3A",
    textAlign: "center",
    fontWeight: "400",
    paddingHorizontal: 37,
  },
  label: {
    fontSize: 14,
    color: "#B9B9B9",
    fontWeight: "400",
    textAlign: "center",
  },
  input: {
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#2743FD",
    fontSize: 16,
    color: "#3A3A3A",
    textAlign: "center",
    paddingHorizontal: 37,
    marginBottom: 90,
  },
});
