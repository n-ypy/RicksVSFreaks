import { useSelector, useDispatch } from 'react-redux';
import { setHeroHp, setHeroEnergy, setHeroStatus, setEnemyHp, setEnemyFloatingText } from '../app/features/fight/fightSlice'

export default function Abilities({ hero }) {

    if (hero.status !== 'alive') {
        return
    }

    const enemyHp = useSelector((state) => state.fight.enemy.hp)
    const dispatch = useDispatch()

    const heroAttack = function () {
        const enemyHpAfterHit = Math.min(0, enemyHp - hero.damage)
        dispatch(setEnemyHp({ value: enemyHpAfterHit }))
        dispatch(setHeroStatus({ value: "played" }))
        const effectiveDamage = enemyHp - enemyHpAfterHit
        dispatch(setEnemyFloatingText( { value: {type: 'health', minusPlus: 'minus', value: effectiveDamage} } ))
    }

    const heroHeal = function () {
        const heroHpAfterHeal = Math.min(hero.maxHp, hero.hp + hero.heal)
        dispatch(setHeroHp({ value: heroHpAfterHeal }))
        dispatch(setHeroStatus({ value: "played" }))
        const effectiveHeal = heroHpAfterHeal - hero.hp
        dispatch(setHeroFloatingText( { value: {type: 'health', minusPlus: 'plus', value: effectiveHeal} } ))
    }

    return (
        <>
            <button className="spell-bar-btn attack-btn" onClick={() => heroAttack()}>Attack</button>
            <button className="spell-bar-btn heal-btn" onClick={() => heroHeal()}>Heal</button>
            <button className="spell-bar-btn ability-btn">Ability</button>
        </>
    )
}