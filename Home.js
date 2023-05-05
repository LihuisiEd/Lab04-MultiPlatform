import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Card from './Card';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.cardList}>
      <Card image='https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684-1.jpg' title="Pizza Margarita" description="Salsa de tomate, queso mozzarella y albahaca fresca." style={{ width: windowWidth * 0.3 }}/>
      <Card image='https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg' title="Pizza Hawaiana" description="Salsa de tomate, queso mozzarella, jamón y piña." style={{ width: windowWidth * 0.3 }}/>
      <Card image='https://www.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg' title="Pizza Pepperoni" description="Salsa de tomate, queso mozzarella y pepperoni." style={{ width: windowWidth * 0.3 }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardList: {
    marginTop:20,
    flex: 1,
    maxHeight:400,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
});

export default Home;
