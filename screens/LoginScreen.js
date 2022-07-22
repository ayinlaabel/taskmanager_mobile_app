import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
} from '../styles/styles';
import { registerIndieID } from 'native-notify';
import axios from 'axios';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { setUser, setToken } from '../slices/navSlice';

const login = (values) => {
  const baseUrl = 'https://taskmanager001.herokuapp.com/users/';
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(values);

  // if (email != "" && password != "") {
  //   axios
  //     .post(baseUrl + "login", { email, password })
  //     .then((user) => {
  //       console.log({ user: user.data, email, password });
  //       if (user.data.token) {
  //         dispatch(
  //           setUser({
  //             user: user.data.user,
  //           })
  //         );
  //         dispatch(
  //           setToken({
  //             token: user.data.token,
  //           })
  //         );
  //         navigation.navigate("Dashboard");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
};

const registerNotification = async ({ user }) => {
  // Native Notify Indie Push Registration Code
  await registerIndieID(`${user._id}`, 3253, 'JwGxE0G7D1o9ovFB6lufdT');
  // End of Native Notify Code
};

const LoginScreen = ({ navigation }) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'apiKey',
  };
  const baseUrl = 'https://taskmanager001.herokuapp.com/users/';
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <>
        <Container>
          <LogoContainer>
            <FrontLogo source={require('./../images/logo_2.png')} />
            <LogoTitle>Task Manager</LogoTitle>
          </LogoContainer>
          <LoginContainer>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                if (values.email != '' && values.password != '') {
                  axios
                    .post(
                      baseUrl + 'login',
                      {
                        email: values.email,
                        password: values.password,
                      },
                      headers,
                    )
                    .then((user) => {
                      console.log(user.data);
                      if (user.data && user.data.status === 'FAILED') {
                        navigation.navigate('Message', { item: user.data });
                      } else {
                        if (user.data.token) {
                          dispatch(
                            setUser({
                              user: user.data.user,
                            }),
                          );
                          dispatch(
                            setToken({
                              token: user.data.token,
                            }),
                          );
                          registerNotification({ user: user.data.user });
                          navigation.navigate('Dashboard');
                        }
                      }
                    })
                    .catch((err) => console.log(err));
                }
              }}
            >
              {(props) => (
                <>
                  <InputContainer>
                    <InputLabel>Email</InputLabel>
                    <Input
                      placeholder="johndoe@example.com"
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <Input
                      placeholder="password"
                      secureTextEntry={true}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                    />
                  </InputContainer>
                  <LoginButton onPress={props.handleSubmit}>
                    <BtnText>Login</BtnText>
                  </LoginButton>
                </>
              )}
            </Formik>
            <BreakLineContainer>
              <BreakLine />
              <BreakLineText>Register</BreakLineText>
              <BreakLine />
            </BreakLineContainer>
            <AccountContainer>
              <DefaultText>Don't have Account?</DefaultText>
              <Link onPress={() => navigation.navigate('Signup')}>
                <LinkText>Sign Up</LinkText>
              </Link>
            </AccountContainer>
          </LoginContainer>
        </Container>
      </>
    </SafeAreaView>
  );
};

export default LoginScreen;
