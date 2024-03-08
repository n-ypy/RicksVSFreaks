import { CooldownIcon, DeadIcon, EnergyIcon, HealthIcon } from "../Icons"
import Progress from "./Progress"
import getImageUrl from "../../utils/getImageUrl.js"


export default function HeroCard({ hero, toggleHeroSelect, isSelected }) {


    return (
        <>
            <div className={"hero-card" + ((hero.status === "dead") ? ' grayscale-one' : '') + (isSelected ? ' selected-hero-card' : '')} onClick={() => toggleHeroSelect(hero)}>
                <div className="hero-img-container-wrapper">
                    <div className={"hero-img-container" + ((hero.status === "played") ? ' grayscale-one' : '')}>
                        
                        <img src={getImageUrl("hero/front/" + hero.name + ".png")} alt={hero.name} />
                    </div>
                </div>
                <div className="hero-card-name-status-container">
                    {hero.status === "played" ? <CooldownIcon /> : ''}
                    {hero.status === "dead" ? <DeadIcon /> : ''}
                    <div className="hero-card-name">{hero.name}</div>
                </div>
                <div className="hero-hp-bar-wrapper">
                    <Progress min={hero.hp} max={hero.maxHp} type={'health'} />
                    {/* <HealthIcon className={'hp-icon'} /> */}
                </div>
                <div className="hero-energy-bar-wrapper">
                    <Progress min={hero.energy} max={hero.maxEnergy} type={'energy'} />
                    {/* <EnergyIcon className={'energy-icon'} /> */}
                </div>
            </div>
        </>
    )
}