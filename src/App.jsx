import "./App.css";
import Home from "./components/Home";
import AppBar from "./components/AppBar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppBar />
        <Home />
      </AuthProvider>
    </div>
  );
}

export default App;
