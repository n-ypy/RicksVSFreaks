import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: [
        { name: "John", hp: 100, hpMax: 100, mana: 30, manaMax: 30, id: 1, alrdyPlayed: false },
        { name: "Jack", hp: 100, hpMax: 100, mana: 30, manaMax: 30, id: 2, alrdyPlayed: false },
        { name: "Jessy", hp: 100, hpMax: 100, mana: 30, manaMax: 30, id: 3, alrdyPlayed: false },
        { name: "Jenny", hp: 100, hpMax: 100, mana: 30, manaMax: 30, id: 4, alrdyPlayed: false }
    ],
    enemy: {
        id: 1,
        name: 'samsung',
        hp: 800,
        hpMax: 800,
    },
    round: 0,
}


function hitEnemy(enemy, value) {
    const damage = Math.min(enemy.hp, value)
    enemy.hp -= damage
}

function healHero(hero, value) {
    hero.hp = Math.min(hero.hpMax, hero.hp + value)
}

function restoreHeroMana(hero, value) {
    hero.mana = Math.min(hero.manaMax, hero.mana + value)
    const damage = Math.min(hero.hp, value)
    hero.hp -= damage
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        heroTurn: (state, action) => {
            const heroIndex = state.heroes.findIndex(hero => hero.id === action.payload.heroId)

            const hero = state.heroes[heroIndex]
            const enemy = state.enemy
            const actionValue = action.payload.value
            const actionCost = action.payload.cost

            switch (action.payload.name) {
                case 'hit':
                    hitEnemy(enemy, actionValue)
                    break;
                case 'heal':
                    healHero(hero, actionValue)
                    break;
                case 'restoreMana':
                    restoreHeroMana(hero, actionValue)
                    break;
                default:
                    break;
            }

            hero.mana -= actionCost
            hero.alrdyPlayed = true
        },
        enemyTurn: (state, heroId) => {
            let canHit = true
            state.heroes.forEach(hero => {
                if (!hero.alrdyPlayed && (hero.hp > 0)) {
                    canHit = false
                }
            })

            if (canHit) {
                const heroIndex = state.heroes.findIndex(hero => hero.id === heroId.payload)
                const damage = Math.min(state.heroes[heroIndex].hp, (Math.ceil(Math.random() * 3) * 2))
                state.heroes[heroIndex].hp -= damage
                state.round++
                state.heroes.forEach((hero, index) => {
                    state.heroes[index].alrdyPlayed = false
                })
            } else if (Math.random() >= 0.5) {
                const randomHeroIndex = Math.floor(Math.random() * 4)
                const hero = state.heroes[randomHeroIndex]
                const damage = Math.min(hero.hp, Math.ceil(Math.random() * 3))
                hero.hp -= damage
            }
        }
    },
})

export const { heroTurn, enemyTurn } = fightSlice.actions
export default fightSlice.reducer