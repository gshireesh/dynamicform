

export function getBackendUrl() {
  if (process.env.NODE_ENV === "development") {
    return 'http://localhost/sgadidesi/project/'
  } else {
    return 'http://training.pacificescience.com/sgadidesi/project/'
  }
}

export function getFrontendUrl() {
  if (process.env.NODE_ENV === "development") {
    return 'http://localhost:3000/sgadidesi/dynamicform/'
  } else {
    return 'http://training.pacificescience.com/sgadidesi/dynamicform/'
  }
}
