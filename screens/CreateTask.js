import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { selectList, selectToken, setList } from "../slices/navSlice";

const CreateTask = ({ route, navigation }) => {
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

  //   let d = route.params;
  //   let list = d;

  console.log(list);

  return (
    <View>
      <CenteredContainer>
        <CreateListContainer>
          <Formik
            initialValues={{ title: "" }}
            onSubmit={(values, { resetForm }) => {
              if (values.title != "") {
                axios
                  .post(
                    baseUrl + list.item._id + "/tasks",
                    { title: values.title },
                    headers
                  )
                  .then((task) => {
                    console.log(task.data);
                    navigation.reset({
                      index: 1,
                      routes:[{name: 'Dashboard'}, {name: 'Task', item: list}]
                    })
                    // navigation.navigate("Task", { item: list });
                    resetForm({ values: "" });
                  });
              }
            }}
          >
            {(props) => (
              <>
                <CreateText>Create a new task</CreateText>
                <CreateInput
                  placeholder="Create a new task"
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                />
                <GroupButton>
                  <DefaultButton onPress={() => navigation.navigate("Task")}>
                    <ButtonTextDefault>Cancel</ButtonTextDefault>
                  </DefaultButton>
                  <PrimaryButton onPress={props.handleSubmit}>
                    <ButtonText>Create</ButtonText>
                  </PrimaryButton>
                </GroupButton>
              </>
            )}
          </Formik>
        </CreateListContainer>
      </CenteredContainer>
    </View>
  );
};

export default CreateTask;
