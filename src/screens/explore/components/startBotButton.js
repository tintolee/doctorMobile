import React from 'react';
import { ActivityIndicator } from 'react-native';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const Button = ({
  text,
  onPress,
  type = 'filled',
  bordered = false,
  size = 'large',
  isLoading = false
}) => {
  const large = 327;
  const small = width / 2;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor = type === 'filled' ? 'black' : 'transparent';
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2';
  const btnBorderRadius = 56

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 14,
    width: btnSize,
    alignItems: 'center',
    padding: '4%',
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'satoshi'
    
  };

  const border = type === 'outlined' && {
    borderColor: '#e7e7e7',
    borderWidth: 2,
  };

  return (
    <View style={{marginTop: '12%', marginBottom: '5%'}}>
      <TouchableOpacity onPress={onPress} disabled = {isLoading}>
        <View style={[containerCommonStyle, border]}>
          {
            isLoading?
            <ActivityIndicator color='white' />
            :
            <Text style={[textCommonStyle]}> {text} </Text>
          }
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
