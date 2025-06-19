import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface Props {
  visible: boolean;
  onClose: () => void;
  activeMenu: string;
  onNavigate: (menu: string) => void;
}

const BurgerMenu = ({ visible, onClose, activeMenu, onNavigate }: Props) => {
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -width,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  const renderMenuItem = (
    label: string,
    id: string,
    icon: any // use: require("...")
  ) => (
    <Pressable
      key={id}
      onPress={() => {
        onNavigate(id);
        onClose();
      }}
      style={[styles.menuItem, activeMenu === id && styles.activeItem]}
    >
      <View style={styles.menuContent}>
        <Image source={icon} style={styles.menuIcon} />
        <Text
          style={[styles.menuText, activeMenu === id && styles.activeText]}
        >
          {label}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );

  return (
    <>
      {visible && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.drawer, { left: slideAnim }]}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require("../assets/images/prof pic.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Shasha Kolakola</Text>
            <Text style={styles.username}>@chyaber02</Text>
          </View>
          
        </View>

        {renderMenuItem(
          "Payments",
          "payments",
          require("../assets/images/payment.png")
        )}
        {renderMenuItem(
          "Transactions",
          "transactions",
          require("../assets/images/payment.png")
        )}
        {renderMenuItem(
          "My Cards",
          "cards",
          require("../assets/images/payment.png")
        )}
        {renderMenuItem(
          "Promotions",
          "promotions",
          require("../assets/images/payment.png")
        )}
        {renderMenuItem(
          "Savings",
          "savings",
          require("../assets/images/payment.png")
        )}
      </Animated.View>
    </>
  );
};

export default BurgerMenu;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0000004D",
    zIndex: 999,
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    paddingTop: 60,
    zIndex: 1000,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginBottom: 50,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginRight: 12,
  },
  textContainer: {
    flexDirection: "column",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  username: {
    fontWeight: "400",
    fontSize: 15,
    color: "#000000",
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderTopWidth: 1,
    borderTopColor: "transparent",
    borderRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activeItem: {
    backgroundColor: "#F2F4F8",
    borderTopColor: "#F2F4F8",
  },
  menuContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  menuText: {
    fontSize: 18,
    color: "#2B47FC",
  },
  activeText: {
    fontWeight: "400",
  },
  arrow: {
    fontSize: 22,
    color: "#2B47FC",
  },
});
