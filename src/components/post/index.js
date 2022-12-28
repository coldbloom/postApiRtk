import React from 'react';
import {FaHeart} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'
import s from './Post.module.css'
import {deletePost, editLikePost} from "../../store/slices/postSlice";
import {useDispatch} from "react-redux";

const Post = ({id, title, liked, description, num}) => {
    const dispatch = useDispatch()
    return (
        <div className='py-5 lg:px-10 px-2'>
            <div className='flex flex-row px-2'>
                <div>
                    <h3 className='text-xl font-semibold'>{num + ' ' + title}</h3>
                </div>
            </div>
            <div className='px-6 py-2 flex flex-row '>
                <div className={s.descriptionBox}>
                    <p className='text-lg'>
                        {description}
                    </p>
                </div>
                <div className={s.trashBox}>
                    <FaTrashAlt
                        size={22}
                        onClick={() => dispatch(deletePost(id))}
                    />
                </div>
            </div>
            <div className={s.trashBox}>
                <FaHeart
                    size={22}
                    color={liked ? "red" : "black"}
                    onClick={() => dispatch(editLikePost(id, {title: title, description: description, liked: !liked,}))}
                />
            </div>
        </div>
    );
};

export default Post;