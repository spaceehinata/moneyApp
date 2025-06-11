import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  variant: "blue" | "white" | "otp" | "verify" | "complete" | "bank";
  text: string;
  arrowIcon?: ImageSourcePropType;
  backgroundImage?: ImageSourcePropType;
  backgroundImage2?: ImageSourcePropType;
  navigateTo: string;
  disabled?: boolean;
  active?: boolean;

}

export default function CustomButton({
  variant,
  text,
  arrowIcon,
  backgroundImage,
  backgroundImage2,
  navigateTo,
  disabled,
  active,
}: Props) {
  const router = useRouter();

  if (variant === "blue") {
    return (
      <TouchableOpacity onPress={() => router.navigate(navigateTo as any)}>
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.signinButton, styles.sharedShadow]}
        >
          {backgroundImage && (
            <Image source={backgroundImage} style={styles.group1Image} />
          )}
          <View style={styles.buttonContent}>
            <Text style={styles.signinText}>{text}</Text>
            <Image source={arrowIcon} style={styles.arrowIcon} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === "white") {
    return (
      <TouchableOpacity onPress={() => router.navigate(navigateTo as any)}>
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradientBorder, styles.sharedShadow]}
        >
          {backgroundImage && (
            <Image source={backgroundImage} style={styles.group2Image} />
          )}
          <View style={styles.whiteInner}>
            <View style={styles.buttonContent}>
              <Text style={styles.signupText}>{text}</Text>
              <Image source={arrowIcon} style={styles.arrowIcon} />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === "otp") {
    return (
      <TouchableOpacity onPress={() => router.navigate(navigateTo as any)}>
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.otpButton, styles.sharedShadow]}
        >
          {backgroundImage && (
            <Image source={backgroundImage} style={styles.group1Image} />
          )}
          {backgroundImage2 && (
            <Image source={backgroundImage2} style={styles.group3Image} />
          )}
          <Text style={styles.otpText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }


  if (variant === "verify") {
    return (
      <TouchableOpacity
  onPress={() => !disabled && router.navigate(navigateTo as any)}
  activeOpacity={disabled ? 1 : 0.7}
  style={{ opacity: disabled ? 0.5 : 1 }}
>
  <LinearGradient
    colors={["#6075FF", "#1433FF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[styles.verifyButton, styles.sharedShadow]}
  >
    {backgroundImage && (
      <Image source={backgroundImage} style={styles.group1Image} />
    )}
    {backgroundImage2 && (
      <Image source={backgroundImage2} style={styles.group3Image} />
    )}
    <Text style={styles.verifyText}>{text}</Text>
  </LinearGradient>
</TouchableOpacity>

    );
  }

if (variant === "complete") {
  const activeColor = active ? "#2743FD" : "#C8C8C8";

  return (
    <TouchableOpacity
      onPress={() => router.navigate(navigateTo as any)}
      disabled={!active}
    >
      <View style={styles.completeButton}>
        <View style={styles.combuttonContent}>
          <Text style={[styles.completeText, { color: activeColor }]}>{text}</Text>
          <Image
            source={require("../assets/images/check.png")}
            style={[styles.checkIcon, { tintColor: activeColor }]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
  if (variant === "bank") {
    return (
      <TouchableOpacity
  onPress={() => !disabled && router.navigate(navigateTo as any)}
  activeOpacity={disabled ? 1 : 0.7}
  style={{ opacity: disabled ? 0.5 : 1 }}
>
  <LinearGradient
    colors={["#6075FF", "#1433FF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[styles.bankButton, styles.sharedShadow]}
  >
    {backgroundImage && (
      <Image source={backgroundImage} style={styles.group4Image} />
    )}
    <Text style={styles.verifyText}>{text}</Text>
  </LinearGradient>
</TouchableOpacity>

    );
  }

  return null;
}

const styles = StyleSheet.create({
  signinButton: {
    borderRadius: 28,
    height: 72,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  gradientBorder: {
    borderRadius: 28,
    padding: 1,
    backgroundColor: "transparent",
  },
  whiteInner: {
    backgroundColor: "#fff",
    borderRadius: 27,
    height: 72,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  signinText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 20,
  },
  signupText: {
    color: "#556BFF",
    fontWeight: "400",
    fontSize: 20,
  },
  arrowIcon: {
    width: 21,
    height: 17,
    resizeMode: "contain",
  },
  sharedShadow: {
    shadowColor: "#1B39FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  group1Image: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 194,
    height: 57,
    zIndex: 1,
  },
  group2Image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 129,
    height: 75,
    zIndex: 1,
  },
  group3Image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 194,
    height: 57,
    zIndex: 1,
  },
  otpButton: {
    borderRadius: 28,
    height: 72,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  otpText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 20,
  },
  verifyButton: {
    borderRadius: 28,
    height: 72,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  verifyText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 20,
  },
  completeButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
    width: "100%",
  },
  completeText: {
    color: "#C8C8C8",
    fontSize: 20,
    fontWeight: "400",
    marginRight: 10,
  },
  checkIcon: {
    width: 18,
    height: 13,
    resizeMode: "contain",
  },
    combuttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
    bankButton: {
    borderRadius: 40,
    height: 125,  
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  group4Image:{
    position: "absolute",
    top: 0,
    right: 0,
    width: 139,
    height: 125,
    zIndex: 1,
  }
});
