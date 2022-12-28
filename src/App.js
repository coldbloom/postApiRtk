import './App.css';
import Posts from './components/posts'
import AddPost from "./components/addPost/addPosts";

function App() {

    return (
        <div className='w-full mr-auto ml-auto flex justify-center'>
            <div className='container'>
                <AddPost />
                <Posts />
            </div>
        </div>
    );
}

export default App;
