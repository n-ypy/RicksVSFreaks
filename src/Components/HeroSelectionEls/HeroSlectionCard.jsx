import { useState } from "react";
import { useEffect } from "react"
import * as Icons from '../Icons'

export default function HeroSelectionCards({ hero, toggleHeroSelect}) {

    const [ roleIcon, setRoleIcon ] = useState(null)
    const [ isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        switch (hero.role) {
            case 'Fighter':
                setRoleIcon(<Icons.FighterIcon className={'fighter-role-icon'} />)
                break
            case 'Healer':
                setRoleIcon(<Icons.HealerIcon className={'healer-role-icon'} />)
                break
            case 'Support':
                setRoleIcon(<Icons.SupportIcon className={'support-role-icon'} />)
                break
        }
    }, [])

    return (
        <>
            <div className={`hero-selection-card${isSelected ? ' selected-hero' : ''}`} onClick={() => setIsSelected(toggleHeroSelect(hero))}>
                <div className='hero-selection-card-description'>
                    <button type='button' className={`hero-selection-btn ${isSelected ? 'btn-remove-hero' : 'btn-add-hero'}`}>{isSelected ? '-' : '+'}</button>
                    <div className='hero-description-wrapper'>
                        <div className='hero-description'>
                            <div className='hero-description-name'>{hero.displayName}</div>
                            <div className='hero-description-role'>
                                {roleIcon}
                                <div>{hero.role}</div>
                            </div>
                            <div className='hero-description-stats'>
                                <div className='hero-description-hp'>
                                    <Icons.HealthIcon className={'hero-description-stat-icon hp-icon'} />
                                    <div>{hero.maxHp}</div>
                                </div>
                                <div className='hero-description-energy'>
                                    <Icons.EnergyIcon className={'hero-description-stat-icon energy-icon'} />
                                    <div>{hero.maxEnergy}</div>
                                </div>
                                <div className='hero-description-damage'>
                                    <Icons.DamageIcon className={'hero-description-stat-icon damage-icon'} />
                                    <div>{hero.damage}</div>
                                </div>
                                <div className='hero-description-heal'>
                                    <Icons.HealIcon className={'hero-description-stat-icon heal-icon'} />
                                    <div>{hero.heal}</div>
                                </div>
                            </div>
                            <div className='hero-description-ability-name'>
                                <Icons.ActiveAbilityIcon />
                                <div>Active Ability</div>
                            </div>
                            <div className='hero-description-ability-cost'>
                                <div>Cost:&nbsp;</div>
                                <div>{hero.activeAbility.energyCost}</div>
                                <Icons.EnergyIcon className={'energy-icon'} />
                            </div>
                            <div className='hero-description-ability-description'>
                                <div>{hero.activeAbility.description}</div>
                            </div>
                            <div className='hero-description-ability-name'>
                                <Icons.PassiveAbilityIcon />
                                <div>Passive Ability</div>
                            </div>
                            <div className='hero-description-ability-description'>
                                {hero.passiveAbility.description}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={'/public/images/hero/front/' + hero.name + '.png'} alt={hero.displayName} />
            </div>
        </>
    )
}