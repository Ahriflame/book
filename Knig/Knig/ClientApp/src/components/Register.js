import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import './Register.css'

export class Register extends Component {
    render() {
        return (<div className='main'>
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
                    <p><b>Поиск </b><textarea className="se" cols="60"></textarea></p> </div>
                                <div className="bu">
                                <img src="man.png" width="50" height="50"/> </div>
                                    <div className="bucket">
                    <p>Корзина: 0</p> </div>
            </div>
            <div className='top_menu'> <a href="">Книги</a><a href="">Акции</a></div>
           
            <div className='blockmain4'>
                <div className='haaat4'>
                    <h1>Регистрация</h1>
                </div>
                <div className='fields4'>
                    <div className='field4'>
                        <h3 className='h3_14'>Имя</h3>
                        <textarea class="pass4" cols="60"></textarea>
                    </div>
                    <div className='field4'>
                        <h3 className='h3_24'>E-mail</h3>
                        <textarea class="pass4" cols="60"></textarea>
                    </div>
                    <div className='field4'>
                        <h3 className='h3_34'>Номер телефона</h3>
                        <textarea class="pass4" cols="60"></textarea>
                    </div>
                    <div className='field4'>
                        <h3 className='h3_44'>Пароль</h3>
                        <textarea class="pass4" cols="60"></textarea>
                    </div>
                    <div className='field4'>
                        <h3 className='h3_54'>Повторите пароль</h3>
                        <textarea class="pass4" cols="60"></textarea>
                    </div>
                </div>
                <div className='but4'>
                    <button>Регистрация</button>
                </div>
            </div >


            </div>
        );
    }
}