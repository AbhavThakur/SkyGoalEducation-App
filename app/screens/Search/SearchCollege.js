import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Divider } from "react-native-paper";
import TopHeader from "../../components/TopHeader";
import { COLORS, SIZES } from "../../constants/theme";

function SearchCollege() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <TopHeader Search />
      {/*  */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          paddingBottom: 20
        }}
      >
        {/* Image */}
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            }}
            style={{
              width: "100%",
              height: 120,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}
          />
        </View>
        {/* Bottom Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginTop: 10
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontWeight: "500"
            }}
          >
            GHJK Engineering college
          </Text>
          <Text>4.3</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
            marginTop: 10
          }}
        >
          <View style={{ width: "72%" }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut
              imperdiet sed nec ullamcorper.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.button,
              padding: 5,
              paddingHorizontal: 10,
              borderRadius: 10
            }}
          >
            <Text style={{ color: COLORS.white }}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <Divider style={{ marginVertical: 10 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
});

export default SearchCollege;
