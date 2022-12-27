function isAnagram (wordA, wordB){
  if(wordA?.length > wordB?.length ||wordA?.length < wordB?.length){
    return false
  }

  var compararA, recuperarB
  for (var i = 0 ; i < wordA.length ; i++){
    compararA = wordA?.charAt(i)
      recuperarB = wordB?.indexOf(compararA)
      if (recuperarB == -1){
         return false
      }else{
        wordB = wordB?.replace(compararA,'')
      }

  }
  return true
}

console.log('Respuesta Final '+isAnagram('11','12'))
