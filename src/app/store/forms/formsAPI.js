import {getBackendUrl} from "@/app/utils";

export async function fetchForms(username) {
  const response = await fetch(getBackendUrl() + 'users/'+username+'/forms', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  })
  if (response.status !== 200) {
    throw Error("unable to fetch forms!");
  }
  return await response.json()
}

export async function fetchFormById(username, id) {
  const response = await fetch(getBackendUrl() + 'users/'+username+'/forms/'+id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  })
  if (response.status !== 200) {
    throw Error("unable to fetch form!");
  }
  return await response.json()
}

export async function upsertForm(data, username) {
  const response = await fetch(getBackendUrl() + 'users/'+username+'/forms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify(data),
  })
  if (response.status !== 200) {
    throw Error("unable to upsert form!");
  }
  return await response.json()
}
