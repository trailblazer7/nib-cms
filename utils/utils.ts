export const startWith = (str: string, startStr: string): boolean => str.indexOf(startStr) === 0

export const addInitStyles = () => {
  const html = document.querySelector('html')
  html?.classList.add('h-full')
  html?.classList.add('bg-gray-50')
  document.querySelector('body')?.classList.add('h-full')
}

export const classNames = (...classes:any) => {
  return classes.filter(Boolean).join(' ')
}

