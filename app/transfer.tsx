import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 147;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

const KEYPAD_KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [".", "0", "→"],
];

export default function ConfirmationPage() {
  const [amount, setAmount] = useState("0");

  const handleKeyPress = (key: string) => {
if (key === "→") {
  router.push({
    pathname: "/confirmation",
    params: { amount },
  });
  return;
}
    if (amount === "0") {
      if (key === ".") {
        setAmount("0.");
      } else {
        setAmount(key);
      }
      return;
    }

    if (key === "." && amount.includes(".")) {
      return; // ორჯერ დოტს არ ვუშვებთ
    }

    setAmount(amount + key);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/Rectangle 16.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
            <Image
              source={require("../assets/images/back.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Transfer</Text>
        </View>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.title}>Enter Amount</Text>
        <View style={styles.amountText}>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
        <View style={styles.underline} />
      </View>

      <View style={styles.toSection}>
        <Text style={styles.toLabel}>To</Text>
        <View style={styles.receiverInfo}>
          <Image
            source={require("../assets/images/prof pic.png")}
            style={styles.pfp}
          />
          <Text style={styles.receiverName}>Pedro Gonzales</Text>
        </View>
      </View>

      <View style={styles.keypad}>
        {KEYPAD_KEYS.map((row, i) => (
          <View style={styles.keypadRow} key={i}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.keypadButton,
                  key === "→" && styles.submitButton,
                ]}
                activeOpacity={0.7}
                onPress={() => handleKeyPress(key)}
              >
                {key === "→" ? (
                  <Image
                    source={require("../assets/images/arrow2.png")}
                    style={styles.arrowIcon}
                  />
                ) : (
                  <Text style={styles.keypadText}>{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
    marginBottom: 83,
  },
  headerOverlay: {
    position: "absolute",
    top: 66,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  backArrow: {
    position: "absolute",
    left: -110,
    width: 26,
    height: 21,
    tintColor: "white",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  amountSection: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2743FD",
    marginBottom: 20,
  },
  amountText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dollarSign: {
    fontSize: 40,
    fontWeight: "700",
    color: "#2743FD",
  },
  amount: {
    fontSize: 40,
    fontWeight: "700",
    color: "#B6BFFF",
  },
  underline: {
    height: 1,
    width: "60%",
    backgroundColor: "#DEE1EF",
    marginTop: 16,
  },
  toSection: {
    alignItems: "center",
    marginTop: 20,
  },
  toLabel: {
    fontSize: 16,
    color: "#2743FD",
    marginBottom: 8,
    fontWeight: "400",
  },
  receiverInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  receiverName: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },
  pfp: {
    width: 46,
    height: 46,
    borderRadius: 13,
  },
  keypad: {
    marginTop: 55,
    paddingHorizontal: 30,
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  keypadButton: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: 15,
  },
  submitButton: {
    backgroundColor: "#2743FD",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  keypadText: {
    fontSize: 32,
    color: "#2743FD",
    fontWeight: "400",
  },
});
