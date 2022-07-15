import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Input,
  FrontLogo,
  Container,
  Container50,
  Test,
  LoginContainer,
  LoginHeader,
  LogoContainer,
  LogoTitle,
  InputContainer,
  InputLabel,
  LoginButton,
  BtnText,
  BreakLineContainer,
  BreakLine,
  BreakLineText,
  DefaultText,
  LinkText,
  AccountContainer,
  Link,
} from "../styles/styles";
import axios from "axios";
import { Formik } from "formik";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "https://taskmanager001.herokuapp.com/users/";

  if (email != "" && password != "") {
    console.log("first");
  }

  return (
    <SafeAreaView>
      <>
        <Container>
          <LogoContainer>
            <FrontLogo source={require("./../images/logo_2.png")} />
            <LogoTitle>Task Manager</LogoTitle>
          </LogoContainer>
          <LoginContainer>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                setEmail(values.email);
                setPassword(values.password);
                axios
                  .post(baseUrl, { email, password })
                  .then((user) => {
                    if (user.token){
                        navigation.navigate('Dashboard')
                    }
                  })
                  .catch((err) => console.log(err));
              }}
            >
              {(props) => (
                <>
                  <InputContainer>
                    <InputLabel>Email</InputLabel>
                    <Input
                      placeholder="johndoe@example.com"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <Input
                      placeholder="password"
                      secureTextEntry={true}
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                    />
                  </InputContainer>
                  <LoginButton onPress={props.handleSubmit}>
                    <BtnText>Register</BtnText>
                  </LoginButton>
                </>
              )}
            </Formik>
            <BreakLineContainer>
              <BreakLine />
              <BreakLineText>Login</BreakLineText>
              <BreakLine />
            </BreakLineContainer>
            <AccountContainer>
              <DefaultText>Already have Account?</DefaultText>
              <Link onPress={() => navigation.navigate("Login")}>
                <LinkText>Login</LinkText>
              </Link>
            </AccountContainer>
          </LoginContainer>
        </Container>
      </>
    </SafeAreaView>
  );
};

export default SignupScreen;
