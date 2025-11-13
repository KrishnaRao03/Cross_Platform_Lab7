import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, clearCart } from "../store/cartSlice";
import CartItem from "../components/CartItem";

export default function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const checkout = () =>
    Alert.alert("Checkout", `Your total is $${total}. Proceed?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Checkout", onPress: () => Alert.alert("Success", "Order placed!") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Cart</Text>
      {items.length === 0 ? (
        <Text style={{ padding: 16 }}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(i) => String(i.id)}
            renderItem={({ item }) => <CartItem item={item} />}
            contentContainerStyle={{ padding: 16 }}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${total}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity style={[styles.btn, { backgroundColor: "#e74c3c" }]} onPress={() => dispatch(clearCart())}>
                <Text style={styles.btnTxt}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: "#27ae60" }]} onPress={checkout}>
                <Text style={styles.btnTxt}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  h1: { fontSize: 20, fontWeight: "bold", padding: 16, backgroundColor: "#fff" },
  footer: { backgroundColor: "#fff", padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  total: { fontSize: 18, fontWeight: "bold" },
  btn: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8 },
  btnTxt: { color: "#fff", fontWeight: "bold" },
});
