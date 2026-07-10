const NAMESPACE = "my_data"

function nskey(key){
  return `${NAMESPACE}:${key}`
}

export function loadFromStorage(key, fallback){
  try {
    const data = localStorage.getItem(nskey(key))
    if (!data) return fallback
    return JSON.parse(data)
  } catch (error) {
    console.log(error);
    return fallback
  }
}

export function saveToStorage(key, value){
  try {
    localStorage.setItem(nskey(key), JSON.stringify(value))
  } catch (error) {
    console.log(error);
  }
}

export function clearStorage(key){
  localStorage.removeItem(nskey(key));
}