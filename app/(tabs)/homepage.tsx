import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../components/Button";
import { useMenu } from "./context/MenuContext"; 

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 278;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

const menuWidth = screenWidth * 0.75;

export default function indexPage() {
  const { menuVisible, toggleMenu, closeMenu } = useMenu();
  const slideAnim = React.useRef(new Animated.Value(-menuWidth)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : -menuWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  return (
    <View style={styles.main}>
      {/* Burger Menu Overlay */}
      {menuVisible && (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={closeMenu}
        >
          <Animated.View
            style={[styles.overlay, { opacity: menuVisible ? 0.3 : 0 }]}
          />
        </TouchableOpacity>
      )}

      {/* Burger Menu Slide */}
      <Animated.View
        style={[
          styles.sideMenu,
          {
            transform: [{ translateX: slideAnim }],
            width: menuWidth,
          },
        ]}
      >
        <View style={styles.userDataWrapper}>
          <Image
            source={require("../../assets/images/prof pic.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>Charles Leclerc</Text>
            <Text style={styles.userName}>@ScuderiaFerrari</Text>
          </View>
        </View>

        <View style={styles.menuItems}>
          {[
            { label: "Payments" },
            { label: "Transactions" },
            { label: "My Cards" },
            { label: "Promotions" },
            { label: "Savings" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItemWrapper}
              onPress={() => closeMenu()}
            >
              <Text style={styles.menuItem}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.closeWrapper} onPress={closeMenu}>
          <Text style={styles.close}>Sign Out</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Main UI */}
      <Image
        style={styles.image}
        source={require("../../assets/images/Rectangle 3.png")}
      />

      <View style={styles.topBar}>
        <Pressable onPress={toggleMenu}>
          <Image
            style={styles.menuIcon}
            source={require("../../assets/images/menuu.png")}
          />
        </Pressable>
        <Image
          style={styles.pfp}
          source={require("../../assets/images/prof pic.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>Good morning</Text>
        <Text style={styles.text2}>Emma,</Text>
      </View>

      <View style={styles.borderedBox}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Your total balance</Text>
          <Text style={styles.dots}>...</Text>
        </View>
        <Text style={styles.balanceAmount}>$850.00</Text>

        <Image
          style={styles.columnsImage}
          source={require("../../assets/images/Columns.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.pad}>
        <CustomButton
          variant="bank"
          text={`Check Your Bank\nAccounts`}
          backgroundImage={require("../../assets/images/bank.png")}
          navigateTo="./"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: screenWidth,
  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
    resizeMode: "cover",
  },
  topBar: {
    position: "absolute",
    top: 71,
    left: 30,
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  menuIcon: {
    width: 30,
    height: 29,
  },
  pfp: {
    width: 50,
    height: 50,
  },
  textContainer: {
    position: "absolute",
    top: 120,
    left: 50,
  },
  text1: {
    fontSize: 32,
    fontWeight: "400",
    color: "#ffffff",
  },
  text2: {
    fontSize: 32,
    fontWeight: "400",
    color: "#ffffff",
  },
  borderedBox: {
    width: 315,
    height: 321,
    backgroundColor: "#ffffff",
    borderRadius: 40,
    paddingHorizontal: 32,
    alignSelf: "center",
    marginTop: -40,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 10,
    marginBottom: 30,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  dots: {
    fontSize: 30,
    fontWeight: "400",
    color: "#000000",
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2D99FF",
    marginTop: 8,
  },
  columnsImage: {
    width: "100%",
    height: 166,
    marginTop: 26,
  },
  pad: {
    paddingHorizontal: 32,
  },

  /* Burger Menu styles */
  overlay: {
    backgroundColor: "#000",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 20,
  },
  sideMenu: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 24,
    zIndex: 30,
  },
  userDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  userName: {
    fontSize: 14,
    color: "#999",
  },
  menuItems: {
    flex: 1,
  },
  menuItemWrapper: {
    paddingVertical: 16,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: "500",
  },
  closeWrapper: {
    marginTop: 32,
  },
  close: {
    fontSize: 16,
    color: "#f00",
  },
});
