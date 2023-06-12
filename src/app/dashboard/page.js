"use client"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {fetchFormsAsync, selectForms} from "@/app/store/forms/formsSlice";
import {selectAuth} from "@/app/store/auth/authSlice";
import Link from "next/link";

export default function Home() {

  const forms = useSelector(selectForms)
  const auth = useSelector(selectAuth)
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!auth.loading) {
      dispatch(fetchFormsAsync(auth.userDetails['id']))
    }
  }, [auth])

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 shadow-md z-10">
        <h1 className="text-xl">Forms</h1>
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <div role="list" className="divide-y divide-gray-200">
          {
            (forms.data.length === 0 && forms.status === 'idle') && (
              <div
                className="min-h-[15rem] py-20 flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                  <svg className="max-w-[10\rem]" viewBox="0 0 375 428" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M254.509 253.872L226.509 226.872" className="stroke-gray-400"
                          stroke="currentColor" strokeWidth="7" stroke-linecap="round"/>
                    <path
                      d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                      className="stroke-gray-400" stroke="currentColor" strokeWidth="7"
                      stroke-linecap="round"/>
                    <rect x="270.524" y="221.872" width="137.404" height="73.2425" rx="36.6212"
                          transform="rotate(40.8596 270.524 221.872)" className="fill-gray-400"
                          fill="currentColor"/>
                    <ellipse cx="133.109" cy="404.372" rx="121.5" ry="23.5" className="fill-gray-400"
                             fill="currentColor"/>
                    <path d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                          className="stroke-gray-400" stroke="currentColor" strokeWidth="7"
                          stroke-linecap="round"/>
                    <ellipse cx="96.6084" cy="116.872" rx="9" ry="12" className="fill-gray-400"
                             fill="currentColor"/>
                    <ellipse cx="172.608" cy="117.872" rx="9" ry="12" className="fill-gray-400"
                             fill="currentColor"/>
                    <path
                      d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                      className="fill-gray-400" fill="currentColor"/>
                  </svg>
                  <p className="mt-5 text-sm text-gray-500">
                    No forms yet. <Link href="/dashboard/forms/" className="text-indigo-600 ">Create a new from</Link> now.
                  </p>
                </div>
              </div>
            )
          }
          { forms.data?.map((form) => (
            <div key={form.id} className="flex justify-between gap-x-6 hover:bg-indigo-50 cursor-pointer">
              <div  className="flex gap-x-4 flex-1">
                <Link className="flex-grow p-5" href={"/dashboard/responses?slug="+form.id}>
                  <p className="text-sm font-semibold line-clamp-1 leading-6 text-gray-900">{form.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">{form.description}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-amber-700">{form.total} responses received</p>
                </Link>
                <Link href={"/dashboard/forms/edit?slug="+form.id} className="items-center flex p-5 text-indigo-500">
                  Edit
                </Link>
              </div>
              {/*<div className="hidden sm:flex sm:flex-col sm:items-end">*/}
              {/*  <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>*/}
              {/*  <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h*/}
              {/*    ago</time></p>*/}
              {/*</div>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
)
}
