import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, IonIcons } from "@expo/vector-icons"

const ChatScreen = ({navigation, route}) => {
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
            <TouchableOpacity>
               <AntDesign />
            </TouchableOpacity>
         )
      })
   }, [navigation])

   return (
      <View>
         <Text>{route.params.chatName}</Text>
      </View>
   )
}

export default ChatScreen

const styles = StyleSheet.create({})
