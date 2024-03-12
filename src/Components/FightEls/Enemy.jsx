import { useEffect, useState } from "react"
import Progress from "./Progress"
import FloatingText from "./FloatingText"
import { useSelector, useDispatch } from 'react-redux'
import { setHeroEnergy, setHeroFloatingText, setHeroHp, setHeroStatus, setNextRound } from "../../app/features/fight/fightSlice"
import getImageUrl from "../../utils/getImageUrl.js"
import { HealthIcon } from "../Icons.jsx"

export default function Enemy({ enemy, canAttack, setCanAttack }) {

    const floatingText = useSelector(state => state.fight.enemy.floatingText)
    const heroes = useSelector(state => state.fight.heroes)
    const [floatingTextEl, setFloatingTextEl] = useState(null)
    const [enemyTookDamage, setEnemyTookDamage] = useState(false)
    const [enemyAttacking, setEnemyAttacking] = useState(false)
    const dispatch = useDispatch()

    const attackRandomHero = function () {

        const hero = heroes[Math.floor(Math.random() * 4)]
        if (hero.status === 'dead') {
            attackRandomHero()
            return
        }
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
        if (canAttack) {
            console.log('enemyCanAttack')
            setCanAttack(false)
            attackRandomHero()
            setEnemyAttacking(true)
            dispatch(setNextRound())
            setTimeout(() => {
                setEnemyAttacking(false)
            }, 333)
        }
    }, [canAttack])


    return (<>
        <div className="enemy-hp-bar-container">
            <HealthIcon className={'hp-icon'} />
            <Progress min={enemy.hp} max={enemy.maxHp} type={'health'} />
        </div>
        <div className={"entity-pic enemy-pic" + (enemyTookDamage ? " enemy-took-dmg" : "")}>
            {floatingTextEl}
            <img src={enemyTookDamage ? getImageUrl("enemy/down/" + enemy.name + "_2.png") : (enemyAttacking ? getImageUrl("enemy/down/" + enemy.name + "_3.png") : getImageUrl("enemy/down/" + enemy.name + "_1.png"))} alt={enemy.name} />
        </div>
    </>)
}