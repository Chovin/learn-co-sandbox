function find(array, criteriaFn) {
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
 
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    } else if (current !== null && typeof current === 'object') {
      Object.entries(current).forEach(
        ([key, value]) => next.push(value)
      )
    }
 
    current = next.shift()
  }
 
  return null
}