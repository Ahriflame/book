import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import './Maain.css'


export class Maain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    componentDidBooks() {

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
                    <p><b>Поиск </b><textarea className="se" cols="60"></textarea></p> </div>
                                <div className="bu">
                                <img src="man.png" width="50" height="50"/> </div>
                                    <div className="bucket">
                    <p>Корзина: 0</p> </div>
            </div>
            <div className='top_menu'> <a href="">Книги</a><a href="">Акции</a></div>
            <div className='os'>
            <div className='blocks'>
                <p>Новинки литературы</p>
                <div className='min1'>
                        <img src="https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/50531157-bernar-miner-sestry.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                <div className='min2'>
                        <img src="https://cdn.book24.ru/v2/ITD000000001071501/COVER/cover3d1__w337.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min3'>
                        <img src="https://img3.labirint.ru/rc/2c16dd1984992a54e7ff6b3e9f6858ac/220x340/books74/737147/cover.jpg?1587709546" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min4'>
                        <img src="https://s1.livelib.ru/boocover/1003695128/o/d20c/Megan_DeVos__Vernost.jpeg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min5'>
                        <img src="https://img1.labirint.ru/rcimg/86451771269788899335f6b3a707d482/960x540/books74/736939/ph_001.jpg?1581409576" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
            </div >

            <div className='blocks'>
                <p>Популярное</p>
                    <div className='min6'>
                        <a href="/Book">  <img src="https://cdn1.ozone.ru/s3/multimedia-x/c650/6013355709.jpg" width="250" height="130" /> </a>
                        <p>item.name</p> 
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min7'>
                        <img src="https://img-gorod.ru/27/607/2760761_detail.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min8'>
                        <img src="https://img-gorod.ru/25/579/2557931_detail.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min9'>
                        <img src="https://static-eu.insales.ru/images/products/1/43/284483627/1.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                    <div className='min10'>
                        <img src="https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover/50389316-mark-menson-muzhskie-pravila.jpg_330.jpg" width="250" height="130" />
                        <p>item.name</p>
                        <p>item.author</p>
                        <p>item.price</p>
                        <button className='b'>Купить</button>
                    </div>
                </div >
                <div className='arrow1'>
                    <img src="https://icons-for-free.com/iconfiles/png/512/direction+retro+right+stroke+arrow+icon-1320185744769287290.png" width="50" height="50" /> </div>  
                <div className='arrow2'>  <img src="https://icons-for-free.com/iconfiles/png/512/direction+retro+right+stroke+arrow+icon-1320185744769287290.png" width="50" height="50" /> 
        </div>  
            </div >  </div >
        );
    }
}