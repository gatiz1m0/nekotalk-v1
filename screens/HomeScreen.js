import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import {Avatar} from 'react-native-elements'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'

import {auth, db} from "../firebase"

const HomeScreen = ({navigation}) => {
   const [nekochats, setChats] = useState([])

   const signOutUser = () => {
      auth.signOut().then( () => {
         navigation.replace("Login")
      })
   }

   useEffect( () => {
      const unsubscribe = db.collection('nekochats').onSnapshot(snapshot => (
         setChats(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
            }
         ))) )
      )
      return unsubscribe
   }, [])

   useLayoutEffect( () => {
      navigation.setOptions({
         title: "NekoTalk",
         headerStyle: {backgroundColor: "#1f72e1"},
         headerTitleStyle: {color: "#fafafb"},
         headerTintColor: {color: "#161616"},
         headerLeft: () => (
            <View style={{marginLeft: 20}}>
            <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                  <Avatar rounded source={{uri: auth?.currentUser?.photoURL || "https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"}}/>
               </TouchableOpacity>
            </View>
         ),
         headerRight: () => (
            <View style={{
               flexDirection: "row",
               justifyContent: "space-between",
               width: 80,
               marginRight: 20,
            }}>
               <TouchableOpacity activeOpacity={0.5}>
                  <AntDesign name="camerao" size={24} color="#fafafb" />
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.5}
                  onPress={() => navigation.navigate("AddChat")}>
                  <SimpleLineIcons name="pencil" size={24} color="#fafafb" />
               </TouchableOpacity>
            </View>
         )
      })
   }, [navigation])

   const enterChat = (id, chatName) => {
      navigation.navigate("Chat", {
         id,
         chatName,
      })
   }

   return (
      <SafeAreaView>
         <ScrollView style={styles.container}>
            {nekochats.map( ({id, data: {chatName}}) => (
               <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
            ))}
         </ScrollView>
      </SafeAreaView>
   )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
      height: '100%',
   }
})
