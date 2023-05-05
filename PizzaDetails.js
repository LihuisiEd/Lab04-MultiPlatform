import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PizzaDetails = () => {
  return (
    <ScrollView>
      <View style={styles.section}>
        <Image source={{ uri: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg' }} style={styles.image} />
        <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan tortor vel sapien tristique, nec lobortis purus fringilla. Nulla quis ex sed nisi placerat laoreet. Nullam sodales, dolor vel fermentum pulvinar, mauris velit pharetra justo, vitae faucibus nulla nisi id metus.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce accumsan, elit non ultrices aliquet, magna turpis tristique velit, in pharetra felis nisi ac lorem. Curabitur consequat bibendum est, a sagittis libero venenatis id. </Text>
        <Image source={{ uri: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg' }} style={styles.image} />
      </View>
      <View style={styles.section}>
        <Image source={{ uri: 'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_orig.jpg' }} style={styles.image} />
        <Text style={styles.sectionText}>Donec sodales feugiat neque, nec tincidunt magna consequat ut. Vivamus interdum gravida elit, in consectetur mi dapibus ut. Integer elementum lorem sed bibendum auctor. Maecenas eget est nec nunc rhoncus sodales.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    
    width:800,
    flexDirection: 'row',
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
  sectionText: {
    margin: 10,
    fontSize: 16,
    color: '#888',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default PizzaDetails;
