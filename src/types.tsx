import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: undefined
    ShopPage: { id: string }
}

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, "Main">

export type ShopPageScreenProps = NativeStackScreenProps<RootStackParamList, "ShopPage", 'MyStack'>