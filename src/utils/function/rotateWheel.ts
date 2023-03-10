export const rotateWheel = (elem: number, baseRotate: number) => {
  const arr: number[] = []
  const rotate = 360 / elem

  for (let i = 0; i < elem; i++) {
    if (i === 0) {
      arr.push(baseRotate)
    } else {
      arr.push(arr[i - 1] + rotate)
    }
  }

  return arr
}
