import React from "react";
import './style.scss'

const Error_404 = () => {

    return (
        <div className="error-404">
            <div className="content">
                <h3>Ошибка 404 - здесь пусто</h3>
                <p>Этой страницы не существует или она была удалена. Но у нас есть другие.</p>
                <a href="/pokemons">К покемонам</a>
            </div>
        </div>
    )
}

export default Error_404