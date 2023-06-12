import {configureStore} from '@reduxjs/toolkit'

import authReducer from './auth/authSlice'
import formsReducer from './forms/formsSlice'
import collectReducer from './collect/collectFormsSlice'
import responsesReducer from './responses/responsesSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      forms: formsReducer,
      collect: collectReducer,
      responses: responsesReducer
    },
  })
}

const store = makeStore()

export default store
