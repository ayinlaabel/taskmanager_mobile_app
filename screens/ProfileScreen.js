import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  EmptyContainer,
  ProfileAvatarContainer,
  ProfileContainer,
  ProfilePage,
  ProfilePictureContainer,
  BackgroundImage,
  ProfilePlaceHolder,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  VersionContainer,
  VersionText,
  LogOutButtonContainer,
  LogOutButton,
  LogOutText,
} from '../styles/styles';
import { selectUser } from '../slices/navSlice';

const ProfileScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  return (
    <View>
      <ProfilePage>
        <TouchableOpacity
          onPress={() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Dashboard' }],
            // });
            navigation.goBack();
          }}
        >
          <EmptyContainer />
        </TouchableOpacity>
        <ProfileContainer>
          <ProfilePictureContainer>
            <BackgroundImage source={require('../images/sunset.jpg')} resizeMode="cover" />
            <ProfileAvatarContainer>
              <ProfilePlaceHolder source={require('../images/portriat.jpg')} resizeMode="cover" />
            </ProfileAvatarContainer>
          </ProfilePictureContainer>
          <ProfileInfo>
            <ProfileName>John Doe</ProfileName>
            <ProfileEmail>{user.user.email}</ProfileEmail>
          </ProfileInfo>
          <LogOutButtonContainer>
            <LogOutButton onPress={() => navigation.reset({
              index: 0,
              routes: [{name: 'Login'}]
            })}>
              <LogOutText>Log Out</LogOutText>
            </LogOutButton>
          </LogOutButtonContainer>
          <VersionContainer>
            <VersionText>Version 1.0.0</VersionText>
          </VersionContainer>
        </ProfileContainer>
      </ProfilePage>
    </View>
  );
};

export default ProfileScreen;
