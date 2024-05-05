import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from 'react-native'
import { colors } from '../utils/colors'
import SearchBar from '../components/SearchBar'
import FilterList from '../components/FilterList/FilterList'
import APIService from '../services/APIService'
import { apiUrls } from '../utils/urls'
import { useNavigation } from '@react-navigation/native'
import type { MainScreenProps } from '../types'


export default function Main({ navigation }: MainScreenProps): React.JSX.Element {

    const [shops, setShops] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const [hasSocket, setHasSocket] = useState(false)
    const [hasWifi, setHasWifi] = useState(false)
    const [hasNoLimitedTime, setHasNoLimitedTime] = useState(false)
    const [isFetchError, setIsFetchError] = useState(false)

    useEffect(() => {
      let url = apiUrls.backendURL + '/shops/fuzzy'
      const apiService = new APIService(url)
      const params = {
        'keyWord': keyWord,
        'hasSocket': hasSocket,
        'hasWifi': hasWifi,
        'hasNoLimitedTime': hasNoLimitedTime,
        'page': 1,
        'page_size': 20
      }
      // make sure isFetchError equals false before fetching data
      setIsFetchError(false)
      const fetchData = async () => {
        try {
          const shops: any = await apiService.get(
            params
          )
          // update shops state
          setShops(shops)
        } catch (error: any) {
          if (error.message == 'Fetch data failed!') {
              setIsFetchError(true)
          }
        }
      }
      fetchData()
    }, [keyWord, hasSocket, hasWifi, hasNoLimitedTime])

    return (
        <View style={styles.background}>
          <View style={styles.navBar}>
            <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
          </View>
          <View style={styles.display}>
              <FilterList 
                  hasSocket={hasSocket}
                  hasWifi={hasWifi}
                  hasNoLimitedTime={hasNoLimitedTime}
                  setHasSocket={setHasSocket}
                  setHasWifi={setHasWifi}
                  setHasNoLimitedTime={setHasNoLimitedTime}
                  shops={shops}
                  isFetchError={isFetchError}
              />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flex:0.12,
        backgroundColor: colors.logo
      },
    display: {
      flex:0.88,
    },
    background: {
        flex: 1,
        backgroundColor: colors.white,
      },
  });
