import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { colors } from "../../../utils/colors";

const windowWidth = Dimensions.get('window').width

export interface Shop {
    address: string,
    id: string,
    name: string,
    rating: number
}

interface Props {
    id: string,
    rating: number,
    name: string,
    address: string,
}

export function ListItem(props: Props): React.JSX.Element{
    const { id, rating, name, address } = props
    function handleName(name: string): string {
        if (name.length > windowWidth / 2) {
            return name.slice(0, Math.floor(windowWidth / 2)) + '...'
        }
        return name;
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View style={styles.shopName}>
                    <Text style={{ color: colors.logo, fontWeight: '600', fontSize: 20 }}>
                        {handleName(name)}
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Image 
                        style={styles.image}
                        source={require('../../../../static/pics/star-icon.webp')}
                    />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: colors.itemBorder
    },
    upperContainer: {
        height: 30,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'flex-end',
        padding: 1
        
    },
    bottomContainer: {
        height: 30,
        padding: 1
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 20,
        width: 50,
        backgroundColor: colors.rating,
        marginLeft: 15,
        borderRadius: 5
    },
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
        marginBottom: 4,
        marginLeft: -2
    },
    shopName: {
        width: windowWidth * 0.8
    },
    ratingText: {
        marginLeft: -3
    }
})