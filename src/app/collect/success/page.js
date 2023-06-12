'use client'

import Link from "next/link";

export default function CollectSuccessPage({params}) {

  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 h-full">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent h-screen flex items-center">
          <div className="mx-auto space-y-8">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
                Your response has been recorded.
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-2xl text-center mx-auto">
              <p className="text-lg text-gray-400 mb-3">
                Would you like to create a form to collect data?
              </p>
              <p className="text-md text-gray-200">
                Create an account to get started.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="/auth/login"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>


  )
}
