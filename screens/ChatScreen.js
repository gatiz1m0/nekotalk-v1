import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View,  TouchableOpacity,
   SafeAreaView, KeyboardAvoidingView, TextInput, ScrollView,
   TouchableWithoutFeedback } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { Keyboard } from 'react-native'
import * as firebase from 'firebase'

import { db, auth } from '../firebase'

const ChatScreen = ({navigation, route}) => {
   const [input, setInput] = useState("")

   useLayoutEffect( () => {
      navigation.setOptions({
         title: "NekoChat",
         headerBackTitleVisible: false,
         headerTitleAlign: "left",
         headerTitle: () => (
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <Avatar rounded 
                  source={{uri: "https://f0.pngfuel.com/png/339/67/science-technology-engineering-and-mathematics-logo-pi-math-png-clip-art.png"}}
               />
               <Text
                  style={{
                  marginLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#fafafb",
                  fontWeight: "700",
               }}
               >{route.params.chatName}</Text>
            </View>
         ),
         headerLeft: () => (
            <TouchableOpacity
               style={{marginLeft: 10}}
               onPress={navigation.goBack}
            >
               <AntDesign name="arrowleft" size={24} color="#fafafb" />
            </TouchableOpacity>
         ),
         headerRight: () => (
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 80,
                  marginRight: 20,
               }}
            >
               <TouchableOpacity>
                  <FontAwesome name="video-camera" size={24} color="#fafafb" />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Ionicons name="call" size={24} color="#fafafb" />  
               </TouchableOpacity>
            </View>
         )
      })
   }, [navigation])

   const sendMessage = () => {
      Keyboard.dismiss()

      db.collection('nekochats').doc(route.params.id).collection('nekomessages').add({

      })
   }

   return (
      <SafeAreaView
         style={{flex: 1, backgroundColor: "white"}}
      >
         <StatusBar style="light" />
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding": "height"}
            style={styles.container}
            keyboardVerticalOffset={90}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <>
                  <ScrollView>

                  </ScrollView>
                  <View style={styles.footer}>
                     <TextInput value={input} onChangeText={(text) => setInput(text)}
                        placeholder="NekoMessage" style={styles.textInput} />
                     <TouchableOpacity onPress={sendMessage}activeOpacity={0.5}>
                        <Ionicons name="send" size={24} color="#1f72e1" />
                     </TouchableOpacity>
                  </View>
               </>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}

export default ChatScreen

const styles = StyleSheet.create({
   container: {
      flex: 1, /** This makes it stick to the bottom */
   },
   footer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 15,
   },
   textInput: {
      bottom: 0,
      height: 40,
      flex: 1,
      marginRight: 15,
      backgroundColor: "#ececec",
      padding: 10,
      color: "grey",
      borderRadius: 10,
   },
})
