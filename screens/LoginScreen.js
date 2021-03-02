import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar }  from 'expo-status-bar';

const LoginScreen = () => {
   return (
      <View>
         <StatusBar style='light' />
         <Image
            source={{
               uri: "https://developer.blackberry.com/air/files/documentation/images/text_messages_icon.png",
            }}
            style={{ width: 200, height: 200 }}
         />
         <Text>NekoTalkv1</Text>
         <View style={styles.inputContainer}>
            <Input placeholder="Email" autoFocus type="Email" />
            <Input placeholder="Email" autoFocus type="Email" />
         </View>
      </View>
   )
}

export default LoginScreen

const styles = StyleSheet.create({
   inputContainer: {},
})