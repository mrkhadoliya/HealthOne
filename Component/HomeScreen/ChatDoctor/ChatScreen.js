import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ChattingList from './ChattingList';
import ChattingInput from './ChattingInput'; 

const ChatScreen = ({ navigation, route }) => {
	const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};
  return (
    <> 
      <ScrollView style={styles.scrollContainer}>
        <ChattingList onSwipeToReply={swipeToReply} /> 
      </ScrollView>
      <ChattingInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username}/> 
    </>
  )
}

export default ChatScreen;
const styles = StyleSheet.create({
  scrollContainer: {
      flex: 1, 
      paddingVertical: 15,
      backgroundColor: "#181A20", 
  },
})