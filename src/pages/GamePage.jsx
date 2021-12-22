import React, { useCallback, useEffect, useState } from 'react'
import NavBar from '../components/Layout/NavBar'
import { cardImages } from '../utils/ImageList'
import CardBox from '../components/CardBox'
import { useModal } from '../hooks/modal'
import FinishModal from '../components/FinishModal'

export default function GamePage() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [count, setCount] = useState(0)
    const shuffelCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
        hideModal()
        setCount(0)
    }
    const [showModal, hideModal] = useModal(<FinishModal shuffelCards={shuffelCards} turns={turns} />)
    const handleChoice = (card) => {
        // eslint-disable-next-line no-unused-expressions
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    const checkCompletion = useCallback(() => {
        if (Object.keys(cardImages).length === count) {
            showModal()
        }
        // eslint-disable-next-line
    }, [count])

    useEffect(() => {
        checkCompletion()
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => prevCards.map((card) => {
                    if (card.src === choiceOne.src) {
                        setCount((prevTurns) => prevTurns + 0.5)
                        return { ...card, matched: true }
                    }
                    return card
                }))
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 500)
            }
        }
    }, [choiceOne, choiceTwo, checkCompletion])
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns((prevTurns) => prevTurns + 1)
        setDisabled(false)
    }
    useEffect(() => {
        shuffelCards()
        // eslint-disable-next-line
    }, [])
    return (
        <NavBar>
            <div className="mt-6  mb-2 has-text-centered">
                <p className="title is-size-5-mobile">Memory Game</p>
            </div>
            <section className="section mt-0 pt-0 is-medium">
                <div className="columns is-centered">
                    <div className="grid-card column is-clickable">
                        {cards.map((card) => (
                            <CardBox
                                key={card.id}
                                card={card}
                                handleChoice={handleChoice}
                                flipped={card === choiceOne || card === choiceTwo || card.matched}
                                disabled={disabled}
                            />
                        ))}
                    </div>
                </div>
                <div className="columns is-mobile is-vcentered  is-centered mt-5">
                    <div onClick={shuffelCards} className="button mr-3">restart game</div>
                    <p>Turns: {turns}</p>
                </div>
            </section>
        </NavBar>
    )
}
