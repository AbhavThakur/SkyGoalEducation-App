import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { Title, Paragraph } from "react-native-paper";

import { COLORS, Icons } from "../../constants";
import { AuthContext } from "../../navigation/AuthProvider";
import { windowHeight } from "../../utils/Dimentions";

function Login() {
  const { googleLogin } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/login.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Title style={styles.title}>Welcome to Skygoal</Title>
        <Paragraph style={styles.paragraph}>
          We’re ready to connect you with the world! Start your learning journey
          with Skygoal.
        </Paragraph>
        <TouchableOpacity activeOpacity={0.5} onPress={() => googleLogin()}>
          <Image source={Icons.signUp} style={{ width: 350, height: 60 }} />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  title: {
    color: COLORS.white,
    marginTop: windowHeight * 0.45,
    fontSize: 23,
    fontWeight: "500"
  },
  paragraph: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 80
  }
});

export default Login;
