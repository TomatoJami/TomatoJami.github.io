import React, { Component } from 'react';

import './post-list-item.css';

// Компонент PostListItem отображает отдельный элемент списка постов
export default class PostListItem extends Component {

    render() {
        // Деструктурируем пропсы
        const { label, onDelete, onToggleImportant, onToggleLiked, like, check, onToggleCheck, important } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        // Добавляем классы в зависимости от состояния поста
        if (important) {
            classNames += ' important';
        }

        if (check) {
            classNames += ' check';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                    className='app-list-item-label'
                    onClick={onToggleLiked} // Обработчик клика для лайка
                >
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-star btn-sm'
                        onClick={onToggleImportant} // Обработчик переключения важности
                    >
                        <i className='fa fa-star'></i>
                    </button>
                    <button
                        type='button'
                        className='btn-trash btn-sm'
                        onClick={onDelete} // Обработчик удаления поста
                    >
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <button
                        type='button'
                        className='btn-check btn-sm'
                        onClick={onToggleCheck} // Обработчик переключения статуса "проверено"
                    >
                        <i className="fa fa-check"></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}
