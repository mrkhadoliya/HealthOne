import { View, Text, ScrollView } from 'react-native'
import React, {useState, useRef} from 'react'
import ChattingMessage from './ChattingMessage';
import Imagechat from '../../Assets/DateImage/credit-card.png'

const ChattingList = () => { 
    const [message, setMessage] = useState([
            {
                user:0,
                time:'04:39',
                content:'Hey',
                imagesUser:Imagechat,
            },
            {
                user:1,
                time:'04:40',
                content:"What's up", 
            },
            {
                user:1,
                time:'04:45',
                content:'How is Going?'
            },
            {
                user:0,
                time:'04:50',
                content:'things are going great', 
            }, 
            {
                user:0,
                time:'04:50',
                content:'Good :)', 
            }, 
            {
                user:1,
                time:'04:50',
                content:'Should we hang out tomorrow? i was thinking of going somewhere whichhas drinks' , 
            },
            {
                user:0,
                time:'04:50',
                content:'great', 
            },  
            {
                user:1,
                time:'04:50',
                content:'great', 
            }, 
    ]);
    const user  = useRef(0);
    const scrollView = useRef();
  return (
    <ScrollView
        ref={ref => scrollView.current = ref}
        onContentChange={() =>{
            scrollView.current.scrollToEnd({animated:true})
        }}
        style={{paddingBottom:90, flex:1}}
    >
        {message.map((message, index) =>(
            <ChattingMessage key={index} 
                time={message.time}
                isLeft={message.user !== user.current}
                message={message.content}
                image={message.imagesUser}      
            />
        ))}
    </ScrollView>
  )
}

export default ChattingList;