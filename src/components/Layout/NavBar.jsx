import React, { useState } from 'react'
import cn from 'classnames'
import { css, StyleSheet } from 'aphrodite'

export default function NavLayout({ children }) {
    const [isActive, setIsActive] = useState(false)

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
                        <a href="/#" className="navbar-item mr-6">
                            Home
                        </a>

                        <a href="/#" className="navbar-item mr-6">
                            The Game
                        </a>
                        <a href="/#" className="navbar-item mr-6">
                            Instructions
                        </a>
                        <a href="/#" className="navbar-item">
                            About us
                        </a>

                    </div>

                </div>
            </nav>
            <section className={cn('section is-medium', css(styles.section))}>
                <div className={cn('container', css(styles.container))}>
                    {children}
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
                        licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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
})
