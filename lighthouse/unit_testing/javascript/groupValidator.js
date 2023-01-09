exports.isGroupValid = function(array) {
  if (array.length >= 6) {
    return false
  } else if (array.length <= 1) {
    return false
  } else {
    return true
  }
}