import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAllProducts} from "../api/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try { return await fetchAllProducts(); } catch { return []; }
});

const slice = createSlice({
  name: "products",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: b => {
    b.addCase(fetchProducts.pending, s => { s.loading = true; s.error = null; });
    b.addCase(fetchProducts.fulfilled, (s,a) => { s.loading = false; s.items = a.payload; });
    b.addCase(fetchProducts.rejected, (s,a) => { s.loading = false; s.error = a.error?.message || "fail"; });
  }
});
export default slice.reducer;
