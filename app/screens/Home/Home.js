import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";

import { RadioButton, Title, Divider } from "react-native-paper";
import TopHeader from "../../components/TopHeader";
import { COLORS, Icons, SIZES } from "../../constants";

const modalheight = 350;
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
        onBackdropPress={() => {
          setCollegeModalVisible(false);
        }}
        onSwipeComplete={() => {
          setCollegeModalVisible(false);
        }}
        useNativeDriverForBackdrop
        swipeDirection={["down"]}
      >
        <View
          style={{
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
            <View
              style={{
                backgroundColor: COLORS.lightwhite,
                width: 50,
                height: 5,
                borderRadius: 20,
                alignSelf: "center"
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20
              }}
            >
              <Title>Sort by</Title>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setCollegeModalVisible(false)}
              >
                <Icons.Cross width={18} height={18} />
              </TouchableOpacity>
            </View>
            <Divider style={{ marginVertical: 10 }} />
            <View>
              <RadioButton.Item
                label="Bachelor of Technology"
                value="BTech"
                color={COLORS.button}
                status={value === "BTech" ? "checked" : "unchecked"}
                onPress={() => setValue("BTech")}
              />
              <RadioButton.Item
                label="Bachelor of Architecture"
                value="Architecture"
                color={COLORS.button}
                status={value === "Architecture" ? "checked" : "unchecked"}
                onPress={() => setValue("Architecture")}
              />
              <RadioButton.Item
                label="Pharmacy"
                value="Pharmacy"
                color={COLORS.button}
                status={value === "Pharmacy" ? "checked" : "unchecked"}
                onPress={() => setValue("Pharmacy")}
              />
              <RadioButton.Item
                label="Law"
                value="Law"
                color={COLORS.button}
                status={value === "Law" ? "checked" : "unchecked"}
                onPress={() => setValue("Law")}
              />
              <RadioButton.Item
                label="Management"
                value="Management"
                color={COLORS.button}
                status={value === "Management" ? "checked" : "unchecked"}
                onPress={() => setValue("Management")}
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
      <TopHeader
        title="Find your own way"
        subtitle="Search in 600 colleges around!"
        Search
      />
      {/*  */}
      <CategoryModal />
      {/* Main screen  */}
      <ScrollView
        contentContainerStyle={{
          // paddingBottom: 250,
          flex: 1
          // backgroundColor: "yellow"
        }}
      >
        <View style={{ alignItems: "center", marginTop: 30 }}>
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
          <View style={styles.CategoryContainer}>
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
  view: {
    margin: 0
  },
  CategoryContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    width: 345,
    justifyContent: "space-between",
    position: "absolute",
    top: 205,
    height: 300
  }
});

export default Home;
