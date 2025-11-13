import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Image
        source={product.imageSrc}
        defaultSource={require("../../assets/placeholder.png")}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.desc} numberOfLines={2}>{product.description}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>${product.price}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => dispatch(addToCart(product))}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10,
          shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 2 },
  image: { width: 90, height: 90, borderRadius: 8, backgroundColor: "#eee" },
  info: { flex: 1, marginLeft: 12 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  desc: { color: "#666", fontSize: 13, marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 18, fontWeight: "bold", color: "#2ecc71" },
  btn: { backgroundColor: "#3498db", paddingVertical: 6, paddingHorizontal: 14, borderRadius: 6 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
