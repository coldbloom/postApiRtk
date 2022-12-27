import './App.css';
import Posts from './components/posts'
import {useSelector, useDispatch} from "react-redux";

function App() {

    return (
        <div className='w-full mr-auto ml-auto flex justify-center'>
            <div className='container'>
                <Posts />
            </div>
        </div>
    );
}

export default App;
