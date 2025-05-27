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
    <div>
      <p  className="j">{text1}</p>
      <p className="j1">Con una cantidad de votos de: {text2}</p>
    </div>
  );
}
const Boton = ({className,onClic, children}) =>(
     
      <button className={className} onClick={onClic}>{children}</button>
      
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

  const  Total_v = anecdotes.reduce((total,b)=> b[1] + total,0);
  const Total_p = anecdotes.length;
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
  const maxVotes = Math.max(...anecdotes.map(a=> a[1]));
  const anecdotasTop = anecdotes.filter(a => a[1] === maxVotes &&  maxVotes>0);

  if (maxVotes=== 0) {
    return (
    <div>
      <Title />
      <p className="p">{anecdotes[selected][0]}</p>
      <Boton className="ñ" onClic={voto}>Votar</Boton>
      <Boton className="ñ" onClic={alatorios}>Siguiente</Boton>
      <h2 className="h2">Anecdota con más votos:</h2>
      <p className="px">No hay anécdotas votadas.</p>
    </div>
  );
  }
  return (
      <div>
    <Title />
    <p className="p" key={selected}>{anecdotes[selected][0]}</p>
    <p className="xx" key={anecdotes[selected]}>Tiene {anecdotes[selected][1]} votos.</p>
    <Boton className="ñ" onClic={voto}>Votar</Boton>
    <Boton className="ñ" onClic={alatorios}>Siguiente</Boton>
    <h2 className="h2">Anecdota(s) con más votos:</h2>
      {anecdotasTop.map((a, i) => (
        <Anecdotaza key={i} text1={a[0]} text2={a[1]} />
      ))
    }
      <input className="input"
      type ="text"
      value={nuevaAnecdota}
      onChange={(e) => setNuevaAnecdota(e.target.value)}
      placeholder="Añadir nueva anécdota"
      />
      <Boton className="x" onClic={agregarAnecdota}>Añadir</Boton>
      <div>
  <h2 className="h2">Gráfica de votos:</h2>
  <p className="hp">Total de votos: {Total_v}</p>
  <p className="hp">Total de Anecdotas: {Total_p}</p>
  <div className="bar-chart">
    {anecdotes.map((anecdota, i) => (
      <div className="bar-container" key={i}>
        <span className="bar-label">{anecdota[0]}</span>
        <div
          className="bar"
          style={{ width: `${anecdota[1] * 30}px` }} // Ajusta el multiplicador según tus votos
        >
          {anecdota[1]}
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default App;