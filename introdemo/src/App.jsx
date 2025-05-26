import { useState } from "react";
import "./App.css"

const Title = () => {
  return (
    <div>
      <h1 class="Mercury">Anecdota del día :</h1>
    </div>
  );
};
const Anecdotaza = ({text1,text2}) => {
  return (
    <div className="p">
      <p >{text1}</p>
      <p>Con una cantidad de votos de: {text2}</p>
    </div>
  );
}
const Boton = ({onClic, children}) =>(
      <button onClick={onClic}>{children}</button>
);


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    ["If it hurts, do it more often.", 0],
    ["Adding manpower to a late software project makes it later!", 0],
    ["The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", 0],
    ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 0],
    ["Premature optimization is the root of all evil.", 0],
    ["Debugging is twice as hard as writing the code in the first place.", 0],
    ["Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", 0],
    ["The only way to go fast, is to go well.", 0]
  ]);

  const [selected, setSelected] =useState(0);
  const alatorios = () => {
    let indice;
    do {
      indice = Math.floor(Math.random() * anecdotes.length);
    } while (indice === selected);
    setSelected(indice);
  };

  const voto = () => {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected][1] += 1;
    setAnecdotes(newAnecdotes);
  };
  
  const [nuevaAnecdota, setNuevaAnecdota] = useState("");

  const agregarAnecdota = () => {
    if (nuevaAnecdota.trim() !== ""){
    setAnecdotes([...anecdotes, [nuevaAnecdota, 0]]);
    setNuevaAnecdota("");
  }
}
 
  // Encontrar la anécdota con más votos
  const maxVotes = anecdotes.reduce((max, a) => (a[1] > max[1] ? a : max));
  if (maxVotes[1]=== 0) {
    return (
    <div>
      <Title />
      <p>{anecdotes[selected][0]}</p>
      <Boton onClic={voto}>Votar</Boton>
      <Boton onClic={alatorios}>Siguiente</Boton>
      <h2>Anecdota con más votos:</h2>
      <p>No hay anécdotas para mostrar.</p>
    </div>
  );
  }

  return (
    <div>
      <Title />
      <p>{anecdotes[selected][0]}</p>
      <Boton onClic={voto}>Votar</Boton>
      <Boton onClic={alatorios}>Siguiente</Boton>
      <h2>Anecdota con más votos:</h2>
      <Anecdotaza text1={maxVotes[0]}  text2={maxVotes[1]}/>
      <input
      type ="text"
      value={nuevaAnecdota}
      onChange={(e) => setNuevaAnecdota(e.target.value)}
      placeholder="Añadir nueva anécdota"
      />
      <Boton className="hilt" onClic={agregarAnecdota}>Añadir</Boton>
    </div>
  );
};

export default App;