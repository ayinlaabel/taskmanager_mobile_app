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
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { selectToken, setList } from "../slices/navSlice";

const CreateList = ({ route, navigation }) => {
  const baseUrl = "https://taskmanager001.herokuapp.com/lists/";
  const token = useSelector(selectToken);
  const headers = {
    headers: {
      "x-access-token": token.token,
    },
  };

  const dispatch = useDispatch();

  return (
    <View>
      <CenteredContainer>
        <CreateListContainer>
          <Formik
            initialValues={{ title: "" }}
            onSubmit={(values, { resetForm }) => {
              if (values.title != "") {
                axios
                  .post(baseUrl, { title: values.title }, headers)
                  .then((list) => {
                    dispatch(setList(null));
                    dispatch(
                      setList({
                        item: list.data,
                      })
                    );
                    navigation.navigate("CreateTask");
                    resetForm({ values: "" });
                  });
              }
            }}
          >
            {(props) => (
              <>
                <CreateText>Create a new list</CreateText>
                <CreateInput
                  placeholder="Create a new list"
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

export default CreateList;
