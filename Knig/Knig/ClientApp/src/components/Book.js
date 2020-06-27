import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import './Book.css'

export class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    componentDidBook() {

        fetch('book').then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
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
                                <p><b>Поиск </b><textarea className="se" cols="60"></textarea></p></div>
                                <div className="bu">
                                <img src="man.png" width="50" height="50"/> </div>
                                    <div className="bucket">
                                    <p>Корзина: 0</p> </div>
                    </div>
           
                <div className='top_menu'> <a href="">Книги</a><a href="">Акции</a></div>
                <div className='main1'>
                    <div className='pic'><img src="book.jpg" width="344" height="450" /></div>
                    <div className='name'>
                    <h1>item.name</h1>
                    <h1>item.author</h1></div>
                </div>
                <div className="rating">
                    <h2><img src="icon.png" width="30" height="30" /> 4,68</h2>
                </div>
                <div className="count">
                    <p color="grey">item.count_of_rating</p>
                </div>
                <div className="desc1">
                    <p>Серия</p>
                    <p>Том</p>
                    <p>Издательство</p>
                    <p>Год издания</p>
                    <p>Кол-во страниц</p>
                    <p>Тип обложки</p>
                    <p>Возрастные органичения</p>
                </div>
                <div className="desc2">
                <p>item.part</p>
                <p>item.publishing_house</p>
                <p>item.year_of_publishing</p>
                <p>item.pages</p>
                <p>item.cover_type</p>
                <p>item.age_limit</p>
                </div>
                <div className="price">
                    <h3>item.price.</h3>
                    <a href="/Entry"> <button>Добавить в корзину</button> </a>
                </div>
                <div className='annotation'>
                    <p>item.annotation</p>
                </div>
            </div>
        );
    }
}