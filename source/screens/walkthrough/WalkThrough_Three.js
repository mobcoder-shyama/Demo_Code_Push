import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Colors from '../../constant/Colors';
import { SvgXml } from 'react-native-svg';
import AuthButton from '../components/AuthButton';

const Walkthrough_Three=(props)=>{

     return(
        <View style={styles.container}>

          

            <View style={styles.bottomView}>
                  <Text>Walkthrough 3</Text>
            </View>




       </View>
    )
   
  

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background.dark_black,
        alignItems:'center',
        justifyContent:'center'

    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 50, //Here is the trick
        flexDirection:'row'
      },
      textStyle: {
        color: '#FFFFFF',
        fontWeight:'400',
        fontSize: 13,
        fontFamily:'Gilroy'
      },
})

export default Walkthrough_Three;