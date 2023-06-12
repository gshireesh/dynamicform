"use client"

import {useDispatch, useSelector} from "react-redux";
import {fetchWhoAmIAsync, selectAuth} from "@/app/store/auth/authSlice";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function AuthLayout({ children }) {
  const auth = useSelector(selectAuth)
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.loading) {
      dispatch(fetchWhoAmIAsync());
    }
  }, [])

  useEffect(() => {
    if (auth.isAuthenticated && !auth.loading) {
      router.push("/dashboard")
    }
  }, [auth, router])

  return (
    <div>
      {children}
    </div>
  )
}
