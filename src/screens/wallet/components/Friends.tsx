import { View, Text, FlatList , StyleSheet} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import Checkbox from 'expo-checkbox'
import { theme } from '../../../components/forms/Theme'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
const data=[

    {id:1,
    name:' Lionel Messi',
    userName:'@goat'
    },
    {id:2,
    name:' Buhari bello',
    userName:'@cow'
    },
    {id:3,
    name:' Peter Obi',
    userName:'@peter'
    },
    {id:4,
    name:' Asiwaju Tinubu',
    userName:'@shakingDaddy'
    },
]
export default function Friends() {
    const [isChecked, setChecked] = React.useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={{marginTop:30}}>
      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return(
        <View style={{marginTop:30, display:'flex'}}>
        <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} />
          <View style={{alignSelf:'flex-end', marginRight:30, marginTop:-30}}><Checkbox style={styles.checkbox}
       value={isChecked} onValueChange={setChecked}/></View>
          <View style={{marginLeft:50, marginTop:-43}}>
            <Text style={{fontFamily:'satoshi-Bold'}}>{item.name}</Text>
          </View>
          <View style={{marginLeft:50, marginTop:3}}>
            <Text style={{fontFamily:'satoshi-Bold', color:theme.colors.grey}} >{item.userName}</Text>
          </View>
        </View>

        )
    }}
      />
    </View>
  )
}

const styles=StyleSheet.create({
      checkbox: {
        margin: 8,
      },
    
})