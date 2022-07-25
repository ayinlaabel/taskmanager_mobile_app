import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ContainerList,
  DeleteIcon,
  Divider,
  EditIcon,
  FloatButton,
  IconButton,
  List,
  ListText,
  TaskContainer,
  Header,
  TaskListContainer,
  Title,
} from '../styles/styles';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectList, selectToken } from '../slices/navSlice';
import { Icon } from '@rneui/base';
import Avatar from '../components/Avatar';
import { StatusBar } from 'expo-status-bar';

const TaskScreen = ({ navigation }) => {
  const baseUrl = 'https://taskmanager001.herokuapp.com/lists/';
  const token = useSelector(selectToken);
  const list = useSelector(selectList);

  const [data, setData] = useState([]);

  const headers = {
    headers: {
      'x-access-token': token.token,
    },
  };
  useEffect(() => {
    axios.get(baseUrl + list.item._id + '/tasks', headers).then((tasks) => {
      setData(tasks.data);
    });
  }, []);
  return (
    <TaskContainer>
      <StatusBar style="light" />
      <Header>
        <Title>Task</Title>
        <Avatar />
      </Header>
      <TaskListContainer>
        {data < 1 ? (
          <Text>No Task</Text>
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
              <ContainerList>
                <List
                  onPress={() => {
                    // console.log(item);
                    axios
                      .patch(baseUrl + item._listId + '/tasks/' + item._id, { isComplete: !item.isComplete }, headers)
                      .then((item) => console.log(item.data));
                  }}
                >
                  <ListText item={item.isComplete}>{item.title}</ListText>
                </List>
                {!item.isComplete ? (
                  <>
                    <IconButton>
                      <EditIcon onPress={() => navigation.navigate('Edit', { type: 'task', item })}>
                        <Icon type="font-awesome" name="edit" color="#fff" size={20} />
                      </EditIcon>
                      <DeleteIcon onPress={() => navigation.navigate('Delete', { item, type: 'task' })}>
                        <Icon type="font-awesome" name="trash" color="#fff" size={20} />
                      </DeleteIcon>
                    </IconButton>
                  </>
                ) : (
                  <></>
                )}
              </ContainerList>
            )}
          />
        )}
      </TaskListContainer>
      <FloatButton onPress={() => navigation.navigate('CreateTask', list)}>
        <Icon type="font-awesome" name="plus" color="white" />
      </FloatButton>
    </TaskContainer>
  );
};

export default TaskScreen;
