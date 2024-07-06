
import './App.css'
import { useTranslator } from './hooks/useTranslator'



function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    resultText,
    loading, setFromLanguage } = useTranslator()
  return (
    <>
     <h1>hellow </h1>
     {fromLanguage}
     <button onClick={()=> setFromLanguage('en')}>wn</button>
    </>
  )
}

export default App
