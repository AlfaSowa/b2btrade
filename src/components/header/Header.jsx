import React from "react";
import logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__top">
                    <div className="links container">
                        <div className="links__item">Купить оптом</div>
                        <div className="links__item">Продать оптом</div>
                        <div className="links__item">Найти оптового поставщика</div>
                    </div>
                </div>

                <div className="header__main container">
                    <a className="logo" href="#">
                        <img src={logo} alt="логотип" />
                    </a>

                    <div className="search">
                        <form className="search__form">
                            <div className="search__inner">
                                <svg className="search__icon">
                                    <use href={`${sprite}#search`}></use>
                                </svg>

                                <input className="search__input" type="text" placeholder="Найти" />

                                <select name="" id="">
                                    <option value="везде">везде</option>
                                    <option value="везде">везде</option>
                                    <option value="везде">везде</option>
                                </select>
                            </div>

                            <button className="btn" type="submit">
                                найти
                            </button>
                        </form>
                    </div>

                    <div className="auth">
                        <div className="auth__item">
                            <svg className="auth__item-icon">
                                <use href={`${sprite}#account`}></use>
                            </svg>
                            Войти
                        </div>
                        <div className="auth__item">Регистрация</div>
                    </div>
                </div>
            </header>
        );
    }
}
