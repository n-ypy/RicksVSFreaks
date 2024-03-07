import "../assets/styles/Animations.css";
import "../assets/styles/Fight.css";
import "../assets/styles/Fog.css"
import RoundIndicator from "./FightEls/RoundIndicator";
import Fog from "./FightEls/Fog";
import HeroCard from "./FightEls/HeroCard";
import Abilities from "./FightEls/Abilities";
import Enemy from "./FightEls/Enemy";
import Hero from "./FightEls/Hero";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFightStatus, setHeroStatus, setHeroEnergy, setHeroFloatingText, setNextRound } from "../app/features/fight/fightSlice";
import FightEndScreen from "./FightEls/FightEndScreen";

export default function Fight() {
    const enemy = useSelector((state) => state.fight.enemy)
    const heroes = useSelector((state) => state.fight.heroes)
    const fightStatus = useSelector((state) => state.fight.status)
    const [selectedHero, setSelectedHero] = useState(null)
    const [enemyCanAttack, setEnemyCanAttack] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (enemy.hp === 0) {
            dispatch(setFightStatus({ value: 'victory' }))
            return
        }

        let defeat = true

        heroes.forEach(hero => ((hero.status !== 'dead') && (defeat = false)))

        if (defeat) {
            dispatch(setFightStatus({ value: 'defeat' }))
        }

    }, [heroes, enemy.hp])


    const toggleHeroSelect = function (hero) {
        if (hero.status !== 'alive') {
            return
        }

        if (!selectedHero || selectedHero.name !== hero.name) {
            setSelectedHero(hero)
            return
        }

        setSelectedHero(null)
        return
    }

    useEffect(() => {
        let enemyCanPlay = true

        heroes.forEach(hero => {
            if (hero.status === 'alive') {
                enemyCanPlay = false
            }
        })

        const heroAlive = heroes.findIndex(hero => hero.status !== 'dead')

        if (!enemyCanPlay || heroAlive == -1) {
            return
        }

        setEnemyCanAttack(true)

        heroes.forEach(hero => {
            if (hero.status === 'played') {
                dispatch(setHeroStatus({ heroId: hero.id, value: "alive" }))
                const energyAfterEnergyRestore = Math.min(hero.maxEnergy, hero.energy + hero.energyRegen)
                if (energyAfterEnergyRestore > hero.energy) {
                    dispatch(setHeroEnergy({ heroId: hero.id, value: energyAfterEnergyRestore }))
                    const energyRestored = energyAfterEnergyRestore - hero.energy
                    dispatch(setHeroFloatingText({ heroId: hero.id, value: { type: 'energy', minusPlus: 'plus', value: energyRestored } }))
                }
            }
        })
        dispatch(setNextRound())
    }, [heroes])

    return (
        <>
            {(fightStatus !== "fighting") && <FightEndScreen fightStatus={fightStatus} />}
            <div className={"fight-page" + (fightStatus !== "fighting" && " grayscale-one")}>
                <div className="battlefield">
                    <Fog />
                    <RoundIndicator />
                    <Enemy enemy={enemy} canAttack={enemyCanAttack} setCanAttack={setEnemyCanAttack} />
                    <div className="entity-pic heroes-pic">
                        {heroes.map((hero, index) => (
                            <Hero
                                key={hero.id}
                                selectedHero={selectedHero}
                                hero={hero}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="ability-bar">
                    {selectedHero && <Abilities hero={selectedHero} toggleHeroSelect={toggleHeroSelect} />}
                </div>
                <div className="heroes-row">
                    {heroes.map(hero => (
                        <HeroCard
                            key={hero.name}
                            hero={hero}
                            toggleHeroSelect={toggleHeroSelect}
                            isSelected={selectedHero && (selectedHero.name === hero.name)}
                        />
                    ))}
                </div>
            </div>
        </>
    )

}