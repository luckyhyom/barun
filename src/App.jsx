import "./App.css";
import ResponsiveAppBar from "./components/Header";
import ColorTabs from "./components/Navigator";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar></ResponsiveAppBar>
            <ColorTabs></ColorTabs>
        </div>
    );
}

export default App;
