import { useSelector } from "react-redux";
import "../styles/Fight.css";
import Progress from "./FightEls/Progress";
import RoundIndicator from "./FightEls/RoundIndicator";
import "../styles/Fog.css"
import Fog from "./FightEls/Fog";

export default function Fight() {
    const enemy = useSelector((state) => state.fight.enemy)
    const heroes = useSelector((state) => state.fight.heroes)


    console.log(enemy)
    return (
        <>
            <div className="fight-page">
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
                        {heroes.map(hero => <img key={hero.name + '_1.png'} src={'/public/images/hero/up/' + hero.name + '_1.png'} alt={hero.name} />)}
                    </div>
                </div>
            </div>
        </>
    )

}