import { router } from 'expo-router';import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function SeatsScreen(){return <View style={s.c}><Text style={s.t}>Booking: Seats</Text><Pressable style={s.b} onPress={()=>router.push('/booking/passengers')}><Text style={s.bt}>Next</Text></Pressable></View>}
const s=StyleSheet.create({c:{flex:1,backgroundColor:'#fff',padding:24,justifyContent:'center',gap:12},t:{fontSize:26,fontWeight:'700'},b:{backgroundColor:'#111',borderRadius:10,paddingVertical:12,alignItems:'center'},bt:{color:'#fff',fontWeight:'600'}})
