import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";

import {
  Container,
  List,
  ListContainer,
  ListHeader,
  ListText,
  DropShadow,
  FloatButton,
  ContainerList,
  IconButton,
  DeleteIcon,
  EditIcon,
  Divider,
  Header,
  Title,
} from "../styles/styles";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectToken, selectUser, setList } from "../slices/navSlice";
import { StatusBar } from "expo-status-bar";

import { useDispatch } from "react-redux";
import Avatar from "../components/Avatar";

const HomeScreen = ({ navigation }) => {
  const baseUrl = "https://taskmanager001.herokuapp.com/lists/";
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const headers = {
    headers: {
      "x-access-token": token.token,
    },
  };

  const [data, setData] = useState([]);

  axios.get(baseUrl, headers).then((lists) => {
    setData(lists.data);
  });

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Container>
        <Header>
          <Title>Lists</Title>
          <Avatar />
        </Header>
        <ListContainer>
          {data < 1 ? (
            <Text>No List</Text>
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
                      dispatch(setList(null));
                      dispatch(
                        setList({
                          item,
                        })
                      );
                      navigation.navigate("Task");
                    }}
                  >
                    <ListText>{item.title}</ListText>
                  </List>
                  <IconButton>
                    <EditIcon
                      onPress={() =>
                        navigation.navigate("Edit", { type: "list", item })
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
                        navigation.navigate("Delete", { item, type: "list" })
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
        </ListContainer>
        <FloatButton onPress={() => navigation.navigate("CreateList")}>
          <Icon type="font-awesome" name="plus" color="white" />
        </FloatButton>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
