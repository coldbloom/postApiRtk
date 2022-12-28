import React, {useState} from 'react';
import ModalWindow from "./modalWindow";

const AddPost = ({setRenderFlag, renderFlag}) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='pt-10 flex flex-col items-center'>
                <h1 className='text-lg font-medium'>Блог</h1>
                <div
                    onClick={() => setShow(true)}
                    className='rounded-lg bg-black text-white py-2 mt-2 w-52 flex justify-center '
                >Создать новый пост</div>
            </div>
            <ModalWindow
                modalShow={show}
                setShow={setShow}
                setRenderFlag={setRenderFlag}
                renderFlag={renderFlag}
            />
        </>
    );
};

export default AddPost;