module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length;) {
    let a = bracketsConfig[i].join('')
    if (str.includes(a)) {
        str = str.replace(a, "")
        i = 0 
    } else {
        i = i + 1
    } 
}
    if (str.length == 0) {
        return true
    } else {
        return false
  
    }
}
