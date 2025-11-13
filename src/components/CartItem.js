import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CartItem({ item }) {
  const total = (item.price * item.quantity).toFixed(2);
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.sub}>${item.price} each</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.qty}>x{item.quantity}</Text>
        <Text style={styles.total}>${total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 8,
         flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontWeight: "bold" },
  sub: { color: "#666" },
  qty: { fontWeight: "600" },
  total: { fontWeight: "bold", color: "#27ae60" },
});
