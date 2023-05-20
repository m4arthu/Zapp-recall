
import { useState } from "react"
import Recall from "./Recall.jsx"
import { Header, GameBody, Container, Footer } from "./components-styles/Styles.js"
import logo from "./assets/image 2.svg"
function App() {
  const [perguntas, setPerguntas] = useState(
    [{ pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes", respostaStatus: "none", perguntaStatus: "" },
    { pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", respostaStatus: "none", perguntaStatus: "" }  
  ])
  const [respondidas, sertRespondidas] = useState(0)
  return (
    <>
      <GameBody>
        <Header><img src={logo} alt="" /><h1>ZappReCall</h1></Header>
        <Container>
          <Recall respondidas={respondidas} sertRespondidas={sertRespondidas} setPerguntas={setPerguntas} perguntas={perguntas}></Recall>
        </Container>
        <Footer data-test="footer">{respondidas}/{perguntas.length}</Footer>
      </GameBody>
    </>
  )
}

export default App
