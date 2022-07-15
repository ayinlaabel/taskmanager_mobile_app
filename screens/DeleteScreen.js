import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import {
  Confirm,
  ConfirmText,
  DangerText,
  DeleteContainer,
  DeleteIconContainer,
  DeleteListContainer,
  DeleteMIcon,
  DeleteOption,
  DeleteText,
  DeleteTextContainer,
  DeleteTextSub,
  Ignore,
  IgnoreText,
} from "../styles/styles";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../slices/navSlice";

const handleDelete = (item, headers, type, navigation) => {
  const baseUrl = "https://taskmanager001.herokuapp.com/lists/";
  if (type === "list") {
    axios.delete(baseUrl + item._id, headers).then((remove) => {
      console.log(remove.data);
      navigation.navigate("Dashboard");
    });
  }

  if (type === "task") {
    axios
      .delete(baseUrl + item._listId + "/tasks/" + item._id, headers)
      .then((remove) => {
        console.log(remove.data);
        navigation.navigate("Task");
      });
  }
};

const DeleteScreen = ({ route, navigation }) => {
  const token = useSelector(selectToken);
  const headers = {
    headers: {
      "x-access-token": token.token,
    },
  };
  console.log(route.params);
  const { item, type } = route.params;
  return (
    <DeleteContainer>
      <DeleteListContainer>
        <DeleteMIcon>
          <DeleteIconContainer>
            <Icon type="font-awesome" name="trash" size={60} color="red" />
          </DeleteIconContainer>
        </DeleteMIcon>
        <DeleteTextContainer>
          <DeleteText>Are you sure?</DeleteText>
          <DeleteTextSub>
            Are you sure you want to delete{" "}
            <DangerText>{item.title}</DangerText>?
          </DeleteTextSub>
        </DeleteTextContainer>
        <DeleteOption>
          <Ignore
            onPress={() => {
              if (type === "list") {
                navigation.navigate("Dashboard");
              }
              if (type === "task") {
                navigation.navigate("Task");
              }
            }}
          >
            <IgnoreText>Ignore</IgnoreText>
          </Ignore>
          <Confirm
            onPress={() => handleDelete(item, headers, type, navigation)}
          >
            <ConfirmText>Confirm</ConfirmText>
          </Confirm>
        </DeleteOption>
      </DeleteListContainer>
    </DeleteContainer>
  );
};

export default DeleteScreen;
