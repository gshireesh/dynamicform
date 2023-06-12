"use client"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFormByIdAsync, selectForms} from "@/app/store/forms/formsSlice";
import {selectAuth} from "@/app/store/auth/authSlice";
import {clearResponses, fetchResponsesAsync, selectResponses} from "@/app/store/responses/responsesSlice";
import {getFrontendUrl} from "@/app/utils";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function Responses({params}) {

  const searchParams = useSearchParams()

  const slug = searchParams.get('slug')

  const auth = useSelector(selectAuth)
  const forms = useSelector(selectForms);
  const responses = useSelector(selectResponses);
  const dispatch = useDispatch();

  const url = getFrontendUrl();
  useEffect(() => {
    return () => {
      dispatch(clearResponses());
    }
  }, [])
  useEffect(() => {
    if (!auth.loading) {
      dispatch(
        fetchFormByIdAsync({
          username: auth.userDetails['id'],
          id: slug
        })
      )

      dispatch(
        fetchResponsesAsync({
          username: auth.userDetails['id'],
          id: slug
        })
      )
    }
  }, [auth, slug])


  return (
    <div className="flex flex-col h-full">
      <div className="p-4 shadow-md z-10 flex">
        <h1 className="text-xl line-clamp-1 flex-1">{forms.detailForm?.title}</h1>
        <h1 className="text-xl line-clamp-1">{forms.detailForm?.total} responses</h1>
      </div>
      <div className="overflow-y-auto overflow-x-hidden p-5">

        <div>
          <p className="px-4">Share this url to collect responses</p>
          <p className="bg-indigo-900 p-4 text-white rounded-md my-4">
            <Link href={"/collect/?slug="+slug}>{url}collect/?slug={slug}</Link>
          </p>
        </div>

        <table className="table border">
          <thead>
          <tr>
            {
              forms.detailForm?.questions.map((question, index) => (
                <th key={index}>
                  <div className="line-clamp-1">{question.title}</div>
                </th>
              ))
            }
          </tr>
          </thead>
          <tbody>
          {
            responses.data.map((data, response_index) => (
              <tr key={response_index}>
                {data.data.map((val, index) => (
                  <td key={index}>{val}</td>
                ))}
              </tr>
            ))
          }

          </tbody>

        </table>
      </div>
    </div>
)
}
