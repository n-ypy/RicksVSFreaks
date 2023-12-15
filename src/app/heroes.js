const heroes =
    [
        {
            id: 0,
            name: 'BethClone',
            displayName: 'Beth Clone',
            role: 'Fighter',
            hp: 262,
            maxHp: 262,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 43,
            damage: 18,
            heal: 12,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 30,
                description: 'Deals 57 damage.',
                action: (heroes, dispatch, FightSliceActions, enemyHp, hero) => {
                    const enemyHpAfterHit = Math.max(0, enemyHp - 57)
                    dispatch(FightSliceActions.setEnemyHp({ value: enemyHpAfterHit }))
                    const effectiveDamage = enemyHp - enemyHpAfterHit
                    dispatch(FightSliceActions.setEnemyFloatingText({ value: { type: 'health', minusPlus: 'minus', value: effectiveDamage } }))
                }
            },
            passiveAbility: {
                description: '10% chance attack power doubles.'
            }
        },
        {
            id: 2,
            name: 'CommanderRick',
            displayName: 'Commander Rick',
            role: 'Support',
            hp: 340,
            maxHp: 340,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 55,
            damage: 11,
            heal: 19,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 27,
                description: 'Halves enemy damage for one turn.',
            },
            passiveAbility: {
                description: 'Increases team damage by 5%.'
            }
        },
        {
            id: 3,
            name: 'GotronSummer',
            displayName: 'Gotron Summer',
            role: 'Healer',
            hp: 275,
            maxHp: 275,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 120,
            damage: 9,
            heal: 23,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 100,
                description: 'Revives teammate at 50% health.',
                action: (heroes, dispatch, FightSliceActions, enemyHp, hero) => {
                    let i = 0;
                    heroes.forEach(hero => {
                        if (i === 0 && hero.status === 'dead') {
                            i++
                            const healthAfterHeal = Math.floor(hero.maxHp / 2)
                            dispatch(FightSliceActions.setHeroHp({ heroId: hero.id, value: healthAfterHeal }))
                            dispatch(FightSliceActions.setHeroStatus({ heroId: hero.id, value: 'alive' }))
                            dispatch(FightSliceActions.setHeroFloatingText({ heroId: hero.id, value: { type: 'health', minusPlus: 'plus', value: healthAfterHeal } }))
                        }
                    })
                }
            },
            passiveAbility: {
                description: 'Boosts team\'s healing by 10%.'
            }
        },
        {
            id: 4,
            name: 'MortyPhantom',
            displayName: 'Morty Phantom',
            role: 'Support',
            hp: 220,
            maxHp: 220,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 60,
            damage: 10,
            heal: 10,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 45,
                description: 'Grants 10 energy to everyone.',
                action: (heroes, dispatch, FightSliceActions, enemyHp, hero) => {
                    heroes.forEach(hero => {
                        if (hero.status !== 'dead') {
                            const energyAfterEnergyRestore = Math.min(hero.maxEnergy, hero.energy + 10)
                            if (energyAfterEnergyRestore > hero.energy) {
                                dispatch(FightSliceActions.setHeroEnergy({ heroId: hero.id, value: energyAfterEnergyRestore }))
                                const energyRestored = energyAfterEnergyRestore - hero.energy
                                dispatch(FightSliceActions.setHeroFloatingText({ heroId: hero.id, value: { type: 'energy', minusPlus: 'plus', value: energyRestored } }))
                            }
                        }
                    })
                }
            },
            passiveAbility: {
                description: 'Dodges attacks with 20% probability.'
            }
        },
        {
            id: 5,
            name: 'MortyRick',
            displayName: 'Morty Rick',
            role: 'Support',
            hp: 305,
            maxHp: 305,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 66,
            damage: 10,
            heal: 17,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 33,
                description: '30% damage shield to allies for two turns.',
            },
            passiveAbility: {
                description: 'Grants 2 extra energy to allies with 15% possibility per action.'
            }
        },
        {
            id: 6,
            name: 'MrNimbus',
            displayName: 'Mr Nimbus',
            role: 'Healer',
            hp: 267,
            maxHp: 267,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 40,
            damage: 8,
            heal: 22,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 33,
                description: 'Heals everyone for 70 health.',
                action: (heroes, dispatch, FightSliceActions, enemyHp, hero) => {
                    heroes.forEach(hero => {
                        if (hero.status !== 'dead') {
                            const healthAfterHeal = Math.min(hero.maxHp, hero.hp + 70)
                            if (healthAfterHeal > hero.hp) {
                                dispatch(FightSliceActions.setHeroHp({ heroId: hero.id, value: healthAfterHeal }))
                                const healed = healthAfterHeal - hero.hp
                                dispatch(FightSliceActions.setHeroFloatingText({ heroId: hero.id, value: { type: 'health', minusPlus: 'plus', value: healed } }))
                            }
                        }
                    })
                }

            },
            passiveAbility: {
                description: 'Gains 3 energy when damaged.'
            }
        },
        {
            id: 7,
            name: 'OriginalJerry',
            displayName: 'Original Jerry',
            role: 'Fighter',
            hp: 280,
            maxHp: 280,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 50,
            damage: 20,
            heal: 10,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 28,
                description: 'Inflicts 60 damage.',
                action: (heroes, dispatch, FightSliceActions, enemyHp, hero) => {
                    const enemyHpAfterHit = Math.max(0, enemyHp - 60)
                    dispatch(FightSliceActions.setEnemyHp({ value: enemyHpAfterHit }))
                    const effectiveDamage = enemyHp - enemyHpAfterHit
                    dispatch(FightSliceActions.setEnemyFloatingText({ value: { type: 'health', minusPlus: 'minus', value: effectiveDamage } }))
                }
            },
            passiveAbility: {
                description: '10% chance to absorb incoming damage.'
            }
        },
        {
            id: 8,
            name: 'PickleRick',
            displayName: 'Pickle Rick',
            role: 'Fighter',
            hp: 310,
            maxHp: 310,
            energy: 0,
            energyRegen: 5,
            maxEnergy: 48,
            damage: 22,
            heal: 10,
            status: 'alive',
            floatingText: null,
            activeAbility: {
                energyCost: 30,
                description: 'Boosts damage by 50% and blocks 20% for 2 turns.',
            },
            passiveAbility: {
                description: '25% probability of counterattack when hit.'
            }
        }
    ]

export default heroes