import React from 'react';
import type { SetStateAction } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../utils/colors';

interface Props {
  keyWord: string,
  setKeyWord: React.Dispatch<SetStateAction<string>>
}

export default function SearchBar(props: Props): React.JSX.Element {
  const { keyWord, setKeyWord } = props
  return (
    <View style={styles.inputBar}>
      <TextInput
        placeholder='輸入你想查詢的咖啡廳關鍵字吧!'
        style={styles.input}
        value={keyWord}
        onChangeText={setKeyWord}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  inputBar: {
    marginTop: 55,
    backgroundColor: colors.background, 
    height: 40,
    padding: 10, 
    marginHorizontal: 4,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center'
  },
  input: {
      fontSize: 18
  },
});