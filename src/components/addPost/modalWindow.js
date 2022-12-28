import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import cn from "classnames"
import {addPost} from "../../store/slices/postSlice";
import {useDispatch} from "react-redux";

const ModalWindow = ({modalShow, setShow, setRenderFlag, renderFlag}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    const addNewPost = () => {
        const newPost = {
            title: title,
            description: description,
        }
        dispatch(addPost(newPost))
        setShow(false)
    }

    return (
        <>
            <div className={cn('fixed top-0 left-0 pt-10 w-full h-full flex justify-center bg-black opacity-70', {
                'visible': modalShow === true,
                'hidden': modalShow === false
            })}>
            </div>
            <div className='w-full flex justify-center'>
                <div className={cn('bg-white px-10 py-6 rounded-lg flex flex-col absolute',
                    {
                        'visible': modalShow === true,
                        'hidden': modalShow === false
                    }
                )}>
                    <div className='w-full flex justify-end'>
                        <AiFillCloseCircle className='flex ' onClick={() => setShow(false)}/>
                    </div>
                    <p className='font-semibold text-black text-center my-1'>Создание поста</p>
                    <input
                        className=' border-2 rounded-lg px-1 py-1'
                        placeholder='enter title of new post'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className=' border-2 rounded-lg px-1 py-1 mt-1'
                        placeholder='enter description of new post'
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className='flex justify-center w-full h-full items-end m'>
                        <button
                            className='rounded bg-black py-1 px-2 text-white mt-5 w-20 h-10'
                            onClick={() => addNewPost()}
                        >
                            Создать
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;