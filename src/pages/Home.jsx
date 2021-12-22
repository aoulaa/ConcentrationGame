import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../components/Layout/NavBar'

export default function Home() {
    const history = useHistory()

    const onClick = () => {
        history.push('GamePage')
    }

    return (
        <NavBar>
            <section className="section is-medium">
                <div className="container">
                    <div className=" is-flex is-flex-direction-column
                is-align-items-center has-text-centered">
                        <div className="column is-5">
                            <h1 className="is-size-1 is-size-3-mobile">👋 Welcome!</h1>
                            <button onClick={onClick}
                                className="button is-rounded mt-3 is-size-6-mobile is-medium is-fullwidth">
                                Start the game
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </NavBar>
    )
}
