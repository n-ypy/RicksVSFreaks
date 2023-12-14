import "../styles/Animations.css";
import "../styles/Fight.css";
import "../styles/Fog.css"
import RoundIndicator from "./FightEls/RoundIndicator";
import Fog from "./FightEls/Fog";
import HeroCard from "./FightEls/HeroCard";
import Abilities from "./FightEls/Abilities";
import Enemy from "./FightEls/Enemy";
import Hero from "./FightEls/Hero";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFightStatus } from "../app/features/fight/fightSlice";

export default function Fight() {
    const enemy = useSelector((state) => state.fight.enemy)
    const heroes = useSelector((state) => state.fight.heroes)
    const fightStatus = useSelector((state) => state.fight.status)
    const [selectedHero, setSelectedHero] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(enemy.hp === 0) {
            dispatch(setFightStatus({value: 'victory'}))
        }

        let defeat = true

        heroes.forEach(hero => ((hero.status !== 'dead') && (defeat = false)))

        if(defeat) {
            dispatch(setFightStatus({value: 'defeat'}))
        }
        
    },[heroes, enemy.hp])


    const toggleHeroSelect = function (hero) {
        if(hero.status !== 'alive'){
            return
        }

        if (!selectedHero || selectedHero.name !== hero.name) {
            setSelectedHero(hero)
            return
        }

        setSelectedHero(null)
        return
    }

    return (
        <>
            <div className={"fight-page" + (fightStatus !== "fighting" && " fight-page-fight-end")}>
                <div className="battlefield">
                    <Fog />
                    <RoundIndicator />
                    <Enemy enemy={enemy} />
                    <div className="entity-pic heroes-pic">
                        {heroes.map((hero, index) => <Hero key={hero.id} selectedHero={selectedHero} hero={hero} index={index} />)}
                    </div>
                </div>
                <div className="spell-bar">
                    {selectedHero && <Abilities hero={selectedHero} toggleHeroSelect={toggleHeroSelect} />}
                </div>
                <div className="heroes-row">
                    {heroes.map(hero => <HeroCard key={hero.name} hero={hero} toggleHeroSelect={toggleHeroSelect} />)}
                </div>
            </div>
        </>
    )

}