import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomButton from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 147;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function ConfirmationPage() {
  const params = useLocalSearchParams();
  const amount = params.amount || "0";
  return (
        <View style={styles.main}>
          <View>
            <Image
              source={require("../assets/images/Rectangle 16.png")}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.headerOverlay}>
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require("../assets/images/back.png")} 
                  style={styles.backArrow}
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Transaction</Text>
            </View>
        </View>
          <Image
            source={require("../assets/images/bigch.png")}
            style={styles.chekImage}
            resizeMode="contain"
          />
<Text style={styles.title}>
  <Text style={styles.lightText}>You have successfully sent </Text>
<Text style={styles.boldText}>${amount} </Text>
  <Text style={styles.lightText}>to </Text>
  <Text style={styles.boldText}>Pedro Gonzales.</Text>
</Text>
          <Image
            source={require("../assets/images/prof pic.png")}
            style={styles.pfp}
            resizeMode="contain"
          />
          <View style={styles.pad}>
          <CustomButton
            variant="otp"
            text="Execute Again"
            backgroundImage={require("../assets/images/Group1.png")}
            backgroundImage2={require("../assets/images/Group3.png")}
            navigateTo="./"
          />  
            <CustomButton
              variant="complete"
              text="Complete"
              arrowIcon={require("../assets/images/arrow2.png")}
              navigateTo="./homepage"
              active={true}
              withBorder={true} 
            />
          </View>     
        </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#FFFFFF",

  },
  image: {
    width: screenWidth,
    height: calculatedHeight,
    resizeMode: "cover",
    marginBottom: 83,
  },
title: {
  fontSize: 20,
  textAlign: "center",
  marginHorizontal: 67,
},

lightText: {
  fontWeight: "400",
  color: "#2743FD",
},

boldText: {
  fontWeight: "700",
  color: "#2743FD",
},

  chekImage: {
    height: 123,
    width: 123,
    alignSelf: "center",
    marginBottom: 20,
  },
  pfp: {
    width: 91,
    height: 91,
    borderRadius: 21,
    alignSelf: "center",
    marginTop: 40,
  },
  pad: {
    paddingHorizontal: 39,
    marginTop: 40,
    gap: 30,
  },
  headerOverlay: {
  position: 'absolute',
  top: 66, 
  left: 20,
  right: 20,
  flexDirection: 'row',
  justifyContent: 'center',
},

backArrow: {
  position: 'absolute',
  left: -110,
  width: 26,
  height: 21,
  tintColor: 'white',
},

headerText: {
  fontSize: 20,
  fontWeight: '700',
  color: 'white',
},

});
