import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../api/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try {
    return await fetchAllProducts();
  } catch (e) {
    // Fallback sample data (still shows images)
    return [
      { id:1, title:"Phone",   price:699.99, description:"A nice phone",  imageSrc:{uri:"https://picsum.photos/seed/phone/200"} },
      { id:2, title:"Laptop",  price:999.99, description:"A fast laptop", imageSrc:{uri:"https://picsum.photos/seed/laptop/200"} },
      { id:3, title:"Headset", price:199.99, description:"Great audio",   imageSrc:{uri:"https://picsum.photos/seed/headset/200"} }
    ];
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.error?.message || "Failed to load"; });
  },
});

export default productsSlice.reducer;
