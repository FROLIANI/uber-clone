import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 1,
    image: require('../assets/car ride.jpeg'),
    title: 'Get a ride',
    screen: 'MapScreen',
  },
  {
    id: 2,
    image: require('../assets/food bag.jpeg'),
    title: 'Get the food',
    screen: 'EatScreen',
  },

]

const NavOptions = () => {

  //For navigations
  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 `}>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'    
              size={24}
            />

          </View>
        </TouchableOpacity>
      )}
    />

  )
}

export default NavOptions

