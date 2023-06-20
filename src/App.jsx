import { useState } from 'react'
import Explanation from './Explanation';

function App() {
  const [data, setData] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [print, setPrint] = useState(false);
  //this is for keeping that text to display below
  const [originalText, setOriginalText] = useState('');
  const ibTranslateInfo = Explanation();

  function translateText(){
        replaceFirstVowels(data);
        setPrint(true);
  //clearing the text out of the input
        setData('');
  }
  function replaceFirstVowels(sentence){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    let words = sentence.toLowerCase().split(' ');
    
    const replaceWords = words.map(word => {
      for (let i = 0; i < word.length; i++ ){
          if(vowels.includes(word[i])){
            return word.replace(word[i], 'ib');
          }
      }
      return word;
    })
    setTranslatedText(replaceWords.join(' '));
  }
  
  return (
    <>
      <form>
        <h1 className="text-3xl text-center m-4 text-green-400">IB Language</h1>
        <main className="flex flex-col items-center">
        <h4 className='text-sm'>{ibTranslateInfo}</h4>
          <h3 className="text-lg">Sentence Translator</h3>
            <div className="flex flex-col items-center w-full">
              <input className="rounded-md p-2 m-2 text-black w-full max-w-lg" 
                type="text" 
                placeholder='type to translate' 
                value={data} onChange={(e) => setData(e.target.value)} />
              <div>
                <button className="rounded-md bg-zinc-950 p-4 m-2" 
                  onClick={(event) => {event.preventDefault(); setPrint(false); setData('');}}>Clear</button>
                <input className="rounded-md bg-zinc-950 p-4 m-2" 
                  type="submit" 
                  onClick={(event) => {event.preventDefault(); 
                      translateText();
                      setOriginalText(data);
                    }
                  } 
                />
              </div>
            </div>
            <div>
              {print ? 
              <h3 className='text-2xl text-green-300'>Your Sentence Was: {originalText}</h3> : ''}
            </div>
            <div>
              {print ?
                <h2 className="text-3xl p-8 text-green-600">{translatedText}</h2>
                  : ''
              }
            </div>
        </main>
      </form>
    </>
  )
}

export default App
