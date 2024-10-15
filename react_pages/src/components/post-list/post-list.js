import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

// Компонент PostList отображает список постов
const PostList = ({posts, onDelete, onToggleImportant, onToggleCheck, onToggleLiked}) => {

    // Создает элементы списка постов, передавая необходимые пропсы каждому PostListItem
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item; // Деструктурируем id и остальные свойства поста
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)} // Обработчик удаления поста
                    onToggleImportant={() => onToggleImportant(id)} // Обработчик переключения важности
                    onToggleCheck={() => onToggleCheck(id)} // Обработчик переключения статуса "проверено"
                    onToggleLiked={() => onToggleLiked(id)} // Обработчик переключения лайка
                />
            </li>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements} {/* Отображает элементы списка постов */}
        </ul>
    )
}

export default PostList;
