import { useState } from "react"
import { Tweet } from "./componentes/Tweet"

import './App.css'
import { Route } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"


function App() {

  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1' ,
    'Tweet 2' ,
    'Tweet 2' ,
    'Tweet 4' ,
  ])

  function createTweet() {
    //passa o valor atual do array tweets e add um novo valor
    setTweets([...tweets, 'Novo tweet'])
  }

  //pode usar o css tanto com import ou dentro da tag style no formato de javascript(CSS in js)


  return ( 
    <>
    <AppRoutes />
    {/* <Tweet text="teste" />
    {tweets.map(tweet => {
      return <Tweet text={tweet}></Tweet>
    })}

    <button 
    onClick={createTweet}
    style={{
      backgroundColor: '#8257e6',
      border: 0,
      padding: '6px 12px',
      color: '#FFF'
    }}
    >Adicionar tweet</button> */}
    </>

  );

}

export default App
