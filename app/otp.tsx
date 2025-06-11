import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import CustomButton from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

export default function OtpPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.main} keyboardShouldPersistTaps="handled">
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
            navigateTo="./verification"
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: screenWidth,
    flexGrow: 1,
    justifyContent: "center",
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
    paddingHorizontal: 10,
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
