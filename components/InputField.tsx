import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
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
  variant?: "default" | "white";
  placeholder?: string;
  placeholderTextColor?: string;
}

export default function InputField({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  showCheckmark = false,
  variant = "default",
  placeholder = "",
  placeholderTextColor = "#B9B9B9",
}: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const isWhite = variant === "white";

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isWhite && styles.labelWhite]}>{label}</Text>

      <Pressable
        onPress={() => inputRef.current?.focus()}
        style={styles.inputWrapper}
      >
        {secureTextEntry && !isPasswordVisible ? (
          <>
            <Text style={[styles.input, isWhite && styles.whiteText]}>
              {"✱".repeat(value.length)}
            </Text>
            <TextInput
              ref={inputRef}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              style={styles.hiddenInput}
              autoCapitalize="none"
              secureTextEntry={false}
            />
          </>
        ) : (
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, isWhite && styles.whiteText]}
            autoCapitalize="none"
            secureTextEntry={secureTextEntry && !isPasswordVisible}
          />
        )}

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
      </Pressable>

      <View
        style={[
          styles.underline,
          isWhite && styles.whiteUnderline,
        ]}
      />
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
  labelWhite: {
    color: "#80E0FF",
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
  hiddenInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
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
  whiteText: {
    color: "#FFFFFF",
  },
  whiteUnderline: {
    backgroundColor: "#FFFFFF",
  },
});
