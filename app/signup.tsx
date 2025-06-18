// import ProfileTabs from "@/app/(tabs)/ProfileTabs";
import CustomButton from "@/components/Button";
import InputField from "@/components/InputField";
import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const AnimatedView = Animated.createAnimatedComponent(View);
const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 373;
const DESIGN_HEIGHT = 298;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function SignupPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const translateY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const keyboardWillShow = () => {
      Animated.timing(translateY, {
        toValue: -200,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    };

    const keyboardWillHide = () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    };

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
  }, [translateY]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AnimatedView
          style={[styles.container, { transform: [{ translateY }] }]}
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
              navigateTo="./profile"
            />
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            {/* <ProfileTabs /> */}
          </View>
        </AnimatedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
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
