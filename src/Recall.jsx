import React from 'react'
import { useState } from 'react'
import { Card, Resposta, Button } from './components-styles/Styles.js'
import maybe from "./assets/maybe.png"
import errado from "./assets/errado.png"
import certa from "./assets/certa.png"
import play from "./assets/Vector.svg"
import virar from "./assets/Vector2.svg"
function virarCard(i, perguntas, setPerguntas) {
  let newPerguntas = [...perguntas]
  newPerguntas.splice(i, 1,
    {
      pergunta: perguntas[i].pergunta,
      resposta: perguntas[i].resposta,
      respostaStatus: "block"
    })
  console.log(newPerguntas)
  setPerguntas(newPerguntas)
}
function marcarResposta(i, setPerguntas, perguntas, color) {
  let newPerguntas = [...perguntas]
  newPerguntas.splice(i, 1, {
    perguntaStatus: color,
    respostaStatus: "none"
  })
  setPerguntas(newPerguntas)
  console.log(newPerguntas)
}

function CreateCards(Props) {
  const [Display, setDisplay] = useState("")

  if (Props.perguntas[Props.i].perguntaStatus === "red" && Props.perguntas[Props.i].perguntaStatus != undefined) {
    return (
      <Card data-test="flash-card" color={Props.perguntas[Props.i].perguntaStatus}><p data-test="flashcard-test">{`Pergunta ${Props.i + 1}`}<span><img src={errado} alt="" /></span></p></Card>
    )
  } else if (Props.perguntas[Props.i].perguntaStatus === "#FF922E" && Props.perguntas[Props.i].perguntaStatus != undefined) {
    return(
    <Card data-test="flash-card" color={Props.perguntas[Props.i].perguntaStatus}><p data-test="flashcard-test">{`Pergunta ${Props.i + 1}`}<span><img src={maybe} alt="" /></span></p></Card>
    )
  } else if (Props.perguntas[Props.i].perguntaStatus === "#2FBE34" && Props.perguntas[Props.i].perguntaStatus != undefined) {
    return(
    <Card data-test="flash-card" color={Props.perguntas[Props.i].perguntaStatus}><p data-test="flashcard-test">{`Pergunta ${Props.i + 1}`}<span><img src={certa} alt="" /></span></p></Card>
    )
  } else {
    return (
      <Card data-test="flash-card"  style={{ display: Display }}><p>{`Pergunta ${Props.i + 1}`}<span><img data-test="play-btn" onClick={() => {
        Display === "" ? setDisplay("none") : setDisplay("")
        virarCard(Props.i, Props.perguntas, Props.setPerguntas)
      }} src={play} alt="" /></span></p></Card>

    )
  }
}

function CreateRespostas(props) {
  const [virada, Virar] = useState(false)
  const [Display, setDisplay] = useState("none")
  return (
    <Resposta  style={{ display: props.status }}>
      <h1>{virada ? props.resposta : props.pergunta}</h1>
      <div style={{ display: Display }} className="botoes">
        <Button data-test="no-btn" onClick={() => {
          marcarResposta(props.i, props.setPerguntas, props.perguntas, "red")
          props.setRespondidas(props.respondidas + 1)
        }} style={{ background: "Red" }}>Não lembrei</Button>
        <Button data-test="partial-btn" onClick={() => {
          marcarResposta(props.i, props.setPerguntas, props.perguntas, "#FF922E")
          props.setRespondidas(props.respondidas + 1)
        }} style={{ background: "#FF922E" }}>Quase não lembrei</Button>
        <Button data-test="zap-btn" onClick={() => {
          marcarResposta(props.i, props.setPerguntas, props.perguntas, "#2FBE34")
          props.setRespondidas(props.respondidas + 1)
        }} style={{ background: "#2FBE34" }}>Zapp!!</Button>
      </div>
      <img onClick={() => {
      Virar(true)
      setDisplay("flex")
    }} data-test="turn-btn" style={{ display: !virada ? "block" : "none" }} src={virar} alt="" />
    </Resposta>
  )
}

function Recall(props) {
  return (
    <React.Fragment>
      {props.perguntas.map((pergunta, resposta = pergunta.resposta) => <CreateRespostas respondidas={props.respondidas} setRespondidas={props.sertRespondidas} key={resposta} perguntas={props.perguntas} status={pergunta.respostaStatus} resposta={pergunta.resposta} pergunta={pergunta.pergunta} i={props.perguntas.indexOf(pergunta)} setPerguntas={props.setPerguntas} />)}
      {props.perguntas.map((pergunta, index = props.perguntas.indexOf(pergunta)) => <CreateCards key={index} setPerguntas={props.setPerguntas} perguntas={props.perguntas} i={props.perguntas.indexOf(pergunta)} />)}
    </React.Fragment>

  )
}

export default Recall