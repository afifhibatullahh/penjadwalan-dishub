import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logos.png")}
        style={styles.logo}
      />
      <Text
        style={{
          fontSize: 35,
          color: "#FFF",
          fontWeight: "bold",
          marginVertical: 20,
        }}
      >
        Selamat Datang
      </Text>
      <View style={{ width: "50%", marginBottom: 15 }}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFF",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {" "}
          Masukan username dan password untuk masuk ke JadHub{" "}
        </Text>
      </View>

      <View style={styles.box}>
        <View style={styles.wrapInput}>
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            value={username}
            placeholder="Masukan username anda..."
          />
        </View>
        <View style={styles.wrapInput}>
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Masukan password anda..."
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 27,
              fontWeight: "bold",
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#678DCF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "90%",
    bottom: 220,
    padding: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    top: 0,
  },
  wrapInput: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: "#C3D6E7",
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    paddingHorizontal: 20,
  },
  loginButton: {
    width: 150,
    height: 60,
    backgroundColor: "#678DCF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#678DCF",
    marginBottom: 20,
    marginLeft: 10,
  },
});
