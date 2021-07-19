export const capitalizeString = (string) => {
  if (string !== 'indefinido' && string.length > 2) {
    return string[0].toUpperCase() + string.substring(1)
  }
  return ''
}


export const shortNameDepartment = (longNameDepartment) => {
  if (longNameDepartment && longNameDepartment.length > 2) {
    const segments = longNameDepartment.split(" ");

    return `Dep. ${segments.slice(2).join(" ")}`
  }
}

export const onlyNameImage = (url) => {
  if (url.length > 3) {
    const lastSegment = url.split('/').slice(-1);
    return lastSegment
  } else {
    return 'Cargue una imagen'
  }
}
