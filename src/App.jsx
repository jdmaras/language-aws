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
      <h1 className="text-3xl text-center m-4">IB Language</h1>
      <main className="flex flex-col items-center">
        <h3 className="text-lg">Translate</h3>
        <div className="flex flex-col items-center w-full">
          <input className="rounded-md p-2 m-2 text-black w-full max-w-lg" type="text" placeholder='type to translate' onChange={(e) => setData(e.target.value)} />
          <div>
            <button className="rounded-md bg-zinc-950 p-4 m-2" onClick={() => {setPrint(false); setData('');}}>Clear</button>
            <button className="rounded-md bg-zinc-950 p-4 m-2" onClick={() => translateText()}>Submit</button>
          </div>
        </div>
        {print ?
          <h2 className="p-8">{translatedText}</h2>
            : ''
        }
      </main>
    </>
  )
}

export default App
