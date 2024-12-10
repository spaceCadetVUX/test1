import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity,ScrollView,FlatList,ActivityIndicator } from "react-native";

const HomeScreen = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


    // Fetch data from mock API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://66ff44c52b9aac9c997ebcd3.mockapi.io/api/minhvu/products");
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


    // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Image
          source={{uri: 'https://i.pinimg.com/474x/d0/4a/58/d04a58e5779a96c425ae17fcdcf87506.jpg'}}
          style={styles.avt}
        />

        <Text style={styles.userNameText}>Taylor swift</Text>
    </View>


    <ScrollView>
              {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row} // Style for row spacing
          contentContainerStyle={styles.list}
        />
      )}
    </ScrollView>


          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
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

  header:{
    flexDirection:'row',
    width:"100%",
    height:100,
    backgroundColor:"#ffcf09",

    alignItems:'center'

    
  },
  avt:{
    width:80,
    height:80,
    borderRadius:40,
    margin:20

  },
  userNameText:{

  },



    list: {
    padding: 10,
  },
    row: {
    justifyContent: "space-between", // Add space between columns
  },
  card: {
    width:170,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    margin:10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  price: {
    fontSize: 16,
    color: "#888",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

});

export default HomeScreen;
