export function addClass(el, className) {
    if (!hasClass(el, className)) {
        el.className = el.className + ' ' + className
    }
}

export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
export function getData(el, name, value) {
    let key = `data-${name}`
    if (value) {
        return el.setAttribute(key, value)
    } else {
        return el.getAttribute(key)
    }
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
    let transform = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    }

    for (let key in transform) {
        if (elementStyle[transform[key]] !== undefined) {
            return key
        }
    }
    return false
})()

export function prefixStyle(style) {
    if (vendor === false) {
        return false
    }
    if (vendor === 'standard') {
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}