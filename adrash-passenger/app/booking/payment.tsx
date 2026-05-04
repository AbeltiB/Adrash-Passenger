import { router } from 'expo-router';import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function PaymentScreen(){return <View style={s.c}><Text style={s.t}>Booking: Payment</Text><Pressable style={s.b} onPress={()=>router.push('/booking/waiting')}><Text style={s.bt}>Mock Pay</Text></Pressable></View>}
const s=StyleSheet.create({c:{flex:1,backgroundColor:'#fff',padding:24,justifyContent:'center',gap:12},t:{fontSize:26,fontWeight:'700'},b:{backgroundColor:'#111',borderRadius:10,paddingVertical:12,alignItems:'center'},bt:{color:'#fff',fontWeight:'600'}})
