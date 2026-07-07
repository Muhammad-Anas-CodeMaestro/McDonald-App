const NAMESPACE = 'mcdonald_app';

function nskey(key) {
  return `${NAMESPACE}:${key}`
}

export default function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(nskey(key))
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch (error) {
    return fallback
  }
}

export default function saveToStorage(key, value) {
  try {
    localStorage.setItem(nskey(key), JSON.stringify(value))
  } catch (error) {
    console.log(error); 
  }
}