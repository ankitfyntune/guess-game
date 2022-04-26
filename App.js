import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {color} from "./common";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from './screen/GameScreen';
export default function App() {
  const [numberGuessed, setNumberGuessed] = useState({
    isGuessed: false,
    number: 0
});
  let screen = <StartGameScreen setNumberGuessed={setNumberGuessed} />
  if(numberGuessed?.isGuessed) {
    screen = <GameScreen numberGuessed={numberGuessed} setNumberGuessed={setNumberGuessed} />
  }
  return (
    <LinearGradient
      colors={[color.yellowLight, color.sunset]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/dice.jpg")}
        style={styles.backGroundImageContainer}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.screenContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10
  },
  backGroundImageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.1
  }
});
