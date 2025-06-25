import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../../components/Button";

const { width: screenWidth } = Dimensions.get("window");

export default function UserPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/userimg.png")}
          style={styles.bgImage}
        />
        <Text style={styles.profileTitle}>Profile</Text>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/prof pic.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>Shasha Kolakola</Text>
            <Text style={styles.online}>Online</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>chyaber02</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.value}>Shasha</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.value}>Kolakola</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Date Of Birth</Text>
          <Text style={styles.value}>20-03-1997</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.signOutContainer}>
          <CustomButton
              variant="white"
              text="Sign Out"
              arrowIcon={require("../../assets/images/out.png")}
              navigateTo="./welcome"
          />    
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    backgroundColor: "white",
  },
  header: {
    position: "relative",
  },
  bgImage: {
    width: screenWidth,
    height: 294,
    resizeMode: "cover",
  },
  profileTitle: {
    position: "absolute",
    top: 100,
    left: 35,
    fontSize: 40,
    fontWeight: "700",
    color: "#000",
  },
  profileContainer: {
    position: "absolute",
    bottom: 50,
    left: 35,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: "white",
  },
  name: {
    fontSize: 19.2,
    fontWeight: "700",
    color: "#2743FD",
  },
  online: {
    fontSize: 18,
    color: "#2743FD",
    fontWeight: "300",
    marginTop: 1,
  },
  infoContainer: {
    marginTop: -50,
    paddingHorizontal: 35,
  },
  infoRow: {
    marginBottom: 8,
  },
  label: {
    marginTop: 25,
    fontSize: 14,
    color: "#888",
    fontWeight: "400",
  },
  value: {
    fontSize: 14,
    color: "#2743FD",
    fontWeight: "400",
    marginTop: 2,
  },
  separator: {
    width: 323,
    borderBottomWidth: 1,
    borderColor: "#DEE1EF",
    marginVertical: 8,
    alignSelf: "center",
    
  },
  signOutContainer: {
    marginTop: 45,
  },
});
