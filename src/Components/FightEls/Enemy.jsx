import { useEffect, useState } from "react"
import Progress from "./Progress"
import FloatingText from "./FloatingText"
import { useSelector, useDispatch } from 'react-redux'
import { setHeroFloatingText, setHeroHp, setHeroStatus, setNextRound } from "../../app/features/fight/fightSlice"

export default function Enemy({ enemy }) {

    const floatingText = useSelector(state => state.fight.enemy.floatingText)
    const heroes = useSelector(state => state.fight.heroes)
    const [floatingTextEl, setFloatingTextEl] = useState(null)
    const [enemyTookDamage, setEnemyTookDamage] = useState(false)
    const dispatch = useDispatch()

    const attackRandomHero = function () {
        const hero = heroes[Math.floor(Math.random() * 3)]
        const heroHpAfterHit = Math.max(0, hero.hp - enemy.damage)
        dispatch(setHeroHp({ heroId: hero.id, value: heroHpAfterHit }))
        const effectiveDamage = hero.hp - heroHpAfterHit
        dispatch(setHeroFloatingText({ heroId: hero.id, value: { type: 'health', minusPlus: 'minus', value: effectiveDamage } }))
    }

    useEffect(() => {
        if (floatingText === null) {
            return
        }

        setEnemyTookDamage(true)
        setFloatingTextEl(<FloatingText key={Math.random()} type={floatingText.type} minusPlus={floatingText.minusPlus} value={floatingText.value} isEnemy={true} />)
        setTimeout(() => {
            setEnemyTookDamage(false)
        }, 300)

    }, [floatingText])

    useEffect(() => {
        let canPlay = true

        heroes.forEach(hero => {
            if (hero.status === 'alive') {
                canPlay = false
            }
        })

        if (!canPlay) {
            return
        }

        attackRandomHero()

        heroes.forEach(hero => {
            if (hero.status === 'played') {
                dispatch(setHeroStatus({ heroId: hero.id, value: "alive" }))
            }
        })
        dispatch(setNextRound())

    }, [heroes])

    return (<>
        <div className="enemy-hp-bar-container">
            <Progress min={enemy.hp} max={enemy.maxHp} type={'health'} />
        </div>
        <div className={"entity-pic enemy-pic" + (enemyTookDamage ? " enemy-took-dmg" : "")}>
            {floatingTextEl}
            <img src={'/public/images/enemy/down/' + enemy.name + '_1.png'} alt={enemy.name} />
        </div>
    </>)
}