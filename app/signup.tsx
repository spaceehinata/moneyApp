import ProfileTabs from "@/navigation/ProfileTabs";
import React from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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

export default function SignupPage() {
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
              variant="blue"
              text="Sign Up"
              arrowIcon={require("../assets/images/arrow.png")}
              backgroundImage={require("../assets/images/Group1.png")}
              navigateTo="./homepage"
            />
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <ProfileTabs />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
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
