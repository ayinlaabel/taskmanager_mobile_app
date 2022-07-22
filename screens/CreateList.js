import { View, Text, Platform } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@rneui/themed';
import {
  ButtonText,
  ButtonTextDefault,
  CenteredContainer,
  CreateInput,
  CreateInputContainer,
  CreateInputIcon,
  CreateListContainer,
  CreateText,
  DefaultButton,
  GroupButton,
  PrimaryButton,
} from '../styles/styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { selectToken, setList } from '../slices/navSlice';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateList = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState('');
  const [mode, setMode] = useState('date');
  const baseUrl = 'https://taskmanager001.herokuapp.com/lists/';
  const token = useSelector(selectToken);
  const headers = {
    headers: {
      'x-access-token': token.token,
    },
  };

  const getDate = (event, selectedDate) => {
    const dateSet = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    let conDate = new Date(dateSet);
    const isDate = dateSet.getDate() + '/' + dateSet.getMonth() + '/' + dateSet.getFullYear();
    setDate(dateSet);
    setMode('time');
    // console.log(isDate);
    // console.log(Platform.OS === 'ios');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selectedTime) => {
    const timeSet = selectedTime || date;

    let conTime = new Date(timeSet);
    setShow(false);
    setReminder(conTime.getTime());
    // console.log(conTime.getTime());
    // console.log(new Date(conTime.getTime()).toString());
    // console.log(Platform.OS === 'ios');
  };

  const dispatch = useDispatch();

  return (
    <View>
      <CenteredContainer>
        <CreateListContainer>
          <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, { resetForm }) => {
              if (values.title != '' && reminder != '') {
                // console.log(reminder);
                axios.post(baseUrl, { title: values.title, reminder }, headers).then((list) => {
                  dispatch(setList(null));
                  dispatch(
                    setList({
                      item: list.data,
                    }),
                  );
                  navigation.navigate('CreateTask');
                  resetForm({ values: '' , setReminder:''});
                });
              } else {
                console.log('some field is empty');
              }
            }}
          >
            {(props) => (
              <>
                <CreateText>Create a new list</CreateText>
                <CreateInputContainer>
                  <CreateInput
                    placeholder="Create a new list"
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                  />
                  <CreateInputIcon onPress={() => showMode('date')}>
                    <Icon type="ionicon" name="alarm" size={30} />
                  </CreateInputIcon>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={getDate}
                    />
                  )}

                  {show && mode == 'time' && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </CreateInputContainer>
                <GroupButton>
                  <DefaultButton onPress={() => navigation.navigate('Dashboard')}>
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
