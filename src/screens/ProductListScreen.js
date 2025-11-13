import React, { useEffect } from "react";
import { View, FlatList, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { selectCartItemsCount } from "../store/cartSlice";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((s) => s.products);
  const cartCount = useSelector(selectCartItemsCount);

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.cartBtn}>
          <Text style={styles.cartTxt}>Cart ({cartCount})</Text>
        </TouchableOpacity>
      </View>

      {loading && items.length === 0 ? (
        <View style={styles.center}><ActivityIndicator size="large" /><Text style={{ marginTop: 8 }}>Loading…</Text></View>
      ) : error ? (
        <View style={styles.center}><Text style={{ color: "#e74c3c" }}>Error: {error}</Text></View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(i) => String(i.id)}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, backgroundColor: "#fff" },
  h1: { fontSize: 22, fontWeight: "bold" },
  cartBtn: { backgroundColor: "#3498db", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 },
  cartTxt: { color: "#fff", fontWeight: "bold" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
});
