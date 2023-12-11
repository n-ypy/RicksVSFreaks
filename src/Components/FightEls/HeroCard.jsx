import { EnergyIcon, HealthIcon } from "../Icons"
import Progress from "./Progress"

export default function HeroCard({ hero, toggleHeroSelect }) {
    return (
        <>
            <div className="hero-card" onClick={() => toggleHeroSelect(hero)}>
                <div className="hero-img-bar-wrapper">
                    <img src={"/public/images/hero/front/" + hero.name + ".png"} alt={hero.name} />
                </div>
                <div className="hero-hp-bar-wrapper">
                    <Progress min={hero.hp} max={hero.maxHp} type={'health'} />
                    <HealthIcon />
                </div>
                <div className="hero-energy-bar-wrapper">
                    <Progress min={hero.energy} max={hero.maxEnergy} type={'energy'} />
                    <EnergyIcon />
                </div>
            </div>
        </>
    )
}