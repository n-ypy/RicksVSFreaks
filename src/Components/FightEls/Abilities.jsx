import { useSelector, useDispatch } from 'react-redux';
import { setHeroHp, setHeroEnergy, setHeroStatus, setEnemyHp, setEnemyFloatingText, setHeroFloatingText } from '/src/app/features/fight/fightSlice'
import * as FightSliceActions from '/src/app/features/fight/fightSlice'
import { DamageIcon, EnergyIcon, HealIcon } from '../Icons';

export default function Abilities({ hero, toggleHeroSelect }) {

    const heroes = useSelector(state => state.fight.heroes)

    if (hero.status !== 'alive') {
        return
    }

    const enemyHp = useSelector((state) => state.fight.enemy.hp)
    const dispatch = useDispatch()

    const heroAttack = function () {
        const enemyHpAfterHit = Math.max(0, enemyHp - hero.damage)
        dispatch(setEnemyHp({ value: enemyHpAfterHit }))
        dispatch(setHeroStatus({ heroId: hero.id, value: "played" }))
        const effectiveDamage = enemyHp - enemyHpAfterHit
        dispatch(setEnemyFloatingText({ value: { type: 'health', minusPlus: 'minus', value: effectiveDamage } }))
        endTurn()
    }

    const heroHeal = function () {
        const heroHpAfterHeal = Math.min(hero.maxHp, hero.hp + hero.heal)
        dispatch(setHeroHp({ heroId: hero.id, value: heroHpAfterHeal }))
        const effectiveHeal = heroHpAfterHeal - hero.hp
        dispatch(setHeroFloatingText({ heroId: hero.id, value: { type: 'health', minusPlus: 'plus', value: effectiveHeal } }))
        endTurn()
    }

    const useActiveAbility = function () {
        if(!canUseAbility()) {
            return
        }
        const heroEnergyAfterAbilityUse = hero.energy - hero.activeAbility.energyCost
        dispatch(setHeroEnergy({ heroId: hero.id, value: heroEnergyAfterAbilityUse }))
        const energyLost = hero.energy - heroEnergyAfterAbilityUse
        dispatch(setHeroFloatingText({ heroId: hero.id, value: { type: 'energy', minusPlus: 'minus', value: energyLost } }))
        hero.activeAbility.action(heroes, dispatch, FightSliceActions, enemyHp, hero)
        endTurn()
    }

    const endTurn = function () {
        toggleHeroSelect(hero)
        dispatch(setHeroStatus({ heroId: hero.id, value: "played" }))
    }

    const canUseAbility = function() {
        return hero.energy >= hero.activeAbility.energyCost
    }

    return (
        <>
            <button className="ability-bar-btn attack-btn" onClick={() => heroAttack()}>ATTACK &nbsp;{hero.damage} <DamageIcon /></button>
            <button className="ability-bar-btn heal-btn" onClick={() => heroHeal()} disabled={(hero.hp >= hero.maxHp)}>HEAL &nbsp;{hero.heal} <HealIcon /></button>
            <button className="ability-bar-btn ability-btn" onClick={() => useActiveAbility()} disabled={(!canUseAbility())}>ABILITY &nbsp;-{hero.activeAbility.energyCost} <EnergyIcon /></button>
        </>
    )
}