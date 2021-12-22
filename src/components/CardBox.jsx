import React from 'react'
import cover from '../static/img/cover.png'

export default function CardBox({ card, handleChoice, flipped, disabled }) {
    const handelClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className="card-box">
            <div className={flipped ? 'flipped' : ''}>
                <img className="card-front" src={card.src} alt="card-front" />
                <img
                    className="card-back"
                    src={cover}
                    onClick={handelClick}
                    alt="card-back" />
            </div>
        </div>
    )
}
