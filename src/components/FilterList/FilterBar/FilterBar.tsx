import React, { SetStateAction } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import FilterItem from "./FilterItem/FilterItem";

interface Props {
    hasSocket: boolean,
    hasWifi: boolean,
    hasNoLimitedTime: boolean,
    setHasSocket: React.Dispatch<SetStateAction<boolean>>,
    setHasWifi: React.Dispatch<SetStateAction<boolean>>,
    setHasNoLimitedTime: React.Dispatch<SetStateAction<boolean>>
}

export default function FilterBar(props: Props): React.JSX.Element {
    const { hasSocket, hasWifi, hasNoLimitedTime, setHasSocket, setHasWifi, setHasNoLimitedTime } = props

    return (
        <View style={styles.background}>
            <FilterItem checked={hasSocket} title='有插座' onPress={(hasSocket: boolean) => {setHasSocket(!hasSocket)}} />
            <FilterItem checked={hasWifi} title='有wifi' onPress={(hasWifi: boolean) => {setHasWifi(!hasWifi)}} />
            <FilterItem checked={hasNoLimitedTime} title='不限時' onPress={(hasNoLimitedTime: boolean) => {setHasNoLimitedTime(!hasNoLimitedTime)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        height: 40,
    }
})