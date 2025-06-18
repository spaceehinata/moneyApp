import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "../components/Button";
import OtpInput from "../components/OtpInput";

const { width: screenWidth } = Dimensions.get("window");

export default function VerifyPage() {
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);
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

  const handleOtpChange = (code: string[]) => {
    setOtpCode(code);
    if (code.every((digit) => digit !== "")) {
      Keyboard.dismiss();
    }
  };

  const isOtpComplete = otpCode.every((digit) => digit !== "");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.main,
            { transform: [{ translateY: isInputFocused ? -200 : 0 }] },
          ]}
        >
          <Image
            source={require("../assets/images/otp.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>OTP Verification</Text>

          <Text style={styles.label}>Enter the OTP sent to</Text>

          <OtpInput code={otpCode} setCode={handleOtpChange} />

          <Text style={styles.resend}>
            Didn’t you receive the OTP?{" "}
            <Text style={styles.resendLink}>Resend OTP</Text>
          </Text>

          <CustomButton
            variant="verify"
            text="Verify"
            disabled={!isOtpComplete}
            backgroundImage={require("../assets/images/Group1.png")}
            backgroundImage2={require("../assets/images/Group3.png")}
            navigateTo="./welcome"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: screenWidth,
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
  label: {
    fontSize: 14,
    color: "#B9B9B9",
    fontWeight: "400",
    textAlign: "center",
  },
  resend: {
    fontSize: 14,
    color: "#B9B9B9",
    textAlign: "center",
    marginBottom: 63,
  },
  resendLink: {
    color: "#2743FD",
  },
});
