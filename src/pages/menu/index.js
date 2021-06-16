import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>Menu</Text>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4366A3",
    justifyContent: "center",
    alignItems: "center",
  },
});
