import React, { useState } from 'react'
import cn from 'classnames'
import { css, StyleSheet } from 'aphrodite'
import { useRouteMatch, NavLink, useHistory } from 'react-router-dom'

export default function NavLayout({ children }) {
    const history = useHistory()
    const [isActive, setIsActive] = useState(false)
    const { path } = useRouteMatch()
    const Home = () => {
        history.push('/')
    }
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button onClick={() => { setIsActive(!isActive) }}
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>
                <div id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className={cn('navbar-start pt-4 navbar-start--centered', css(styles.navCenter))}>
                        <div onClick={Home} className="navbar-item hovers is-clickable mr-6">
                            Home
                        </div>
                        <NavLink to="/GamePage" exact>
                            <div className={cn(
                                'navbar-item hovers mr-6',
                                { [css(styles.active)]: path.startsWith('/GamePage') },
                            )}>
                                The Game
                            </div>
                        </NavLink>
                        <NavLink to="/Instructions" exact>
                            <div className={cn(
                                'navbar-item hovers mr-6',
                                { [css(styles.active)]: path.startsWith('/Instructions') },
                            )}>
                                Instructions
                            </div>
                        </NavLink>
                        <NavLink to="/AboutPage" exact>
                            <div className={cn(
                                'navbar-item hovers mr-6',
                                { [css(styles.active)]: path.startsWith('/AboutPage') },
                            )}>
                                About us
                            </div>
                        </NavLink>

                    </div>

                </div>
            </nav>
            {children}
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Concentration</strong> by <a href="/#">Olim Nizomov</a>. The source code is
                        licensed
                        <a href="/#">MIT</a>. The website content
                        is licensed <a href="/#">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </div>
    )
}

const styles = StyleSheet.create({
    navCenter: {
        flexGrow: 1,
        justifyContent: 'center',

    },
    active: {
        color: '#53a4c1',
        boxShadow: 'inset 0 -3px 0 0 cornflowerblue',
    },
})
