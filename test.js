function reverseWords(s) {
  const words = []
  const s1 = s.trim()
  const len = s1.length
  let w = ''
  let ans = ''
  for (let i = 0; i < len; i++) {
    let c = s1[i]
    if (c !== ' ') {
      w += c
    } else {
      if (w !== ' ' && w) {
        words.push(w)
      }
      w = ''
    }
  }
  if (w) {
    words.push(w)
  }

  console.log(words)

  let j = words.length - 1

  while (j >= 0) {
    ans += words[j]

    if (j !== 0) {
      ans += ' '
    }

    j--
  }

  return ans
}

console.log(reverseWords('a good   example'))
