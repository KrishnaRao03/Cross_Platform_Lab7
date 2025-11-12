import {createSlice, createSelector} from "@reduxjs/toolkit";
const slice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (s,a)=>{ const e=s.items.find(i=>i.id===a.payload.id); e? e.quantity++ : s.items.push({...a.payload, quantity:1}); },
    removeFromCart: (s,a)=>{ s.items = s.items.filter(i=>i.id!==a.payload); },
    updateQuantity: (s,a)=>{ const {id,quantity}=a.payload; const it=s.items.find(i=>i.id===id); if(!it) return; quantity<=0? s.items=s.items.filter(i=>i.id!==id) : it.quantity=quantity; },
    clearCart: s=>{ s.items=[]; }
  }
});
export const {addToCart, removeFromCart, updateQuantity, clearCart} = slice.actions;
export const selectCartItems = s => s.cart.items;
export const selectCartItemsCount = createSelector([selectCartItems], items => items.reduce((t,i)=>t+i.quantity,0));
export const selectCartTotal = createSelector([selectCartItems], items => items.reduce((t,i)=>t+i.price*i.quantity,0).toFixed(2));
export default slice.reducer;
