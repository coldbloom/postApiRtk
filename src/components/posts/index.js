import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/slices/postSlice";
import Post from './../post'


const Index = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postSlice.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>

            {
                posts.length !== 0
                    ? posts.map((post, num) =>
                        <Post
                            key={num}
                            {...post}
                        />
                      )
                    : <h2>loading</h2>
            }
        </div>
    );
};

export default Index;