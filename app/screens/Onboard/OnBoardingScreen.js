import React, { useState, createRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import { Title, Subheading } from "react-native-paper";
import { COLORS } from "../../constants";
import { FormButton } from "../../components";
// Data will be used to compose our slides
const data = [
  {
    image: require("../../assets/animation/onboard.json"),
    title: "Browse Top Colleges",
    subtitle:
      "Browse information and insights about 40,000+ colleges in India, including top rankings, college reviews and news."
  },
  {
    image: require("../../assets/animation/onboard1.json"),
    title: "10K+ Universities",
    subtitle:
      "we provide information and insights on over 10,000 Universities  right at your fingertips"
  },
  {
    image: require("../../assets/animation/onboard2.json"),
    title: "Apply In 3 Minutes",
    subtitle:
      "Applying to college is one of the biggest decisions you’ll make. With Skygoal, you’re only three minutes away from applying for your "
  },
  {
    image: require("../../assets/animation/onboard3.json"),
    title: "Start Your Journey",
    subtitle:
      "We’re ready to connect you with the world! Start your learning journey with Skygoal."
  }
];
const OnboardingScreen = ({ navigation }) => {
  // Width of the window will be width of our slides
  const windowWidth = useWindowDimensions().width;
  // Ref to the FlatList element. We use it to access its methods
  const slider = createRef(null);
  // Slider state contains active item and offset position
  const [sliderState, setSliderState] = useState({
    item: 0,
    offset: 0
  });
  // Update slider state on change event
  const slideChanged = e => {
    const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);
    setSliderState({
      item: item,
      offset: item * windowWidth
    });
  };
  // Renderer function takes the data as an input and outputs the view, should be customized
  const renderer = ({ item }) => (
    <View style={{ width: windowWidth }}>
      <View style={{ ...styles.slide, backgroundColor: COLORS.white }}>
        <LottieView autoPlay loop style={styles.image} source={item.image} />
        {dots()}

        <Title>{item.title}</Title>
        <Subheading style={{ padding: 15 }}>{item.subtitle}</Subheading>
      </View>
    </View>
  );
  // Renders control buttons
  const button = direction => (
    <TouchableOpacity
      onPress={() =>
        slider.current.scrollToOffset({
          offset:
            direction === "Prev"
              ? sliderState.offset - windowWidth
              : sliderState.offset + windowWidth,
          animated: true
        })
      }
    >
      <Text style={styles.buttons}>{direction}</Text>
    </TouchableOpacity>
  );

  const skip = () => {
    const lastSlideIndex = data.length - 1;
    const offset = lastSlideIndex * windowWidth;
    slider.current.scrollToOffset({ offset });
  };
  // Renders pagination dots
  const dots = () => (
    <View style={styles.dotGroup}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            sliderState.item === index ? styles.dotActive : null
          ]}
        />
      ))}
    </View>
  );
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderer}
        ref={slider}
        keyExtractor={(_, index) => index} // Set unique key for each element
        horizontal={true} // Transpose the slider horizontally
        pagingEnabled={true} // Snap to the side
        showsHorizontalScrollIndicator={false} // Hide scrollbar
        onScroll={slideChanged} // Fire slideChanged on scroll event
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index
        })} // Used for optimization to eliminate recurred measurement calculations
      />
      <View style={styles.skipbtn}>
        <TouchableOpacity activeOpacity={0.8} onPress={skip}>
          <Text style={styles.buttons}>SKIP</Text>
        </TouchableOpacity>
      </View>
      {sliderState.item === data.length - 1 ? (
        <View style={[styles.controls, { padding: 10 }]}>
          <FormButton
            buttonTitle={"Get Started"}
            onPress={() => navigation.replace("Login")}
          />
        </View>
      ) : (
        <View style={styles.controls}>
          {button("Prev")}
          {button("Next")}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  slide: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 350,
    height: 350
  },
  controls: {
    position: "absolute",
    width: "100%",
    bottom: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  skipbtn: {
    position: "absolute",
    top: 15,
    right: 5
  },
  dotGroup: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1.5,
    borderColor: COLORS.gray
  },
  dotActive: {
    backgroundColor: COLORS.button
  },
  buttons: {
    fontSize: 16,
    color: COLORS.black,
    marginHorizontal: 14,
    padding: 15,
    fontWeight: "bold"
  },
  finalbtn: {
    fontSize: 16,
    color: COLORS.white,
    padding: 15,
    fontWeight: "bold"
  }
});
export default OnboardingScreen;
