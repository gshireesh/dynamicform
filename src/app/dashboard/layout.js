"use client"

import {useDispatch, useSelector} from "react-redux";
import {fetchWhoAmIAsync, logout, selectAuth} from "@/app/store/auth/authSlice";
import {CogIcon, SwatchIcon, PlusCircleIcon} from "@heroicons/react/24/solid"
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function FormsLayout({ children }) {
  const dispatch = useDispatch()
  const triggerLogout = () => {
    dispatch(logout())
  }

  const auth = useSelector(selectAuth)
  const router = useRouter();

  useEffect(() => {
    if (auth.loading) {
      dispatch(fetchWhoAmIAsync());
    }
  }, [])

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.loading) {
      router.push("/auth/login")
    }
  }, [auth, router])

  return (
    <div className="flex flex-row">
      <aside
        className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-gray-900 border-gray-700">
        <h3 className="text-2xl text-white font-bold">DynamicForm+</h3>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs uppercase text-gray-400">dashboard</label>
              <Link
                className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="/dashboard/forms">
                <PlusCircleIcon className="h-5"/>

                <span className="mx-2 text-sm font-medium">Create Form</span>
              </Link>

              <Link
                className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="/dashboard">
                <SwatchIcon className="h-5"/>

                <span className="mx-2 text-sm font-medium">Forms</span>
              </Link>


            </div>
          </nav>
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs uppercase text-gray-400">account</label>

              <a
                className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#" onClick={triggerLogout}>
                <CogIcon className="h-5"/>
                <span className="mx-2 text-sm font-medium">Logout</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
      <div className="overflow-y-auto w-full h-screen">
        {children}
      </div>
    </div>
  )
}
