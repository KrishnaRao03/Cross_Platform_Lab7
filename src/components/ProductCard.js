import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/cartSlice";

export default function ProductCard({product}){
  const d = useDispatch();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.title}</Text>
      <Text>${product.price}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>d(addToCart(product))}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{backgroundColor:"#fff",padding:12,borderRadius:8,marginBottom:8},
  title:{fontWeight:"bold",marginBottom:4},
  btn:{backgroundColor:"#3498db",paddingVertical:6,paddingHorizontal:12,borderRadius:6,alignSelf:"flex-start"},
  btnText:{color:"#fff",fontWeight:"bold"}
});
