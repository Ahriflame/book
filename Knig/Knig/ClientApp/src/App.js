import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Enter } from './components/Enter';
import { Book } from './components/Book';
import { Register } from './components/Register';
import { Maain } from './components/Maain';

//import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Maain} />
                <Route path='/Enter' component={Enter} />
                <Route path='/Register' component={Register} />
                <Route path='/Book' component={Book} />
            </Layout>
        );
    }
}
