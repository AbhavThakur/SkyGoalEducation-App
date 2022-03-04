import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";

import { RadioButton, Title } from "react-native-paper";
import { COLORS, Icons, SIZES } from "../../constants";
import { windowWidth } from "../../utils/Dimentions";

const modalheight = 300;
function Home() {
  const [CollegeModalVisible, setCollegeModalVisible] = useState(false);
  const [value, setValue] = React.useState("first");

  const Category = ({ name, title, subtitle, onPress }) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View>
          {name}
          <View
            style={{
              position: "absolute",
              bottom: 20,
              width: 150,
              left: 12
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                marginBottom: 11,
                fontSize: SIZES.h4,
                fontWeight: "500"
              }}
            >
              {title}
            </Text>
            <Text style={{ color: COLORS.white }}>{subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const CategoryModal = () => {
    return (
      <Modal
        isVisible={CollegeModalVisible}
        style={styles.view}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        useNativeDriverForBackdrop
        onBackdropPress={() => {
          setCollegeModalVisible(false);
        }}
        onSwipeComplete={() => {
          setCollegeModalVisible(false);
        }}
        swipeDirection={["down"]}
      >
        <View
          style={{
            // backgroundColor: 'yellow',
            justifyContent: "flex-end",
            flex: 1
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.white,
              width: "100%",
              height: modalheight,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 10
            }}
          >
            <View>
              <RadioButton.Item
                label="Distance (km)"
                value="Distance"
                status={value === "Distance" ? "checked" : "unchecked"}
                onPress={() => setValue("first")}
              />
              <RadioButton.Item
                label="Discount upto 10%"
                value="10% Discount"
                status={value === "10% Discount" ? "checked" : "unchecked"}
                onPress={() => console.log("first")}
              />
              <RadioButton.Item
                label="Discount upto 20%"
                value="20% Discount"
                status={value === "20% Discount" ? "checked" : "unchecked"}
                onPress={() => console.log("first")}
              />
              <RadioButton.Item
                label="Discount upto 40%"
                value="40% Discount"
                status={value === "40% Discount" ? "checked" : "unchecked"}
                onPress={() => console.log("first")}
              />
              <RadioButton.Item
                label="Discount upto 60%"
                value="60% Discount"
                status={value === "60% Discount" ? "checked" : "unchecked"}
                onPress={() => console.log("first")}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerBg}>
        <Title style={{ color: COLORS.white }}>Find your own way</Title>
        <Text style={{ color: COLORS.white, marginBottom: 20 }}>
          Search in 600 colleges around!
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: windowWidth * 0.9
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.white,
              width: windowWidth * 0.7,
              alignItems: "center",
              borderRadius: 15,
              justifyContent: "center"
            }}
          >
            <Icons.SearchIcon width={20} length={20} />
            <TextInput
              placeholder="Search for colleges, schools..."
              placeholderTextColor={COLORS.light}
              style={{
                color: COLORS.black,
                width: windowWidth * 0.6
              }}
            />
          </View>
          <Icons.Mic width={55} height={53} />
        </View>
      </View>
      {/*  */}
      <CategoryModal />
      {/* Main screen  */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 250
        }}
      >
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setCollegeModalVisible(true)}
          >
            <View>
              <Icons.Colleges width={345} height={258} />
              <View
                style={{
                  position: "absolute",
                  top: 40,
                  width: 200,
                  left: 20
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    marginBottom: 10,
                    fontSize: SIZES.h2,
                    fontWeight: "500"
                  }}
                >
                  Top Colleges
                </Text>
                <Text style={{ color: COLORS.white }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  lacinia sed senectus nisi,
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* School and exam view container */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "transparent",
              width: 345,
              justifyContent: "space-between",
              position: "absolute",
              top: 205,
              height: 300
            }}
          >
            {/* Schools */}
            <Category
              name={<Icons.School width={167} height={272} />}
              title="Top Schools"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing"
            />
            {/* Exam */}
            <Category
              name={<Icons.Exam width={167} height={272} />}
              title="Top Exams"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            {/*  */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerBg: {
    backgroundColor: COLORS.button,
    width: "100%",
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    paddingHorizontal: 20,
    paddingTop: 15
  },
  view: {
    margin: 0
  }
});

export default Home;
