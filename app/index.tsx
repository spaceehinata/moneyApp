import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../assets/images/gochi.png"),
    title: "Save your money conveniently.",
    description: "Get 5% cash back for each transaction and spend it easily.",
  },
  {
    id: "2",
    image: require("../assets/images/SafetyBox.png"),
    title: "Secure your money for free and get rewards.",
    description: "Get the most secure payment app ever and enjoy it.",
  },
  {
    id: "3",
    image: require("../assets/images/Trading.png"),
    title: "Enjoy commission-free stock trading.",
    description: "Online investing has never been easier than it is right now.",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const dotAnim1 = currentSlide === 0 ? 24 : 8;
  const dotAnim2 = currentSlide === 1 ? 24 : 8;
  const dotAnim3 = currentSlide === 2 ? 24 : 8;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentSlide + 1,
        animated: true,
      });
      return false;
    }
    return true;
  };

  const handleNavigation = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentSlide + 1,
        animated: true,
      });
      return "";
    }
    return "/welcome";
  };

  const handleNextPress = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentSlide + 1,
        animated: true,
      });
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <View style={styles.dotsContainer}>
        <Animated.View
          style={[
            styles.dot,
            {
              width: dotAnim1,
              backgroundColor: currentSlide === 0 ? "#2A46FF" : "#B5BFFF",
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              width: dotAnim2,
              backgroundColor: currentSlide === 1 ? "#2A46FF" : "#B5BFFF",
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              width: dotAnim3,
              backgroundColor: currentSlide === 2 ? "#2A46FF" : "#B5BFFF",
            },
          ]}
        />
      </View>
      <View style={styles.round}></View>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            <Image
              source={require("../assets/images/logosm.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <Image
              source={item.image}
              style={styles.pig}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.text1}>{item.title}</Text>
              <Text style={[styles.text2, { maxWidth: screenWidth * 0.7 }]}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={({ viewableItems }) => {
          if (
            viewableItems &&
            viewableItems.length > 0 &&
            viewableItems[0].index !== null
          ) {
            setCurrentSlide(viewableItems[0].index);
          }
        }}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        getItemLayout={(data, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
      />
      <View style={styles.next}>
        <View
          style={[
            styles.buttonWrapper,
            { width: currentSlide === slides.length - 1 ? 189 : 153 },
          ]}
        >
          <CustomButton
            variant="blue"
            text={currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            navigateTo={currentSlide === slides.length - 1 ? "/welcome" : ""}
            smallImage={require("../assets/images/next.png")}
            arrowIcon={
              currentSlide === slides.length - 1
                ? undefined
                : require("../assets/images/arrow.png")
            }
            style={{ alignSelf: "center" }}
            onNavigate={handleNext}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonWrapper: {
    width: "100%",
  },
  slideContainer: {
    width: screenWidth,
    flex: 1,
  },
  image: {
    width: 71,
    height: 69,
    marginTop: 90,
    alignSelf: "center",
  },
  pig: {
    width: 280,
    height: 202,
    marginTop: 80,
    alignSelf: "center",
  },
  round: {
    width: 470,
    height: 470,
    borderRadius: 470,
    position: "absolute",
    left: -133,
    bottom: -103,
    backgroundColor: "#F5F6FA",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 36,
    paddingTop: 125,
    textAlign: "left",
  },
  text1: {
    fontSize: 25,
    color: "#2743FD",
    fontWeight: "700",
  },
  text2: {
    fontSize: 18,
    color: "#7C2AFF",
    marginTop: 26,
    fontWeight: "400",
  },
  next: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    position: "absolute",
    bottom: 60,
    left: 30,
    zIndex: 55,
  },
  dot: {
    height: 5,
    borderRadius: 6,
  },
});
