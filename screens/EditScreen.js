import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectList, selectToken } from "../slices/navSlice";
import {
  ButtonText,
  ButtonTextDefault,
  CenteredContainer,
  CreateInput,
  CreateListContainer,
  CreateText,
  DefaultButton,
  GroupButton,
  PrimaryButton,
} from "../styles/styles";
import axios from "axios";
import { Formik } from "formik";

const EditScreen = ({ route, navigation }) => {
  const baseUrl = "https://taskmanager001.herokuapp.com/lists/";
  const [title, setTitle] = useState("");
  //   const [list, setList] = useState({});
  const [task, setTask] = useState({});
  const token = useSelector(selectToken);
  const list = useSelector(selectList);
  const headers = {
    headers: {
      "x-access-token": token.token,
    },
  };

  let data = route.params;
  console.log(data);
  return (
    <CenteredContainer>
      <CreateListContainer>
        {data.type === "list" ? (
          <Formik
            initialValues={{ title: data.item.title }}
            onSubmit={(values) => {
              if (values.title != "") {
                axios
                  .patch(
                    baseUrl + data.item._id,
                    { title: values.title },
                    headers
                  )
                  .then((list) => {
                    navigation.navigate("Dashboard");
                  });
              }
            }}
          >
            {(props) => (
              <>
                <CreateText>Edit list {data.item.title}</CreateText>
                <CreateInput
                  placeholder={"Editing " + data.item.title}
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                />
                <GroupButton>
                  <DefaultButton
                    onPress={() => navigation.navigate("Dashboard")}
                  >
                    <ButtonTextDefault>Cancel</ButtonTextDefault>
                  </DefaultButton>
                  <PrimaryButton onPress={props.handleSubmit}>
                    <ButtonText>Edit</ButtonText>
                  </PrimaryButton>
                </GroupButton>
              </>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{ title: data.item.title }}
            onSubmit={(values) => {
              setTitle(values.title);
              if (values.title != "") {
                //   console.log({ title });
                axios
                  .patch(
                    baseUrl + list.item._id + "/tasks/" + data.item._id,
                    { title: values.title },
                    headers
                  )
                  .then((task) => {
                    console.log(task.data);
                    navigation.navigate("Task");
                  });
              }
            }}
          >
            {(props) => (
              <>
                <CreateText>Edit task</CreateText>
                <CreateInput
                  placeholder="Editing Task"
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                />
                <GroupButton>
                  <DefaultButton onPress={() => navigation.navigate("Task")}>
                    <ButtonTextDefault>Cancel</ButtonTextDefault>
                  </DefaultButton>
                  <PrimaryButton onPress={props.handleSubmit}>
                    <ButtonText>Edit</ButtonText>
                  </PrimaryButton>
                </GroupButton>
              </>
            )}
          </Formik>
        )}
      </CreateListContainer>
    </CenteredContainer>
  );
};

export default EditScreen;
