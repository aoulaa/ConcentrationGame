import React from 'react'

export default function FinishModal({ shuffelCards, turns }) {
    return (
        <div>
            <div className="columns is-flex-direction-column is-mobile is-vcentered  is-centered my-3">
                <h1 className="mb-2">Congratulations you won the game !</h1>
                <p className="mb-2"> You won the game on
                    <span className="has-text-weight-semibold"> {turns}</span> turns
                </p>
                <div onClick={shuffelCards} className="button is-success mr-3"> restart game</div>
            </div>

        </div>
    )
}
