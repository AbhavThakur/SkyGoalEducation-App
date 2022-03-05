import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Title } from "react-native-paper";
import { COLORS, Icons, SIZES } from "../constants";
import { windowWidth } from "../utils/Dimentions";

function TopHeader({
  title,
  subtitle,
  Search,
  onPress,
  headerTitle,
  onPressBack
}) {
  return (
    <View style={styles.container}>
      {title && <Title style={{ color: COLORS.white }}>{title}</Title>}
      {subtitle && (
        <Text style={{ color: COLORS.white, marginBottom: 20 }}>
          {subtitle}
        </Text>
      )}
      {headerTitle && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: windowWidth,
            paddingHorizontal: 20
          }}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
            <Icons.Back width={54} height={54} />
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.white,
              marginStart: 90,
              fontSize: SIZES.h2,
              fontWeight: "500"
            }}
          >
            {headerTitle}
          </Text>
        </View>
      )}
      {Search && (
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
              placeholderTextColor={COLORS.lightwhite}
              style={{
                color: COLORS.black,
                width: windowWidth * 0.6
              }}
            />
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Icons.Mic width={55} height={53} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.button,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default TopHeader;
