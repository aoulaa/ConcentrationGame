import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import Home from './pages/Home'

export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
