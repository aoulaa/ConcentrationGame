import React from 'react'
import NavBar from '../components/Layout/NavBar'

export default function Instructions() {
    return (
        <NavBar>
            <div className="is-flex section is-flex-direction-column
                is-align-items-center ">
                <div className="column is-5">
                    <h1 className="is-size-1 has-text-centered is-size-3-mobile">Instructions</h1>
                    <p>
                        To play a game click start a game button on home page or click the game page.
                    </p>
                    <p className="my-2">
                        In this game you should find two identical cards by flipping them over.
                        When you are on the page you will see 16 card 4x4 if you click on the card turns
                        over and click the other card when you find two identical cards they match and stay open.
                        And you should play until you find all pairs. When you find all pairs game finishes and
                        tells you how many turns it took you to win the game.
                        P.s you should try to use as less turns as possible.
                    </p>
                    <p>This game is designed to improve players memory</p>
                </div>
            </div>

        </NavBar>
    )
}
