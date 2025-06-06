import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButton from "../components/Button";
import InputField from "../components/InputField";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <LinearGradient
      colors={["#4950F9", "#1937FE"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
              <Image
                style={styles.image}
                source={require("../assets/images/image.png")}
              />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.main}
            keyboardShouldPersistTaps="handled"
          >
            <InputField
              label="Username"
              placeholder="Your username"
              placeholderTextColor="#80E0FF"
              value={username}
              onChangeText={setUsername}
              variant="white"
            />
            <InputField
              label="First Name"
              placeholder="Your name"
              placeholderTextColor="#80E0FF"
              value={firstName}
              onChangeText={setFirstName}
              variant="white"
            />
            <InputField
              label="Last Name"
              placeholder="Your last name"
              placeholderTextColor="#80E0FF"
              value={lastName}
              onChangeText={setLastName}
              variant="white"
            />
            <InputField
              label="Date of Birth"
              placeholder="Your birthday (dd-mm-yyyy)"
              placeholderTextColor="#80E0FF"
              value={dob}
              onChangeText={setDob}
              variant="white"
            />
            <CustomButton
            variant="white"
            text="Complete"
            arrowIcon={require("../assets/images/arrow2.png")}
          navigateTo="./profile"
          />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  gradient: {
    // flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  main: {
    width: screenWidth,
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  image: {
    width: 143,
    height: 143,
    alignSelf: "center",
    marginTop:84,
    // marginBottom:40,
  },
});
