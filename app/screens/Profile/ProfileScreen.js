import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../components/TopHeader";
import { COLORS } from "../../constants";

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader headerTitle={"Profile"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center"
  }
});

export default ProfileScreen;
