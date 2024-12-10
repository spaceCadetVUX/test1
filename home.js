import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://i.pinimg.com/236x/2c/e5/fb/2ce5fbad7a5a0ead6b22c480b8a306fa.jpg" }}
        style={styles.image}
      />

      <View style={styles.fakeLayer}>
        <Text style={[styles.text, { color: 'black', fontWeight: '500', fontSize: 40, textAlign: 'center', marginBottom: 20 }]}>
          Buy groceries easily with us
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sec')}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.belowScreen}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: "100%",
    height: 750,
    zIndex: 0,
  },
  belowScreen: {
    position: 'absolute',
    top: 620,
    left: -800,
    backgroundColor: "white",
    width: 2000,
    height: 2000,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  fakeLayer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 200,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "green",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Added space between text and button
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
