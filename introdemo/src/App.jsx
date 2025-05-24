 import { useState } from 'react'

 const Title = () => {
  return(
    <div>
      <h1>Anecdotes</h1>
    </div>
  )
 }

/* const Button = ({setCount,count}) => {
  return(
    <div>
      <button onClick={() => setCount(count +1 )}>next anecdote</button>
    </div>
  )
}  */
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const alatorios = () => {
    let indice;
    do{
      indice = Math.floor(Math.random() * anecdotes.length);
    } while(indice === selected);
    setSelected(indice);
  };
  


  return (
    <div>
      <Title />
     {anecdotes[selected]}
     <button onClick={alatorios}>Mostrar fruta aleatoria</button>

    </div>
  )
}  

export default App 
/* import { useState } from 'react';

const App = () => {
  const frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
  const [seleccionado, setSeleccionado] = useState(null);

  const mostrarAleatorio = () => {
    setSeleccionado(Math.floor(Math.random() * frutas.length));
  };

  return (
    <div>
      <h1>Fruta aleatoria</h1>
      {seleccionado !== null && <p>{frutas[seleccionado]}</p>}
      <button onClick={mostrarAleatorio}>Mostrar fruta aleatoria</button>
    </div>
  );
};

export default App; */
 