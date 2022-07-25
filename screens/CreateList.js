import { View, Text, Platform, Switch } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@rneui/themed';
import { DatePickerModal } from 'react-native-paper-dates';
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
  ReminderContainer,
  ReminderSwitch,
} from '../styles/styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { selectToken, setList } from '../slices/navSlice';
import DateTimePicker from '@react-native-community/datetimepicker';
import { dateGetter, timeGetter } from '../components/formatDateTime';

const CreateList = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [isDate, setIsDate] = useState('');
  const [isTime, setIsTime] = useState('');
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [mode, setMode] = useState('date');
  const baseUrl = 'https://taskmanager001.herokuapp.com/lists/';
  const token = useSelector(selectToken);
  const headers = {
    headers: {
      'x-access-token': token.token,
    },
  };

  const toggleSwitch = () => {
    setReminder(!reminder);
    console.log(reminder);
  };

  const getDate = (event, selectedDate) => {
    const dateSet = selectedDate || date;
    const isDate = dateGetter(dateSet);
    setDate(dateSet);
    setIsDate(isDate);
    setMode('time');
    console.log(isDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const onChange = (event, selectedTime) => {
    const timeSet = selectedTime || date;

    const time = timeGetter(timeSet);
    setShow(false);
    setIsTime(time);
  };

  const dispatch = useDispatch();

  return (
    <View>
      <CenteredContainer>
        <CreateListContainer>
          <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, { resetForm }) => {
              console.log({ isDate, isTime });
              if (values.title != '' && reminder != '') {
                // console.log(reminder);
                axios
                  .post(baseUrl, { title: values.title, reminder, reminderDate: isDate, reminderTime: isTime }, headers)
                  .then((list) => {
                    dispatch(setList(null));
                    dispatch(
                      setList({
                        item: list.data,
                      }),
                    );
                    navigation.reset({
                      index: 1,
                      routes: [{ name: 'Dashboard' }, { name: 'CreateTask' }],
                    });
                    navigation.navigate('CreateTask');
                    resetForm({ values: '' });
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
                </CreateInputContainer>
                <ReminderContainer>
                  <ReminderSwitch>
                    <Text>Set Reminder</Text>
                    <Switch onValueChange={toggleSwitch} value={reminder} />
                  </ReminderSwitch>

                  {reminder ? (
                    <CreateInputIcon onPress={() => showMode('date')}>
                      <Icon type="ionicon" name="alarm" size={30} />
                    </CreateInputIcon>
                  ) : (
                    <></>
                  )}
                </ReminderContainer>
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

                {show && mode === 'time' && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
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
