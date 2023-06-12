'use client'
import FormPage from "@/app/dashboard/forms/page";
import {useEffect} from "react";
import {fetchFormByIdAsync, selectForms} from "@/app/store/forms/formsSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "@/app/store/auth/authSlice";
import {useSearchParams} from "next/navigation";


export default function EditFormPage({params}) {

  const searchParams = useSearchParams()

  const slug = searchParams.get('slug')
  const auth = useSelector(selectAuth);
  const forms = useSelector(selectForms);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.loading) {
      dispatch(
        fetchFormByIdAsync({
          username: auth.userDetails['id'],
          id: slug
        })
      )
    }
  }, [auth, slug])

  return (
    <div>
      {
        forms.detailForm && (
          <FormPage data={forms.detailForm}/>
        )
      }

    </div>
  )
}
