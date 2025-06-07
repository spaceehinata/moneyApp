// components/OtpInput.tsx
import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface OtpInputProps {
  code: string[];
  setCode: (code: string[]) => void;
}

export default function OtpInput({ code, setCode }: OtpInputProps) {
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    if (text.length > 1) {
      return;
    }
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={[styles.input, digit ? styles.activeInput : null]}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  input: {
    width: 48,
    height: 37,
    fontSize: 24,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B9B9B9",
    color: "#000",
  },
  activeInput: {
    borderBottomColor: "#2743FD",
  },
});
