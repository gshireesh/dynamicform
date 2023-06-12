import {getBackendUrl} from "@/app/utils";

export async function fetchFormById(id) {
  const response = await fetch(getBackendUrl() + 'forms/'+id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status !== 200) {
    throw Error("unable to fetch form!");
  }
  return await response.json()
}

export async function upsertResponse(data, id) {
  const response = await fetch(getBackendUrl() + 'forms/'+id+'/response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  if (response.status !== 200) {
    throw Error("unable to create response!");
  }
  return await response.json()
}
