import logo from './logo.svg';
import './App.css';
import OtherFile from "./components/OtherFile";
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import ValidatedCorrectLoginForm from "./components/ValidatedCorrectLoginForm";

function App() {
    return (
        <div className="App">
            <h1>Hello :)</h1>
            <OtherFile/>
            <ValidatedLoginForm/>
        </div>
    );
}

export default App;
