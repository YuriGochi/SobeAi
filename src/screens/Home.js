
import React from "react";
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View,
  Button,
  TouchableOpacity,
  Footer
 } from "react-native";

const image = { uri: "https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg" };

const Home = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.textHeader}>Sobe Aí!</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.Novo} >
            <Text style={{
                color: '#cba826', 
                alignItems: 'center',
                marginLeft: 25
                }} >Novo por aqui?</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.Membro} >
            <Text style={{
                color: '#cba826', 
                alignItems: 'center',
                marginLeft: 25
                }} >Já sou membro</Text>
        </TouchableOpacity>
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
  Novo: {
    alignItems: "center",
    backgroundColor: "#000000c0",
    width: "40%",
    height: 50,
    borderRadius: 34,
    flexDirection: 'row',
    marginBottom: 50,
  },
  Membro: {
    alignItems: "center",
    backgroundColor: "#000000c0",
    width: "40%",
    height: 50,
    borderRadius: 34,
    flexDirection: 'row',
    marginBottom: 50,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  }
});

export default Home;
