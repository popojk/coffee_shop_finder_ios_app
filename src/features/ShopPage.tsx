import React, {useEffect} from "react";
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";
import { ShopPageScreenProps } from "../types";

export default function ShopPage({ route, navigation }: ShopPageScreenProps): React.JSX.Element {
    const { id } = route.params

    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Button onPress={() => navigation.goBack()} title="返回" />
          </TouchableOpacity>
        ),
        });
      }, [navigation]);

    return (
        <View>
            <Text>The shop id is {id}</Text>
        </View>
    )
}