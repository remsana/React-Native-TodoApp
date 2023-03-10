import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Todos = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.todoContainer}>
        <View style={styles.checkBox}></View>
        <Text style={styles.todoText}>{props.text} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginRight: 10
  },
  todoText: {
    color: 'black',
    fontSize: 20,
  },
});

export default Todos;
