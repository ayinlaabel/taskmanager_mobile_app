import { View, Text } from "react-native";
import React from "react";

import { ProfileAvatar } from "../styles/styles";
import { Icon } from "@rneui/themed";

const Avatar = () => {
  return (
    <ProfileAvatar>
      <Icon type="font-awesome" name="user" size={20} color="#fff" />
    </ProfileAvatar>
  );
};

export default Avatar;
