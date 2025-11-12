import React, {useEffect} from "react";
import {View,FlatList,Text,SafeAreaView,StyleSheet,TouchableOpacity} from "react-native";
import {useDispatch,useSelector} from "react-redux";
import {fetchProducts} from "../store/productsSlice";
import {selectCartItemsCount} from "../store/cartSlice";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({navigation}){
  const d = useDispatch();
  const {items,loading} = useSelector(s=>s.products);
  const cartCount = useSelector(selectCartItemsCount);

  useEffect(()=>{ d(fetchProducts()); },[d]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Products</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
          <Text style={styles.link}>Cart ({cartCount})</Text>
        </TouchableOpacity>
      </View>
      {loading ? <Text style={{padding:16}}>Loading…</Text> :
        <FlatList data={items} keyExtractor={i=>String(i.id)} renderItem={({item})=><ProductCard product={item}/> } contentContainerStyle={{padding:16}}/>
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#f5f5f5"},
  header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:16,backgroundColor:"#fff"},
  h1:{fontSize:20,fontWeight:"bold"},
  link:{color:"#3498db",fontWeight:"bold"}
});
