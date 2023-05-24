import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [print, setPrint] = useState(false);

  function translateText(){
        replaceFirstVowels(data);
        setPrint(true);
  }
  function replaceFirstVowels(sentence){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    console.log(sentence);
    let words = sentence.toLowerCase().split(' ');
    
    const replaceWords = words.map(word => {
      for (let i = 0; i < word.length; i++ ){
          if(vowels.includes(word[i])){
            return word.replace(word[i], 'ib');
          }
      }
      return word;
    })
    console.log(replaceWords.join(' '))
    setTranslatedText(replaceWords.join(' '));
  }
  return (
    <> 
      <h1>IB Language</h1>
      <h3>Translate</h3>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => translateText()}>Submit</button>
      <button onClick={() => {setPrint(false); setData('');}}>Clear</button>
      { print ?
      <h2>{translatedText}</h2>
        : ''
      }
    </>
  )
}

export default App
