import React, {Component} from "react";

import './search-panel.css';

// Компонент SearchPanel для поиска по записям
export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '' // Хранит текущий поисковый термин
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this); // Привязываем контекст метода
    }

    // Обновляет поисковый термин и передает его родительскому компоненту
    onUpdateSearch(e) {
        const term = e.target.value; // Получаем значение из поля ввода
        this.setState({term}); // Обновляем состояние
        this.props.onUpdateSearch(term); // Вызываем функцию родительского компонента
    }

    render() {
        return (
            <input
                className='form-control search-input'
                type='text'
                placeholder='Otsi kirjete järgi' // Текст подсказки
                value={this.state.term} // Привязываем значение к состоянию
                onChange={this.onUpdateSearch} // Обработчик изменения
            />
        )
    }
}
