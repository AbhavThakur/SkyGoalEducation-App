import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { COLORS } from "../../constants/theme";

function SearchCollege() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Colege</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10
  }
});

export default SearchCollege;
