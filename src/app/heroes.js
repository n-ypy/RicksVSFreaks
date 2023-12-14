const heroes =
    [
        {
            name: 'BethClone',
            displayName: 'Beth Clone',
            role: 'Fighter',
            hp: 262,
            maxHp: 262,
            energy: 0,
            maxEnergy: 43,
            damage: 18,
            heal: 12,
            status: 'alive',
            activeAbility: {
                energyCost: 25,
                description: 'Deals 57 damage.',
            },
            passiveAbility: {
                description: '10% chance attack power doubles.'
            }
        },
        {
            name: 'CommanderRick',
            displayName: 'Commander Rick',
            role: 'Support',
            hp: 340,
            maxHp: 340,
            energy: 0,
            maxEnergy: 55,
            damage: 11,
            heal: 19,
            status: 'alive',
            activeAbility: {
                energyCost: 27,
                description: 'Halves enemy damage for one turn.',
            },
            passiveAbility: {
                description: 'Increases team damage by 5%.'
            }
        },
        {
            name: 'GotronSummer',
            displayName: 'Gotron Summer',
            role: 'Healer',
            hp: 275,
            maxHp: 275,
            energy: 0,
            maxEnergy: 120,
            damage: 9,
            heal: 23,
            status: 'alive',
            activeAbility: {
                energyCost: 120,
                description: 'Revives teammate at 50% health.',
            },
            passiveAbility: {
                description: 'Boosts team\'s healing by 10%.'
            }
        },
        {
            name: 'MortyPhantom',
            displayName: 'Morty Phantom',
            role: 'Support',
            hp: 220,
            maxHp: 220,
            energy: 0,
            maxEnergy: 60,
            damage: 10,
            heal: 10,
            status: 'alive',
            activeAbility: {
                energyCost: 50,
                description: 'Grants 10 energy to everyone.',
            },
            passiveAbility: {
                description: 'Dodges attacks with 20% probability.'
            }
        },
        {
            name: 'MortyRick',
            displayName: 'Morty Rick',
            role: 'Support',
            hp: 305,
            maxHp: 305,
            energy: 0,
            maxEnergy: 66,
            damage: 10,
            heal: 17,
            status: 'alive',
            activeAbility: {
                energyCost: 33,
                description: '30% damage shield to allies for two turns.',
            },
            passiveAbility: {
                description: 'Grants 2 extra energy to allies with 15% possibility per action.'
            }
        },
        {
            name: 'MrNimbus',
            displayName: 'Mr Nimbus',
            role: 'Healer',
            hp: 267,
            maxHp: 267,
            energy: 0,
            maxEnergy: 40,
            damage: 8,
            heal: 22,
            status: 'alive',
            activeAbility: {
                energyCost: 35,
                description: 'Heals everyone for 70 health.',
            },
            passiveAbility: {
                description: 'Gains 3 energy when damaged.'
            }
        },
        {
            name: 'OriginalJerry',
            displayName: 'Original Jerry',
            role: 'Fighter',
            hp: 280,
            maxHp: 280,
            energy: 0,
            maxEnergy: 50,
            damage: 20,
            heal: 10,
            status: 'alive',
            activeAbility: {
                energyCost: 30,
                description: 'Inflicts 60 damage.',
            },
            passiveAbility: {
                description: '10% chance to absorb incoming damage.'
            }
        },
        {
            name: 'PickleRick',
            displayName: 'Pickle Rick',
            role: 'Fighter',
            hp: 310,
            maxHp: 310,
            energy: 0,
            maxEnergy: 48,
            damage: 22,
            heal: 10,
            status: 'alive',
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