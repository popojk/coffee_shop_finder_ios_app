import React, { useState, useEffect, SetStateAction } from "react"
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FilterBar from "./FilterBar/FilterBar"
import { ListItem, Shop } from "./ListItem/LIstItem"
import { colors } from "../../utils/colors"
import { ShopPageScreenProps } from "../../types"

interface Props {
    hasSocket: boolean,
    hasWifi: boolean,
    hasNoLimitedTime: boolean,
    setHasSocket: React.Dispatch<SetStateAction<boolean>>,
    setHasWifi: React.Dispatch<SetStateAction<boolean>>,
    setHasNoLimitedTime: React.Dispatch<SetStateAction<boolean>>,
    isFetchError: boolean,
    shops: Shop[]
  }

export default function FilterList(props: Props): React.JSX.Element {
    const { hasSocket, hasWifi, hasNoLimitedTime, setHasSocket, setHasWifi, setHasNoLimitedTime, isFetchError,shops } = props
    const navigation = useNavigation()
    return (
        <View>
            <FilterBar 
                hasSocket={hasSocket}
                hasWifi={hasWifi}
                hasNoLimitedTime={hasNoLimitedTime}
                setHasSocket={setHasSocket}
                setHasWifi={setHasWifi}
                setHasNoLimitedTime={setHasNoLimitedTime}
            />
            <ScrollView>
                {   
                    isFetchError ?
                    <View>
                        <Text style={{fontSize: 18}}>沒有符合條件的咖啡廳喔😅</Text>
                    </View>
                    :
                    shops.map((shop, i)  => 
                        <TouchableOpacity id={shop.id} onPress={() => {navigation.navigate('ShopPage')}}>
                            <ListItem id={shop.id} rating={shop.rating} name={shop.name} address={shop.address} />
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

});
