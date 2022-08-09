import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';
import { TouchableOpacity , Image} from 'react-native';
function Apple(props) {
  return (
    <>
      <Image 
       source={require('../assets/images/google.png')}
       style={{width:159, height:56}}
      />
    </>
  );
}

export default Apple;
