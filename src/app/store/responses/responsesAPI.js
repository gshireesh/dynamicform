import {getBackendUrl} from "@/app/utils";

export async function fetchResponses(username, id) {
  const response = await fetch(getBackendUrl() + 'users/'+username+'/forms/'+id+'/responses', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  })
  if (response.status !== 200) {
    throw Error("unable to fetch responses!");
  }
  return await response.json()
}
