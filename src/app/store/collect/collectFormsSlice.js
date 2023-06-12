import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchFormById, upsertResponse} from './collectFormsAPI'
import { toast } from "react-toastify";


const initialState = {
  detailForm: undefined,
  successUpsert: false,
  status: "init",
  upsertError: "",
  fetchError: ""
}

export const fetchFormByIdAsync = createAsyncThunk(
  'collect/fetch_by_id',
  async (id) => {
    return await fetchFormById(id)
  }
)

export const upsertCollectFormAsync = createAsyncThunk(
  'collect/upsert',
  async ({data, id}) => {
    return await upsertResponse(data, id)
  }
)

export const collectFormsSlice = createSlice({
  name: 'collect',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clearCollect: (state) => {
      return initialState
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormByIdAsync.pending, (state) => {
          state.status = 'loading'
          state.fetchError = ""
          state.detailForm = undefined
        })
      .addCase(fetchFormByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.detailForm = action.payload
      }).addCase(fetchFormByIdAsync.rejected, (state, action) => {
        state.status = 'idle'
        state.fetchError=action.error.message
      })

      .addCase(upsertCollectFormAsync.pending, (state) => {
        state.status = 'loading'
        state.successUpsert = false
        state.upsertError = ""
      })
      .addCase(upsertCollectFormAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.successUpsert = true
        toast("success", { autoClose: 2000, type: 'success' })
      }).addCase(upsertCollectFormAsync.rejected, (state, action) => {
        state.status = 'idle'
        state.upsertError=action.error.message
      })
  },
})

export const { clearCollect } = collectFormsSlice.actions

export const selectCollect = (state) => state.collect


export default collectFormsSlice.reducer