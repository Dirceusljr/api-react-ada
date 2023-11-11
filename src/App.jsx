import { useEffect, useState } from "react";

// const tarefas = [
//   { id: "1", title: "minha primeira tarefa" },
//   { id: "2", title: "minha segunda tarefa" },
//   { id: "3", title: "minha terceira tarefa" },
//   { id: "4", title: "minha quarta tarefa" },
// ];

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscarDados().then((e) => setTarefas(e));
  }, []);

  return (
    <div>
      <h1>Buscando API</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa.id}>
            {tarefa.title}
            {tarefa.completed ? ' - Tarefa Concluída' : null} 
            </li>;
        })}
      </ol>
    </div>
  );
}
