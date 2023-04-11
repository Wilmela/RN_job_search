import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        style={styles.btnImg(dimension)}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
