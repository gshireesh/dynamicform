"use client"
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {loginAsync, selectAuth} from "@/app/store/auth/authSlice";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(selectAuth)
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/dashboard")
    }
  }, [auth, router])


  const dispatch = useDispatch()
  const login = (e) => {
    e.preventDefault()
    console.log(e)
    dispatch(loginAsync(email, password))
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          {
            (auth.loginError !== "") && (
              <div className="mt-10 alert alert-danger">
                {auth.loginError}
              </div>
            )
          }
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/*<div className="text-sm">*/}
                {/*  <a href="@/app/auth/login/page#" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                {/*    Forgot password?*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={auth.status !== 'idle' || auth.isAuthenticated }
                className="btn btn-primary w-full"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
