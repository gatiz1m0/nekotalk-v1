import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [imageUrl, setImageUrl] = useState('')

   useLayoutEffect(() => {
      navigation.setOptions({
         headerBackTitle: "Login",
      })
   }, [navigation])

   const register = () => {
      auth.createUserWithEmailAndPassword(email, password)
      .then( (authUser) => {
         authUser.user.updateProfile({
            displayName: name,
            photoUrl: imageUrl || "https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
         })
      }).catch(error => alert(error.message) )
   }

   return (
      <View style={styles.container}>
         <StatusBar style="light" />

         <Text h4 style={{marginBottom: 20}}>
            Create a NekoTalk account
         </Text>

         <View style={styles.inputContainer}>
            <Input 
               placeholder="Your name or username" 
               autoFocus required type='text' 
               value={name}
               onChangeText={(text) => setName(text)}   
            />
            <Input 
               placeholder="Email" 
               required type='text' 
               value={email}
               onChangeText={(text) => setEmail(text)}   
            />
            <Input 
               placeholder="Password" 
               required type='password' secureTextEntry
               value={password}
               onChangeText={(text) => setPassword(text)}   
            />
            <Input 
               placeholder="Profile picture (optional)" 
               required type='text'
               value={imageUrl}
               onChangeText={(text) => setImageUrl(text)}  
               onSubmitEditing={register} 
            />
         </View>
         <Button
            containerStyle={styles.button}
            raised onPress={register} title="Register"
         />
         <View style={{height: 50}} />
      </View>
   )
}

export default RegisterScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
   },
   button: {
      width: 200,
      marginTop: 10,
      marginBottom: 5,
   },
   inputContainer: {
      width: 300,
   }
})
