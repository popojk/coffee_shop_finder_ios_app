import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';

import { colors } from "../../../../utils/colors";

interface Props {
    checked: boolean,
    title: string,
    onPress: any
}

export default function FilterItem(props: Props): React.JSX.Element {
    const {checked, title, onPress} = props
    const handleCheckboxPress = () => {
        onPress(checked)
      }
    return (
        <View style={styles.checkBoxArea}>
          <CheckBox 
            value={checked}
            disabled={false}
            onValueChange={handleCheckboxPress}
            boxType="square"
            tintColor={colors.logo}
            onFillColor={colors.logo}
            onTintColor={colors.background}
            onCheckColor="white"
            style={styles.checkBox}
            />
          <Text style={styles.checkBoxText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  checkBoxArea: {
    marginTop: 9,
    marginLeft: 10,
    flexDirection: 'row'
  },
  checkBox: {
    width: 20,
    height: 20
  },
  checkBoxText: {
    marginLeft: 2,
    marginTop: 2,
    color: colors.logo
  }
  })