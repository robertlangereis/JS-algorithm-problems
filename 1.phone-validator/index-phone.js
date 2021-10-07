function telephoneCheck(str) {
  const regex = /^(?!2\s?)((1\s)([1-9]){3}|(1\s?)\(([1-9]){3}\)|([1, 3-9]){3}|\(([1, 3-9]){3}\))\s?-?([1-9]){3}\s?-?([1-9]){3,4}\w+/g;
  
    console.log(str.match(regex))
      if (str.match(regex)){return true} else return false
    }
  
  telephoneCheck("(275)76227382");