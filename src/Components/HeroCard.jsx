import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';



export default function HeroCard({ heroIndex }) {

    const hero = useSelector(state => state.fight.heroes[heroIndex])

    const heroHp = useRef(hero.hp)

    const [heroTookDamage, setHeroTookDamage] = useState(false)

    useEffect(() => {
        if(hero.hp < heroHp.current) {
                setHeroTookDamage(true)
        }
        heroHp.current = hero.hp
        setTimeout(() => {
            setHeroTookDamage(false)
        }, 1000);
    }, [hero.hp])

    console.log(hero.name, heroHp.current)

    return (
        <div key={hero.id} className={"col-sm-3 card center" + (heroTookDamage && " took-damage")} id={`joueur${hero.id}`} style={{backgroundColor: hero.alrdyPlayed && 'transparent'}}>

            <div className="card-body text-center" >
                <h5 className="card-title">{hero.name}</h5>
                <ProgressBar hp={hero.hp} hpMax={hero.hpMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar hp={hero.mana} hpMax={hero.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    {hero.hp > 0 &&
                        <div >
                            <ButtonCapacity hero={hero} actionName={'heal'} actionValue={5}  actionCost={5} />
                            <ButtonCapacity hero={hero} actionName={'restoreMana'} actionValue={5} actionCost={0}/>
                            <ButtonCapacity hero={hero} actionName={'hit'} actionValue={5} actionCost={5} />
                            <ButtonCapacity hero={hero} actionName={'hit'} actionValue={10} actionCost={11} />
                        </div>}

                </div >
            </div >

        </div >
    )
}
