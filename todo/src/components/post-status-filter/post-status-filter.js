import React, {Component} from 'react';

import './post-status-filter.css';

// Компонент PostStatusFilter отображает кнопки фильтрации постов
export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        // Определяем кнопки фильтрации
        this.buttons = [
            {name: 'all', label: 'Kõik'}, // Кнопка для отображения всех постов
            {name: 'like', label: 'Meeldis'} // Кнопка для отображения только лайкнутых постов
        ];
    }

    render() {
        // Создаем кнопки на основе массива buttons
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name; // Проверяем, является ли кнопка активной
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'; // Определяем класс для кнопки

            return (
                <button type='button'
                    className={`btn ${clazz}`} // Применяем соответствующий класс
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        });

        return (
            <div className='btn-group'>
                {buttons} {/* Отображаем кнопки фильтрации */}
            </div>
        )
    }
}
