function rot13(string) {
    const first13 = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
    const second13 =['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const myRegEx  = /^[a-z0-9]+$/i;
    const splitString = string.split('')
    const decoded =[]
    splitString.map(decodeLetter => {
const isValid = !(myRegEx.test(decodeLetter));
isValid && decoded.push(decodeLetter)
      first13.find((letter, index) => letter === decodeLetter && decoded.push(second13[index]))
      second13.find((letter, index) => letter === decodeLetter && decoded.push(first13[index]))



    })
  
      return decoded.join('')
  }
  
  rot13("SERR PBQR PNZC");