import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "../components/Button";
import InputField from "../components/InputField";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  React.useEffect(() => {
    const keyboardWillShow = () => setIsInputFocused(true);
    const keyboardWillHide = () => setIsInputFocused(false);

    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",
      keyboardWillShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardWillHide",
      keyboardWillHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const allFilled =
    username.trim() !== "" &&
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    dob.trim() !== "";

  return (
    <LinearGradient
      colors={["#4950F9", "#1937FE"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/image.png")}
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              styles.main,
              { transform: [{ translateY: isInputFocused ? -200 : 0 }] },
            ]}
          >
            <InputField
              label="Username"
              placeholder="Your username"
              placeholderTextColor="#80E0FF"
              value={username}
              onChangeText={setUsername}
              variant="white"
              showCheckmark={username.trim() !== ""}
            />

            <InputField
              label="First Name"
              placeholder="Your name"
              placeholderTextColor="#80E0FF"
              value={firstName}
              onChangeText={setFirstName}
              variant="white"
              showCheckmark={firstName.trim() !== ""}
            />

            <InputField
              label="Last Name"
              placeholder="Your last name"
              placeholderTextColor="#80E0FF"
              value={lastName}
              onChangeText={setLastName}
              variant="white"
              showCheckmark={lastName.trim() !== ""}
            />

            <InputField
              label="Date of Birth"
              placeholder="Your birthday (dd-mm-yyyy)"
              placeholderTextColor="#80E0FF"
              value={dob}
              onChangeText={setDob}
              variant="white"
              showCheckmark={dob.trim() !== ""}
            />

            <CustomButton
              variant="complete"
              text="Complete"
              arrowIcon={require("../assets/images/arrow2.png")}
              navigateTo="./homepage"
              active={allFilled}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
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
    marginTop: 84,
  },
});
