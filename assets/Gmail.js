import React from 'react';
import { TouchableOpacity , Image} from 'react-native';
import Svg, {Path, Circle, G} from 'react-native-svg';

function Gmail(props) {
  return (
    <>
      <Image 
       source={require('../assets/images/apple.png')}
       style={{width:159, height:56}}
      />
    </>
  );
}

export default Gmail;
