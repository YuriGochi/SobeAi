
import React from "react";
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View,
 } from "react-native";
import Button from '../components/Button';
import { theme } from '../core/theme'

const image = { uri: "https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg" };

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.textHeader}>Sobe Aí!</Text>
        <View style={styles.footer}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Intro')}>
              <Text>Novo por aqui?</Text>
          </Button>
          <Button style={styles.button}  mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
              <Text>Já sou membro</Text>
          </Button>
        </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "space-between"
  },
  textHeader: {
    color: "#cba826",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  button:{
    width:'40%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default Home;
