import React from "react";
import {View,Text,FlatList,SafeAreaView,StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {selectCartItems,selectCartTotal} from "../store/cartSlice";
import CartItem from "../components/CartItem";

export default function CartScreen(){
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Cart</Text>
      {items.length===0 ? <Text style={{padding:16}}>Your cart is empty.</Text> :
        <>
          <FlatList data={items} keyExtractor={i=>String(i.id)} renderItem={({item})=><CartItem item={item}/> } contentContainerStyle={{padding:16}}/>
          <View style={styles.footer}><Text style={styles.total}>Total: ${total}</Text></View>
        </>
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#f5f5f5"},
  h1:{fontSize:20,fontWeight:"bold",padding:16,backgroundColor:"#fff"},
  footer:{padding:16,backgroundColor:"#fff"},
  total:{fontSize:18,fontWeight:"bold"}
});
