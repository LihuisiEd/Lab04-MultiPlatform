import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const PizzaTable = () => {
  const tableHead = ['Pizza', 'Ingredientes', 'Precio'];
  const tableData = [
    ['Pepperoni', 'Salsa de tomate, queso mozzarella, pepperoni', '$12.99'],
    ['Hawaiana', 'Salsa de tomate, queso mozzarella, jamón, piña', '$14.99'],
    ['Vegetariana', 'Salsa de tomate, queso mozzarella, pimiento, cebolla, champiñones', '$10.99'],
    ['Margarita', 'Salsa de tomate, queso mozzarella, albahaca fresca', '$11.99'],
    ['Cuatro Quesos', 'Salsa de tomate, queso mozzarella, queso gorgonzola, queso parmesano, queso ricotta', '$15.99'],
    ['Barbacoa', 'Salsa barbacoa, queso mozzarella, pollo desmenuzado, cebolla roja, cilantro', '$13.99'],
    ['Mexicana', 'Salsa de tomate, queso mozzarella, carne de res molida, jalapeños, tomate, cebolla', '$16.99'],
    ['Capricciosa', 'Salsa de tomate, queso mozzarella, jamón, champiñones, aceitunas, alcachofa', '$14.99'],
    ['Marinara', 'Salsa de tomate, ajo, orégano', '$9.99'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.headerText} textStyle={styles.headerText} />
        <Rows data={tableData} textStyle={styles.rowText} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    scrollView: {
      marginHorizontal: 20,
    },
    border: { borderWidth: 2,borderColor: '#FF8525' },
    headerText: {
        height: 50,
        backgroundColor: '#FF8525',
        padding: 10,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold'
      },
    rows: {padding:10,backgroundColor:'#fff'},
    wrapper: {
      flexDirection: 'row',
    },
    rowText: {
      padding: 10,
      color: '#58504C',
      textAlign: 'center',
    },
  });

export default PizzaTable;
