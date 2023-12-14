import { useEffect, useState } from "react"
import Progress from "./Progress"
import FloatingText from "./FloatingText"
import { useSelector, useDispatch } from 'react-redux'
import { setHeroEnergy, setHeroFloatingText, setHeroHp } from "../../app/features/fight/fightSlice"

export default function Enemy({ enemy, canAttack, setCanAttack }) {

    const floatingText = useSelector(state => state.fight.enemy.floatingText)
    const heroes = useSelector(state => state.fight.heroes)
    const [floatingTextEl, setFloatingTextEl] = useState(null)
    const [enemyTookDamage, setEnemyTookDamage] = useState(false)
    const dispatch = useDispatch()

    const attackRandomHero = function () {
        
        const hero = heroes[Math.floor(Math.random() * 3)]
        if(hero.status === 'dead'){
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
        if(canAttack) {
            setCanAttack(false)
            attackRandomHero()
        }
    }, [canAttack])


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