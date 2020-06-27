import React, { Component } from 'react';
//import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Enter.css'

export class Enter extends Component {
    render() {
        return (
            <div className='osnova'>
                <div className='header'>
                    <div className="logo">
                        <a href="/">  <img src="dino.png" width="120" height="120" /> </a></div>
                    <div className="nam">
                        <h1>Книгозавр</h1>
                    </div>
                    <div className="tel">
                        <h3>8 (800) 555-0-555 - круглосуточно</h3>
                    </div>
                    <div className="ssilk">
                        <a href="">Доставка и оплата</a>
                        <a href="/Enter">Войти</a></div>
                    <div className="search">
                        <div className='se_p'>  <img src="se.png" width="30" height="30" /> </div>
                        <p><b>Поиск </b><textarea className="se" cols="60"></textarea> </p></div>
                    <div className="bu">
                        <img src="man.png" width="50" height="50" /> </div>
                    <div className="bucket">
                        <p>Корзина: 0</p> </div>
                </div>
                <div className='top_menu'> <a href="">Книги</a><a href="">Акции</a></div>
            <div className='blockmain'>
                <div className='haaat'>
                    <h1>Вход</h1>
                </div>
                <div className='fields'>
                    <div className='field'>
                        <h3 className='h3_1'>Номер телефона или почта</h3>
                        <textarea class="ent_tel" cols="60"></textarea>
                    </div>
                    <div className='field'>
                        <h3 className='h3_2'>Пароль</h3>
                        <textarea class="pass" cols="60"></textarea>
                    </div>
                </div>
                <div className='but'>
                    <button>Войти</button>
                    <p className='pp'>Или</p>
                        <a href="/Register"><button>Регистрация</button></a>
                </div>
            </div >
        </div>
    );
    }
}