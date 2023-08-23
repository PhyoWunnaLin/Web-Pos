import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Services/profileSlice'
import mediaSlice from './Services/mediaSlice'
import { authApi } from './API/authApi'
import authSlice from './Services/authSlice'
import { userApi } from './API/userApi'
import { adminApi } from './API/adminApi'
import { mediaApi } from './API/mediaApi'
import { inventoryApi } from './API/inventoryApi'
import { saleApi } from './API/saleApi'
import productSlice from './Services/productSlice'
import sidebarSlice from './Services/sidebarSlice'
import userSlice from './Services/userSlice'
import saleSlice from './Services/saleSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer,
    [saleApi.reducerPath]: saleApi.reducer,
    profileSlice : profileSlice,
    mediaSlice : mediaSlice,
    authSlice : authSlice,
    productSlice : productSlice,
    sidebarSlice : sidebarSlice,
    userSlice : userSlice,
    saleSlice : saleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, adminApi.middleware, mediaApi.middleware, inventoryApi.middleware, saleApi.middleware),
})