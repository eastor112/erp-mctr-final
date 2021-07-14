export const capitalizeString = (string) => {
  if (string) {
    return string[0].toUpperCase() + string.substring(1)
  }
  return '*No especificado'
}


export const shortNameDepartment = (longNameDepartment) => {
  if (longNameDepartment && longNameDepartment.length > 2) {
    const segments = longNameDepartment.split(" ");

    return `Dep. ${segments.slice(2).join(" ")}`
  }
}