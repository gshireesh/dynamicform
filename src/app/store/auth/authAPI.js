import {getBackendUrl} from "@/app/utils";

export async function fetchLogin(email, password) {
  const response = await fetch(getBackendUrl() + 'login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  if (response.status !== 200) {
    const data = await response.json()
    throw Error(data.error);
  }
  return await response.json()
}

export async function fetchWhoAmI() {
  const response = await fetch(getBackendUrl() + 'whoami/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  })
  if (response.status !== 200) {
    const data = await response.json()
    throw Error(data.error);
  }
  return await response.json()
}

export async function signUp(data) {
  const response = await fetch(getBackendUrl() + 'signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.status !== 200) {
    const data = await response.json()
    throw Error(data.error);
  }
  return await response.json()
}
