import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "../components/Button";
import InputField from "../components/InputField";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 373;
const DESIGN_HEIGHT = 298;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function SigninPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={styles.image}
            source={require("../assets/images/welcome2.png")}
          />

          <View style={styles.div1}>
            <Text style={styles.header}>Sign In</Text>

            <InputField
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              showCheckmark={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            />

            <InputField
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Pressable onPress={() => router.push("/otp")}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </Pressable>

            <CustomButton
              variant="blue"
              text="Sign In"
              arrowIcon={require("../assets/images/arrow.png")}
              backgroundImage={require("../assets/images/Group1.png")}
              navigateTo="./otp"
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
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
  forgot: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 16,
    color: "#2B47FC",
    marginBottom: 60,
  },
});
