import "./App.css";
import Home from "./page/Home";
import TaskList from "./page/TaskList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Home />
      <TaskList />
      </div>
    </Provider>
  );
}

export default App;
