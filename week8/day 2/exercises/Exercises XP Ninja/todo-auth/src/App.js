import { useSelector } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import Logout from './components/Logout';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 flex-col gap-4">
      {isAuthenticated ? (
        <>
          <TodoList />
          <Logout />
        </>
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;
