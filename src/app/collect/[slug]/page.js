'use client'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  clearCollect,
  fetchFormByIdAsync,
  selectCollect,
  upsertCollectFormAsync
} from "@/app/store/collect/collectFormsSlice";
import {useRouter} from "next/navigation";


export default function CollectPage({params}) {

  const slug = params['slug']
  const collect = useSelector(selectCollect);
  const dispatch = useDispatch();
  const router = useRouter()

  const [formData, setFormData] = useState({})

  const handleUpdate = (value, key) => {
    const data = {...formData};
    data[key] = value;
    setFormData(data);
  }

  useEffect(() => {
    if (collect.successUpsert) {
      router.push("/collect/success");
    }
  }, [collect.successUpsert])

  useEffect(() => {
    dispatch(clearCollect())
    dispatch(
      fetchFormByIdAsync(slug)
    )
  }, [slug])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = []
    for (let i = 0; i < collect.detailForm.questions.length; i++) {
      data.push(formData[i])
    }
    dispatch(upsertCollectFormAsync({data, id:slug}))
  }

  return (
    <div>
      {
        collect.detailForm && (
          <div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div class="mx-auto max-w-2xl">
                <div class="text-center">
                  <h2 class="text-xl text-gray-800 mb-3 font-bold sm:text-3xl">
                    {collect.detailForm.title}
                  </h2>
                  <p>{collect.detailForm.description}</p>
                </div>
                <div class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
                  <form onSubmit={handleSubmit}>
                    {
                      collect.detailForm.questions.map((question, index) => (
                        <div key={index} className="mb-4 sm:mb-8">
                          <label htmlFor={"question_"+index}
                                 className="block mb-2 text-sm font-medium">{question.title}</label>
                          {
                            question.type === 'short_text' && (
                              <input value={formData[index]} onChange={(e) => handleUpdate(e.target.value, index)} required type="text" id={"question_"+index} className="form-control"/>
                            )
                          }

                          {
                            question.type === 'long_text' && (
                              <textarea value={formData[index]} onChange={(e) => handleUpdate(e.target.value, index)} required id={"question_"+index} className="form-control"></textarea>
                            )
                          }

                          {
                            question.type === 'multiple_choice' && (
                              <div>
                                {
                                  question.options.map((option, option_index) => (
                                    <label className="block text-sm font-medium leading-6 text-gray-900" key={option_index}>
                                      <input onChange={(e) => handleUpdate(option, index)}
                                             checked={option === formData[index]}
                                             required id={"option_"+index} name={"option_"+index} type="radio" className="mr-2" />
                                      {option}
                                    </label>

                                  ))
                                }
                              </div>
                            )
                          }
                        </div>
                      ))
                    }

                    <div className="mt-6 grid">
                      <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}
