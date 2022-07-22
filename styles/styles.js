import styled from 'styled-components';
import { TextInput, Text, Image, View, TouchableOpacity } from 'react-native';

import DropShadow from 'react-native-drop-shadow';

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Container50 = styled.View`
  width: 100%;
  height: 50%;
  margin-bottom: 50px;
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
`;

export const LogoTitle = styled.Text`
  font-size: 38px;
  font-weight: 900;
`;

export const LoginContainer = styled.View`
  margin: 30px;
`;

export const LoginHeader = styled.Text`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #444;
  border-radius: 4px;
  padding-left: 10px;
`;

export const FrontLogo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const LoginButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: blue;
  color: white;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const BreakLineContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const BreakLine = styled.View`
  width: 40%;
  height: 1px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: black;
`;

export const BreakLineText = styled.Text`
  font-size: 10px;
`;

export const AccountContainer = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content center;
`;

export const DefaultText = styled.Text`
  font-size: 16px;
  padding: 5px 10px;
`;

export const Link = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 4px;
`;

export const LinkText = styled.Text`
  font-size: 16px;
  padding: 5px 10px;
  color: #fff;
`;

export const ListContainer = styled.View`
  padding: 0px 20px;
`;

export const ListHeader = styled.Text`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const ContainerList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid black;
`;

export const List = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  box-shadow: 10px 5px 5px black;
  border-radius: 6px;
`;

export const ListText = styled.Text`
  font-size: 16px;
`;

export const FloatButton = styled.TouchableOpacity`
  display: flex;
  align-items: center
  justify-content: center;
  position: absolute;
  right: 32px;
  bottom: 32px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: black;
`;

export const CenteredContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #2e2e2e;
`;

export const CreateListContainer = styled.View`
  display: flex;
  justify-content: space-around;

  width: 90%;
  height: 200px;
  padding: 0 20px;
  border-radius: 6px
  background-color: white;

`;

export const CreateText = styled.Text`
  font-size: 28px;
`;

export const CreateInputContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CreateInput = styled.TextInput`
  border: 1px solid #2e2e2e;
  width: 250px;
  height: 50px;
  padding-left: 10px;
  border-radius: 6px;
  font-size: 18px;
`;

export const CreateInputIcon = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px
  height: 50px
`;

export const GroupButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
`;

export const DefaultButton = styled.TouchableOpacity`
  border-radius: 4px;
  color: #fff;
  border: 1px solid #2e2e2e;
  padding: 10px 20px;
  margin-right: 10px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  border-radius: 4px;
  color: #fff;
  background-color: #2e2e2e;
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const ButtonTextDefault = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
`;

export const IconButton = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DeleteIcon = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 30px;
  width: 30px;
  padding: 5px;
  border-radius: 4px;
  font-size: 10px;
`;

export const EditIcon = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2e2e;
  height: 30px;
  width: 30px;
  margin-right: 5px
  padding: 5px;
  border-radius: 4px;
  font-size: 10px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: #b5b5b5;
`;

export const DeleteContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 5, 0.8);
`;

export const DeleteListContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  height: 250px;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
`;

export const DeleteText = styled.Text`
  font-size: 28px;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const DeleteTextSub = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #5e5e5e;
`;

export const DeleteMIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteIconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border: 1px solid red;
  border-radius: 50px;
`;

export const DeleteTextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
`;

export const DeleteOption = styled.View`
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Confirm = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: red;
`;

export const ConfirmText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Ignore = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: #2e2e2e;
`;

export const IgnoreText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const DangerText = styled.Text`
  color: red;
`;

export const TaskContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #2e2e2e;
  padding: 10px 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: white;
`;

export const TaskListContainer = styled.View`
  padding: 0 20px;
`;

// Profile Nav Button

export const ProfileAvatar = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 500px;
  border: 1px solid white;
`;

// Message

export const MessageContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const EmptyContainer = styled.View`
  width: 100%;
  height: 50%;
`;

export const MessageAlertContainer = styled.View`
  display: flex;
  justify-content: space-around;
  height: 15%;
  margin: 0 10px;
  margin-top: 55%;
  padding: 15px;
  background: #fff;
  border-radius: 6px;
  ${(props) => (props.status === 'FAILED' ? `background-color: #f8d7da; border: 1px solid #f5c6cb;` : `color: black`)}
`;

export const AlertMIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const AlertIconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 1px solid #c82333;
  border-radius: 50px;
`;

export const MessageContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AlertHeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  ${(props) => (props.status === 'FAILED' ? `color: #721c24;` : `color: black`)}
`;

export const AlertBody = styled.Text`
  font-size: 18px;
  ${(props) => (props.status === 'FAILED' ? `color: #721c24;` : `color: black`)}
`;

export const CloseIconContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 20px;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background-color: #e2e3e5;
`;

// Profile Page
export const ProfilePage = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ProfileContainer = styled.View`
  width: 100%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  height: 50%;
  background-color: #fff;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 120px;
  width: 100%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const ProfilePictureContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const ProfileAvatarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  border: 10px solid white;
  background-color: white;
`;

export const ProfilePlaceHolder = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 100px;
`;

export const ProfileInfo = styled.View`
  margin: 20px;
`;

export const ProfileName = styled.Text`
  font-size: 38px;
  text-transform: uppercase;
  text-align: center;
`;

export const ProfileEmail = styled.Text`
  font-size: 16px;
  text-align: center;
`;

// Version

export const VersionContainer = styled.View`
  position: absolute;
  bottom: 10px;
  height: 20px;
  width: 100%;
`;

export const VersionText = styled.Text`
  text-align: center;
  color: #e2e3e5;
`;

// Logout Button
export const LogOutButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 50px;
`;
export const LogOutButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: #c82333;
`;

export const LogOutText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
