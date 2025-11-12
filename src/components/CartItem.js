import React from "react";
import {View,Text,StyleSheet} from "react-native";
export default function CartItem({item}){
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>x{item.quantity} • ${item.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row:{backgroundColor:"#fff",padding:12,borderRadius:8,marginBottom:8,flexDirection:"row",justifyContent:"space-between"},
  title:{fontWeight:"bold"}
});
