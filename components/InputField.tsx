import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showCheckmark?: boolean;
}

export default function InputField({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  showCheckmark = false,
}: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoCapitalize="none"
          textContentType={secureTextEntry ? "password" : "none"}
        />
        {showCheckmark && (
          <Image
            source={require("../assets/images/mark.png")}
            style={styles.icon}
          />
        )}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          >
            <Image
              source={require("../assets/images/eye.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 40,
  },
  label: {
    color: "#B9B9B9",
    fontSize: 14,
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    color: "#3A3A3A",
  },
  icon: {
    width: 18,
    height: 13,
    marginLeft: 16,
    marginBottom: 16,
    resizeMode: "contain",
  },
  underline: {
    height: 1,
    backgroundColor: "#2743FD",
    marginTop: 8,
  },
});
