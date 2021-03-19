import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar }  from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   useEffect( () => {
      const unsubscribe = auth.onAuthStateChanged( authUser => {
         if(authUser) {
            navigation.replace("Home")
         }
      });
      return unsubscribe;
   }, [])

   const signIn = () => {

   }

   return (
      <View style={styles.container}>
         <StatusBar style='light' />
         <Image
            source={{
               uri: "https://developer.blackberry.com/air/files/documentation/images/text_messages_icon.png",
            }}
            style={{ width: 100, height: 100, marginTop: 30 }}
         />
         <Text style={{marginTop: 10}}>NekoTalk beta</Text>
         <View style={styles.inputContainer}>
            <Input placeholder="Email" autoFocus required type="email"
               value={email} onChangeText={(text) => setEmail(text)}
            />
            <Input placeholder="Password" required secureTextEntry type="password" 
            value={password} onChangeText={(text) => setPassword(text)}
            />
         </View>
         <Button containerStyle={styles.button} onPress={signIn}title="Login" />
         <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register" />
         <View style={{ height: 10 }} /> 
      </View>
   )
} 

export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
   },
   inputContainer: {
      width: 300,
   },
   button: {
      width: 200,
      marginTop: 10,
      marginBottom: 10,
   },
})