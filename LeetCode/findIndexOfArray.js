/**
 * 找出args中两数之和为target的下标
 * @param {数组} args 
 * @param {目标值} target 
 */
function findIndexOfArray(args, target) {
  const sourceArgs = args.slice(0)
  args.sort((a, b) => {
    return a - b
  })
  let a, b
  for (let i = 0; i < args.length; i++) {
    const min = args[i];
    if (a && b) {
      break
    }
    for (let j = args.length - 1; j >= 0; j--) {
      const max = args[j];
      if (j > i) {
        if (min + max === target) {
          a = sourceArgs.indexOf(min)
          b = sourceArgs.indexOf(max)
          break
        }
      } else {
        break
      }
    }
  }
  return [a, b]
}

// export default findIndexOfArray
console.log(findIndexOfArray([3, 1, 6, 2, 8], 3))