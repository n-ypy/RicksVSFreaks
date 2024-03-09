import '../assets/styles/HeroSelection.css'
import heroes from '../app/heroes'
import enemies from '../app/enemies'
import HeroSelectionCard from './HeroSelectionEls/HeroSlectionCard'
import { useState } from 'react'
import SelectedHeroesIndicator from './HeroSelectionEls/SelectedHeroesIdicator'
import StartFightBtn from './HeroSelectionEls/StartFightBtn'
import EnemyCard from './HeroSelectionEls/EnemySelection'
import { useDispatch } from 'react-redux';
import { setEnemyAndHeroes } from '../app/features/fight/fightSlice'


export default function HeroSelection({ setIsFightInitiated, children }) {
    const [animationTrigger, setAnimationTrigger] = useState(false)
    const [selectedHeroes, setSelectedHeroes] = useState([null, null, null, null])
    const [selectedEnemy, setSelectedEnemy] = useState(enemies[0])
    const dispatch = useDispatch()

    const toggleHeroSelect = function (hero) {
        const newSelectedHeroes = [...selectedHeroes]
        const heroIndex = selectedHeroes.findIndex(el => el !== null && el.name === hero.name)
        const emptySlots = selectedHeroes.filter(el => el === null).length

        if (heroIndex === -1 && emptySlots > 0) {
            const firstEmtySlot = selectedHeroes.findIndex(el => el === null)
            newSelectedHeroes[firstEmtySlot] = hero
            setSelectedHeroes(newSelectedHeroes)
            return true
        }

        if (heroIndex !== -1) {
            newSelectedHeroes[heroIndex] = null
            setSelectedHeroes(newSelectedHeroes)
        }

        return false
    }

    const selectEnemy = function (enemyIndex) {
        setSelectedEnemy(enemies[enemyIndex])
    }

    const confirmSelection = () => {
        dispatch(setEnemyAndHeroes({ heroes: selectedHeroes, enemy: selectedEnemy }))
        setAnimationTrigger(true)
        setTimeout(() => {
            setIsFightInitiated(true)
        }, 950)
    }

    return (
        <>
            <div className='hero-selection-page'>
                {children}
                <div className={`title-container${animationTrigger ? ' move-title' : ''}`}>
                    <div className='title'>Ricks<span>vs</span>Freaks</div>
                    <div className='title middle'> Ricks<span>vs</span>Freaks</div>
                    <div className='title bottom'> Ricks<span>vs</span>Freaks</div>
                </div>
                <div className='selection-container'>
                    <div className={`hero-selection${animationTrigger ? ' move-hero-container' : ''}`}>
                        <div className='hero-selection-title'>BUILD YOUR TEAM</div>
                        <div className='hero-selection-card-container'>
                            {heroes.map(hero => <HeroSelectionCard key={hero.name} toggleHeroSelect={toggleHeroSelect} hero={hero} />)}
                        </div>
                        <SelectedHeroesIndicator selectedHeroes={selectedHeroes} />
                    </div>
                    <EnemyCard animationTrigger={animationTrigger} enemies={enemies} selectedEnemy={selectedEnemy} selectEnemy={selectEnemy} />
                </div>
                <div className={`vs-title-container${animationTrigger ? ' animate-vs' : ''}`}>
                    <div className='title'>VS</div>
                    <div className='title middle'>VS</div>
                    <div className='title bottom'>VS</div>
                </div>
                {selectedHeroes.findIndex(el => el === null) === -1 && !animationTrigger && <StartFightBtn confirmSelection={confirmSelection} />}
            </div>
        </>
    )
}