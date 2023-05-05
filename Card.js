import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
    width:300,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    margin: 10,
    fontSize: 16,
    color: '#888',
  },
});

export default Card;
