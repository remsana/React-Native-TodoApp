import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Todos from './components/Todos';

const HelloWorldApp = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    console.log(todo);
    Keyboard.dismiss();
    // Alert.alert('Todo added!');
    setTodoList([...todoList, todo]);
    setTodo(null);
  };

  const handleDeleteTodo = index => {
    console.log('Deleted this task');
    let newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.todoText}>Todos: </Text>
        <View>
          {todoList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleDeleteTodo(index)}>
                <Todos text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Enter a todo"
              value={todo}
              onChangeText={text => setTodo(text)}
            />
          </View>

          <TouchableOpacity
            onPress={() => handleAddTodo()}
            style={styles.button}>
            <View style={styles.btnContainer}>
              <Text style={styles.addButton}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  tasksContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  todoText: {
    color: 'red',
    fontSize: 35,
    margin: 10,
  },
  btnContainer: {
    margin: 20,
    paddingRight: 75,
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#0096FF',
    borderWidth: 1,
  },

  textInput: {
    borderWidth: 1,
    paddingLeft: 10,
    margin: 20,
  },
  addButton: {
    padding: 5,
  },
});
export default HelloWorldApp;
