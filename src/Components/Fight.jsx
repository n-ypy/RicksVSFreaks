import { useSelector } from "react-redux";
import "../styles/Fight.css";
import Progress from "./FightEls/Progress";
import RoundIndicator from "./FightEls/RoundIndicator";
import "../styles/Fog.css"
import Fog from "./FightEls/Fog";
import HeroCard from "./FightEls/HeroCard";
import "../styles/Animations.css";
import { useEffect, useState } from "react";
import Abilities from "./FightEls/Abilities";

export default function Fight() {
    const enemy = useSelector((state) => state.fight.enemy)
    const heroes = useSelector((state) => state.fight.heroes)
    const [selectedHero, setSelectedHero] = useState(null)
    const [rootShit, setRootShit] = useState(null)

    useEffect(() => {

    })

    const toggleHeroSelect = function (hero) {
        if (!selectedHero || selectedHero.name !== hero.name) {
            setSelectedHero(hero)
            setRootShit({
                "--selected-hero-up-1": `url("/public/images/hero/up/${hero.name}_1.png")`,
                "--selected-hero-up-2": `url("/public/images/hero/up/${hero.name}_2.png")`,
                "--selected-hero-up-3": `url("/public/images/hero/up/${hero.name}_3.png")`,
                "--selected-hero-down-1": `url("/public/images/hero/down/${hero.name}_1.png")`,
                "--selected-hero-down-2": `url("/public/images/hero/down/${hero.name}_2.png")`,
                "--selected-hero-down-3": `url("/public/images/hero/down/${hero.name}_3.png")`,
                "--selected-hero-side-1": `url("/public/images/hero/side/${hero.name}_1.png")`,
                "--selected-hero-side-2": `url("/public/images/hero/side/${hero.name}_2.png")`,
                "--selected-hero-side-3": `url("/public/images/hero/side/${hero.name}_3.png")`,
            })
            return
        }
        setSelectedHero(null)
        return
    }

    return (
        <>
            <div className="fight-page" style={rootShit}>
                <div className="battlefield">
                    <Fog />
                    <RoundIndicator />
                    <div className="enemy-hp-bar-container">
                        <Progress min={enemy.hp} max={enemy.maxHp} type={'health'} />
                    </div>
                    <div className="entity-pic enemy-pic">
                        <img src={'/public/images/enemy/down/' + enemy.name + '_1.png'} alt={enemy.name} />
                    </div>
                    <div className="entity-pic heroes-pic">
                    {/* {heroes.map((hero, index) => <img className={selectedHero && selectedHero.name === hero.name ? 'move-hero-' + index : ''} key={hero.name + '_1.png'} src={'/public/images/hero/up/' + hero.name + '_1.png'} alt={hero.name} />)} */}
                        {heroes.map((hero, index) => <div className={selectedHero && selectedHero.name === hero.name ? 'hero-pic move-hero-' + index : 'hero-pic'} key={hero.name + '_1.png'} style={{"--hero-pic": `url("/public/images/hero/up/${hero.name}_1.png")`}}> </div>)}
                    </div>
                </div>

                <div className="spell-bar">
                    {selectedHero && <Abilities />}
                </div>
                <div className="heroes-row">
                    {heroes.map(hero => <HeroCard key={hero.name} hero={hero} toggleHeroSelect={toggleHeroSelect} />)}
                </div>
            </div>
        </>
    )

}