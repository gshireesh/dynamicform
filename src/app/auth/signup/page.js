"use client"

import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth, signupAsync} from "@/app/store/auth/authSlice";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Signup() {

  const auth = useSelector(selectAuth)
  const router = useRouter();
  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/dashboard")
    }
  }, [auth, router])

  const [form, setForm] = useState({})
  const [error, setError] = useState("")

  const dispatch = useDispatch()

  const handleChange = (e, key) => {
    form[key] = e.target.value;
    setForm({...form});
  }

  const signup = (e) => {
    e.preventDefault();
    setError("");
    if (form['password'] !== form['confirm_password']) {
      return setError("passwords don't match");
    }
    dispatch(signupAsync(form))
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
            Create your account
          </h2>
          {
            (error !== "" || auth.signUpError !== "") && (
              <div className="mt-10 alert alert-danger">
                {error || auth.signUpError}
              </div>
            )
          }
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signup} method="POST">

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Enter your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form['name']}
                  onChange={(e) => handleChange(e, "name")}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


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
                  value={form['email']}
                  onChange={(e) => handleChange(e, "email")}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form['password']}
                  autoComplete="current-password"
                  required
                  onChange={(e) => handleChange(e, "password")}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  value={form['confirm_password']}
                  onChange={(e) => handleChange(e, "confirm_password")}
                  autoComplete="confirm_password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit" disabled={auth.status !== 'idle'}
                className="btn btn-primary w-full"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
