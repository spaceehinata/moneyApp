import * as ImagePicker from "expo-image-picker"; // დამატებული
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import CustomButton from "../components/Button";
import InputField from "../components/InputField";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null); // ფოტოს URI

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

  // ფოტოს არჩევა
  const pickImage = async () => {
    // Permissions check
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // კვადრატული ფორმატი
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* ScrollView რომ იყოს სკროლირებადი */}
          <ScrollView
            contentContainerStyle={[
              styles.main,
              { paddingBottom: isInputFocused ? 200 : 40 },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* ფოტოს ტაჩე თუ არ აირჩიე, ფოტო რომ აირჩიო */}
            <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
              ) : (
                <Image
                  style={styles.image}
                  source={require("../assets/images/image.png")}
                />
              )}
            </TouchableOpacity>

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
          </ScrollView>
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
    borderRadius: 143 / 2,
    borderWidth: 2,
    borderColor: "#80E0FF",
  },
});
