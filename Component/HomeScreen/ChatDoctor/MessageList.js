import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react' 
import Ionicons from 'react-native-vector-icons/Ionicons'


const messagelist = [
  {
    id:'1',
    userName:'Dr. Marcus Horizon',
    userImg:require('../../Assets/AppImage/doctor3.png'),
    messageTime:'4 mins ago',
    messageText:'I don,t have any fever, but headchace...',
    messageNumber:'20'
  },
  {
    id:'2',
    userName:'Dr. Alysa Hana',
    userImg:require('../../Assets/AppImage/doctor2.png'),
    messageTime:'10 mins ago',
    messageText:'Hello, How can i help you?',
    messageNumber:'1'
  },
  {
    id:'3',
    userName:'Dr. Maria Elena',
    userImg:require('../../Assets/AppImage/doctor1.png'),
    messageTime:'1 day`s ago',
    messageText:'Do you have fever?',
    messageNumber:'3'
  },{
    id:'4',
    userName:'Dr. Hitesh kumar',
    userImg:require('../../Assets/AppImage/doctor3.png'),
    messageTime:'4 mins ago',
    messageText:'I don,t have any fever, but headchace...',
    messageNumber:'20'
  },
  {
    id:'5',
    userName:'Dr. Sonu',
    userImg:require('../../Assets/AppImage/doctor2.png'),
    messageTime:'10 mins ago',
    messageText:'Hello, How can i help you?',
    messageNumber:'1'
  },
  {
    id:'6',
    userName:'Dr. Sunita',
    userImg:require('../../Assets/AppImage/doctor1.png'),
    messageTime:'10 mins ago',
    messageText:'Do you have fever?',
    messageNumber:'3'
  },{
    id:'7',
    userName:'Dr. Manpreet',
    userImg:require('../../Assets/AppImage/doctor3.png'),
    messageTime:'4 mins ago',
    messageText:'I don,t have any fever, but headchace...',
    messageNumber:'20'
  },
  {
    id:'8',
    userName:'Dr. JBL Sharma',
    userImg:require('../../Assets/AppImage/doctor2.png'),
    messageTime:'10 mins ago',
    messageText:'Hello, How can i help you?',
    messageNumber:'1'
  },
   
]

const MessageList = ({navigation}) => { 



  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView>
          <View style={{paddingBottom:20}}>

              <FlatList
                  data={messagelist}
                  keyExtractor={item=>item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity activeOpacity={0.7} style={{marginBottom:10}}
                      onPress={() => navigation.navigate('Chat', {userName: item.userName})}
                    >
                      <View style={styles.listMenus}>
                        <View style={styles.Rowusre}>
                          <View style={{position:'relative'}}>
                              <View style={styles.OnlinDot} />  
                              <Image source={item.userImg} style={styles.unseImages} />
                          </View>
                          <View>
                            <Text style={styles.userTitles}>{item.userName}</Text>
                            <Text style={styles.userssms}>{item.messageText}</Text>
                          </View>
                        </View> 
                        <View style={styles.messagetimes}>
                          <Text style={styles.timetitle}>{item.messageTime}</Text>
                          {item.RecviedMs}
                        </View>
                      </View>
                  </TouchableOpacity>
                  )}
              /> 
          </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default MessageList
const styles = StyleSheet.create({
  scrollContainer: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: "#181A20",
  },
  listMenus:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between'
  },
  Rowusre:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    width:'75%',
    overflow:'hidden'
  },
  unseImages:{
    width:60,
    height:60,
    resizeMode:'contain',
    backgroundColor:'#1F222A',
    borderRadius:100,
    borderWidth:2,
    borderColor:'#3A4255'
  },
  OnlinDot:{
    position:'absolute',
    backgroundColor:'#00EC9B',
    zIndex:2,
    width:10,
    height:10,
    borderRadius:100,
    right:0,
    top:10,
  },
  userTitles:{
    color:'#fff',
    fontSize:18,
  },
  userssms:{
    color:'#5F6678', 
  },
  messagetimes:{
    width:'20%',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  timetitle:{
    color:'#fff',
    fontSize:12
  },
  dotcontainer:{
    backgroundColor:'#00EC9B',
    width:25,
    height:25,
    borderRadius:100,
    color:'#fff',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    padding:2,
    textAlign:'center',
    fontSize:12,
    marginVertical:3, 
  },
  onesmspoint:{
    color:'#fff',
    fontSize:12
  },
})