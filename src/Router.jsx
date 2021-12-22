import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import GamePage from './pages/GamePage'
import AboutPage from './pages/AboutPage'
import BaseContextWrapper from './components/common/BaseContext'
import Instructions from './pages/Instructions'

export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/GamePage" component={GamePage} exact />
                    <Route path="/AboutPage" component={AboutPage} exact />
                    <Route path="/Instructions" component={Instructions} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
