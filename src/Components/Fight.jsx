import "../styles/Animations.css";
import "../styles/Fight.css";
import "../styles/Fog.css"
import RoundIndicator from "./FightEls/RoundIndicator";
import Fog from "./FightEls/Fog";
import HeroCard from "./FightEls/HeroCard";
import Abilities from "./FightEls/Abilities";
import Enemy from "./FightEls/Enemy";
import Hero from "./FightEls/Hero";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Fight() {
    const enemy = useSelector((state) => state.fight.enemy)
    const heroes = useSelector((state) => state.fight.heroes)
    const fightStatus = useSelector((state) => state.fight.status)
    const [selectedHero, setSelectedHero] = useState(null)

    useEffect(() => {

        return () => {}
    },[fightStatus])

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
                        {heroes.map((hero, index) => <Hero selectedHero={selectedHero} hero={hero} index={index} />)}
                    </div>
                </div>
                <div className="spell-bar">
                    {selectedHero && <Abilities hero={selectedHero} />}
                </div>
                <div className="heroes-row">
                    {heroes.map(hero => <HeroCard key={hero.name} hero={hero} toggleHeroSelect={toggleHeroSelect} />)}
                </div>
            </div>
        </>
    )

}