import "./App.css";
import ResponsiveAppBar from "./components/Header";
import ColorTabs from "./components/Navigator";
import SimpleContainer from "./components/NewServiceOrder";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar></ResponsiveAppBar>
            <ColorTabs></ColorTabs>
            <SimpleContainer></SimpleContainer>
        </div>
    );
}

export default App;
