import { useState } from "react";
import "./App.css"

const Title = () => {
  return (
    <div>
      <h1>Anecdota del día :</h1>
    </div>
  );
};

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

  // Encontrar la anécdota con más votos
  const maxVotes = anecdotes.reduce((max, a) => (a[1] > max[1] ? a : max));
  if (maxVotes[1]=== 0) {
    return (
    <div>
      <Title />
      <p>{anecdotes[selected][0]}</p>
      <button onClick={alatorios}>Siguiente</button>
      <button onClick={voto}>Votar</button>

      <h2>Anecdota con más votos:</h2>
      <p>No hay anécdotas para mostrar.</p>
    </div>
  );
  }

  return (
    <div>
      <Title />
      <p>{anecdotes[selected][0]}</p>
      <button onClick={alatorios}>Siguiente</button>
      <button onClick={voto}>Votar</button>

      <h2>Anecdota con más votos:</h2>
      <p>{maxVotes[0]} con {maxVotes[1]} votos</p>
    </div>
  );
};

export default App;