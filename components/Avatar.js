import { View, Text } from 'react-native';
import React from 'react';

import { ProfileAvatar } from '../styles/styles';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Avatar = () => {
  const navigation = useNavigation();
  return (
    <ProfileAvatar onPress={() => navigation.navigate('Profile')}>
      <Icon type="font-awesome" name="user" size={20} color="#fff" />
    </ProfileAvatar>
  );
};

export default Avatar;
