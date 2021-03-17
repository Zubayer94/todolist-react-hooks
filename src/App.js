import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
