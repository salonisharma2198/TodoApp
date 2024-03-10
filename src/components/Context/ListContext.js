import React, { createContext, useContext, useState } from 'react';

const ListContext = createContext();
export const useListContext = () => useContext(ListContext)

const ListProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => {
        setTitle(e?.target?.value)
    }
    const handleContent = (e) => {
        setContent(e?.target?.value)
    }

    const addItemToList = (item) => {
        setList([...list, item])
    }

    const deleteListItem = (index) => {
        const listItem = [...list]
        listItem.splice(index, 1)
        setList(listItem)
    }

    const updateListItem = (index) => {
        const listItem = [...list]
        listItem[index] = { title: title, content: content }
        setList(listItem)
    }

    const clearInputFields = () => {
        setContent('');
        setTitle('');
    }

    const UpdateListValues = (index) => {
        const listItem = [...list]
        const contentValue = listItem[index]
        setContent(contentValue?.content);
        setTitle(contentValue?.title);
    }

    return (
        <ListContext.Provider value={{ list, addItemToList, deleteListItem, updateListItem, handleTitle, handleContent, title, content, UpdateListValues, clearInputFields }}>
            {children}
        </ListContext.Provider>
    )
}
export default ListProvider
