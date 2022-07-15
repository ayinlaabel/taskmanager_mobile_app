import { View, Text } from "react-native";
import React, { useState } from "react";
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
  TaskHeader,
  TaskListContainer,
  TaskTitle,
} from "../styles/styles";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectList, selectToken } from "../slices/navSlice";
import { Icon } from "@rneui/base";

const TaskScreen = ({ navigation }) => {
  const baseUrl = "https://taskmanager001.herokuapp.com/lists/";
  const token = useSelector(selectToken);
  const list = useSelector(selectList);

  const [data, setData] = useState([]);

  const headers = {
    headers: {
      "x-access-token": token.token,
    },
  };

  axios.get(baseUrl + list.item._id + "/tasks", headers).then((tasks) => {
    setData(tasks.data);
  });
  return (
    <TaskContainer>
      <TaskHeader>
        <TaskTitle>Task</TaskTitle>
      </TaskHeader>
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
                <List>
                  <ListText>{item.title}</ListText>
                </List>
                <IconButton>
                  <EditIcon
                    onPress={() =>
                      navigation.navigate("Edit", { type: "task", item })
                    }
                  >
                    <Icon
                      type="font-awesome"
                      name="edit"
                      color="#fff"
                      size={20}
                    />
                  </EditIcon>
                  <DeleteIcon
                    onPress={() =>
                      navigation.navigate("Delete", { item, type: "task" })
                    }
                  >
                    <Icon
                      type="font-awesome"
                      name="trash"
                      color="#fff"
                      size={20}
                    />
                  </DeleteIcon>
                </IconButton>
              </ContainerList>
            )}
          />
        )}
      </TaskListContainer>
      <FloatButton onPress={() => navigation.navigate("CreateTask", list)}>
        <Icon type="font-awesome" name="plus" color="white" />
      </FloatButton>
    </TaskContainer>
  );
};

export default TaskScreen;
