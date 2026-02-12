import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useState, useEffect, useRef, memo} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'; 
import DocumentPicker from 'react-native-document-picker';
import EmojiPicker from './emojis/EmojiPicker';
import {useKeyboard} from '@react-native-community/hooks';

const ChattingInput = ({reply, closeReply, isLeft, username}) => {
  const [message, setMessage] = useState('');

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const height = useSharedValue(70);

  const [image, setImage] = useState('');

  useEffect(() => {
    if (showEmojiPicker) {
      height.value = withTiming(400);
    } else {
      height.value = reply ? withSpring(130) : withSpring(70);
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    if (reply) {
      height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
    } else {
      height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
    }
  }, [reply]);

  const heightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const SelectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.audio,
          DocumentPicker.types.images,
        ],
      });
      setImage(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };
  return (
    <Animated.View style={[styles.InputContainer, heightAnimatedStyle]}>
      {reply ? (
        <View style={styles.replyContainer}>
          <TouchableOpacity onPress={closeReply} style={styles.closeReply}>
            <MaterialCommunityIcons name="close" size={20} color="#F5F8FF" />
          </TouchableOpacity>
          <Text style={styles.title}>
            Response to {isLeft ? username : 'Me'}
          </Text>
          <Text style={styles.reply}>{reply}</Text>
        </View>
      ) : null}
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TouchableOpacity
            style={styles.emoticonButton}
            onPress={() => setShowEmojiPicker(value => !value)}>
            <MaterialCommunityIcons
              name={showEmojiPicker ? 'close' : 'emoticon-happy-outline'}
              size={20}
              color="#F5F8FF"
            />
          </TouchableOpacity>

          <TextInput
            multiline
            placeholder="Type Something....."
            style={styles.input}
            onChangeText={text => setMessage(text)}
            placeholderTextColor="#697083"
          />

          <TouchableOpacity
            style={styles.rightIconButtonStyle}
            onPress={() => SelectDoc()}>
            <AntDesign name="paperclip" size={20} color="#F5F8FF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Entypo name="camera" size={20} color="#F5F8FF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.SendButton}>
          <MaterialCommunityIcons
            name={message ? 'send-circle' : 'microphone'}
            size={30}
            color="#00EC9B"
          />
        </TouchableOpacity>
      </View>
      <EmojiPicker />
    </Animated.View>
  );
};

export default ChattingInput;

const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: 'center',
    backgroundColor: '#35383F',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
    right: 0,
  },
  replyContainer: {
      paddingHorizontal: 10,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "flex-start",
  },
  title: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  closeReply: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  reply: {
    marginTop: 5,
  },
  innerContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputAndMicrophone: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151617',
    flex: 3,
    marginRight: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  input: {
    paddingLeft: 20,
    color: '#ddd',
    flex: 3,
    alignSelf: 'center',
    height: 45,
    alignSelf: 'center',
  },
  rightIconButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#3A4255',
  },
  emoticonButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  SendButton: {
    backgroundColor: '#1F222A',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
