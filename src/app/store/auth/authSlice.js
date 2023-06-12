import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchLogin, signUp, fetchWhoAmI} from './authAPI'

const initialState = {
  isAuthenticated: false,
  loading: true,
  userDetails: {},
  status: "idle",
  signUpError: "",
  loginError: ""
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (email, password) => {
    return await fetchLogin(email, password)
  }
)

export const fetchWhoAmIAsync = createAsyncThunk(
  'auth/whoami',
  async (email, password) => {
    return await fetchWhoAmI(email, password)
  }
)

export const signupAsync = createAsyncThunk(
  'auth/signup',
  async (data) => {
    return await signUp(data)
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      localStorage.clear();
      const data = {...initialState}
      data['loading'] = false;
      return data;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.loginError="";
        localStorage.clear();
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.isAuthenticated = true
        console.log(action)
        state.userDetails = action.payload
        localStorage.setItem('token', state.userDetails['token']);
      }).addCase(loginAsync.rejected, (state, action) => {
        state.status = 'idle'
        state.loginError=action.error.message
        localStorage.clear();
      })
      .addCase(fetchWhoAmIAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWhoAmIAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true
        state.userDetails = action.payload
      }).addCase(fetchWhoAmIAsync.rejected, (state, action) => {
        state.loading = false
        localStorage.clear();
      })
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading'
        state.signUpError = ""
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.isAuthenticated = true
        console.log(action)
        state.userDetails = action.payload
        localStorage.setItem('token', state.userDetails['token']);
      }).addCase(signupAsync.rejected, (state, action) => {
      state.status = 'idle'
      state.signUpError=action.error.message
    })
  },
})

export const { logout } = authSlice.actions

export const selectAuth = (state) => state.auth


export default authSlice.reducer
