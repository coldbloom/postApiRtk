import './App.css';
import Posts from './components/posts'
import {useSelector, useDispatch} from "react-redux";

function App() {

    return (
        <div>
            <Posts />
        </div>
    );
}

export default App;
