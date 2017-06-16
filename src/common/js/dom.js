export function addClass(el, className) {
  if (!hasClass(el, className)) {
    el.className = el.className + ' ' + className
  }
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
