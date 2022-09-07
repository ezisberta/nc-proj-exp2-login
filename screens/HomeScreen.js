import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginScreen");
    });
  };
  return (
    <View style={styles.container}>
      <Text>Logged in as: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutButton: {
    width: "40%",
    alignItems: "center",
    margin: 30,
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "black",
    backgroundColor: "white",
  },
  signOutButtonText: { fontWeight: "bold" },
});
