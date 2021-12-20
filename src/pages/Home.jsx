import React from 'react'
import NavBar from '../components/Layout/NavBar'

export default function Home() {
    return (
        <NavBar>
            <div className=" is-flex is-flex-direction-column
                is-align-items-center has-text-centered">
                <div className="column is-5">
                    <h1 className="is-size-1 is-size-3-mobile">👋 Welcome!</h1>
                    <button className="button is-rounded mt-3 is-size-6-mobile is-medium is-fullwidth">
                        Start the game
                    </button>
                </div>
            </div>

        </NavBar>
    )
}
