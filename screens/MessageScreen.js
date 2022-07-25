import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {
  AlertBody,
  AlertHeaderTitle,
  CloseIconContainer,
  AlertIconContainer,
  AlertMIcon,
  EmptyContainer,
  MessageAlertContainer,
  MessageContainer,
  MessageContentContainer,
} from '../styles/styles';
import { Icon } from '@rneui/themed';

const MessageScreen = ({ route, message, navigation }) => {
  const item = route.params.item;
  console.log(item);
  setTimeout(() => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
    navigation.goBack();
  }, 5000);
  return (
    <SafeAreaView>
      <MessageContainer>
        <EmptyContainer />
        <MessageAlertContainer status={item.status}>
          <CloseIconContainer
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}
          >
            <Icon type="font-awesome" name="times" size={15} color="#383d41" />
          </CloseIconContainer>
          <MessageContentContainer>
            <View>
              <AlertMIcon>
                <AlertIconContainer>
                  <Icon type="font-awesome" name="exclamation" size={40} color="red" />
                </AlertIconContainer>
              </AlertMIcon>
            </View>
            <View>
              <AlertHeaderTitle status={item.status}>{item.status}</AlertHeaderTitle>
              <AlertBody status={item.status}>{item.message}</AlertBody>
            </View>
          </MessageContentContainer>
        </MessageAlertContainer>
      </MessageContainer>
    </SafeAreaView>
  );
};

export default MessageScreen;
