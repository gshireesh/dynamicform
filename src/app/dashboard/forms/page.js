"use client"
import {PlusIcon, TrashIcon} from '@heroicons/react/24/solid'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "@/app/store/auth/authSlice";
import {selectForms, upsertFormAsync} from "@/app/store/forms/formsSlice";

export default function FormPage(props) {

  const defaultOption = {title: '', type:'short_text'}
  const auth = useSelector(selectAuth);
  const forms = useSelector(selectForms);
  const [title, setTitle] = useState("")
  const [id, setId] = useState("")
  const [description, setDescription] = useState("")
  const [questions, setQuestions] = useState([{...defaultOption}])

  const dispatch = useDispatch()

  useEffect(()=> {
    if (props['data']) {
      setTitle(props['data']['title'])
      setDescription(props['data']['description'])
      setId(props['data']['id'])
      setQuestions(props['data']['questions'])
    }
  },[])

  const formData = {
    title,description, questions
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = auth.userDetails['id'];
    const data = {...formData}
    if (id) {
      data['id'] = id
    }
    dispatch(upsertFormAsync({data:data, username}));
  }

  const handleChange = (e, index, key) => {
    questions[index][key] = e.target.value;
    setQuestions([...questions]);
  }

  const handleOptionChange = (e, index, optionIndex) => {
    questions[index].options[optionIndex] = e.target.value;
    setQuestions([...questions]);
  }

  const addQuestion = () => {
    setQuestions([...questions, {...defaultOption}]);
  }

  const addOption = (index) => {
    questions[index].options.push('');
    setQuestions([...questions]);
  }

  const deleteOption = (index, optionIndex) => {
    questions[index].options = questions[index].options.filter((o, i) => i !== optionIndex)
    setQuestions([...questions]);
  }

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((o, i) => index !== i))
  }

  const typeChanged = (e, index) => {
    if (e.target.value === 'multiple_choice') {
      questions[index].options = ['']
    } else {
      delete questions[index].options;
    }
    questions[index].type = e.target.value;
    setQuestions([...questions]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 border-b px-10 pt-10">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Create your dynamic form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be used to create the form.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                      autoComplete="title"
                      className="form-control"
                      placeholder="Give a title to the form"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Write a few sentences describing the form"
                  className="form-control"
                  value={description}
                />
                </div>
              </div>

            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Questions</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Add questions as per requirement, you cannot modify questions after responses get started.</p>


            {questions.map((value, index) => (
              <div key={index} className="mt-10 relative overflow-hidden grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 rounded-xl border border-dashed p-4 pt-8">

                {
                  questions.length !== 1 && (
                    <button type="button" onClick={() =>deleteQuestion(index)}
                            className="bg-red-500 text-white p-2 rounded-bl-xl text-sm absolute right-0">remove</button>
                  )
                }

                <div className="sm:col-span-5">
                  <label htmlFor={"question_title_" + index} className="block text-sm font-medium leading-6 text-gray-900">
                    Describe Question
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      required
                      id={"question_title_" + index}
                      value={value['title']}
                      onChange={(e)=> handleChange(e, index, 'title')}
                      autoComplete="title"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor={"question_type_" + index} className="block text-sm font-medium leading-6 text-gray-900">
                    Type
                  </label>
                  <div className="mt-2">
                    <select
                      id={"question_type_" + index}
                      name="type"
                      autoComplete="type"
                      value={value['type']}
                      onChange={(e) => typeChanged(e, index)}
                      className="form-control"
                    >
                      <option value="short_text">short text</option>
                      <option value="long_text">paragraph</option>
                      <option value="multiple_choice">multiple choice</option>
                    </select>
                  </div>
                </div>

                {
                  value?.options?.map((optionValue, optionIndex) => (
                    <div key={optionIndex} className="sm:col-span-3">
                      <label htmlFor={"question_option_" + index+"_"+optionIndex} className="block text-sm font-medium leading-6 text-gray-900">
                        Option
                      </label>
                      <div className="mt-2 flex flex-row space-x-4">
                        <input
                          type="text"
                          name="option"
                          id={"question_option_" + index+"_"+optionIndex}
                          autoComplete="title"
                          value={optionValue}
                          onChange={(e) => handleOptionChange(e, index, optionIndex)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        { (optionIndex !== 0 || value.options.length !== 1) && (
                          <div className="whitespace-nowrap">
                            <button
                              onClick={() =>deleteOption(index, optionIndex)}
                              type="button"
                              className="btn btn-danger text-sm"
                            >
                              <TrashIcon className="w-4" />
                            </button>
                          </div>
                        )}

                        {
                          value?.options?.length === optionIndex+1 && (
                            <div className="whitespace-nowrap">
                              <button
                                onClick={() =>addOption(index)}
                                type="button"
                                className="btn btn-primary text-sm"
                              >
                                <PlusIcon className="w-4" />
                              </button>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  ))
                }



              </div>
            ))}

            <div className="mt-10">
              <button onClick={addQuestion} className="btn btn-dark text-sm" type="button">
                Add question
              </button>
            </div>
          </div>

        </div>

        <div className="my-6 pr-10 flex items-center justify-end gap-x-6">
          <button type="submit" disabled={forms.status !== 'idle'} className="btn btn-primary">
            {id ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  )
}
