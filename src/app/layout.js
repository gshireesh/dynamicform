"use client"

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import store from "@/app/store/store";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Provider store={store}>
      <body className={inter.className}>
      {children}
      <ToastContainer />
      </body>
    </Provider>
    </html>
  )
}
