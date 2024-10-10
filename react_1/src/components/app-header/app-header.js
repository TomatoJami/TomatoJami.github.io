import React from 'react';

import './app-header.css'

// Компонент AppHeader отображает заголовок приложения и информацию о количестве постов и лайков
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>
                Sisesta oma nimi siia
            </h1>
            <h2>{allPosts} plaadid, meeldisid {liked}</h2>
        </div>
    )
}

export default AppHeader;
