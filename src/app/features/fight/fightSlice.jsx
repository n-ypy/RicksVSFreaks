import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: null,
    enemy: null,
    round: 0,
    status: 'fighting'
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
        },
        setEnemyAndHeroes: (state, action) => {
            state.heroes = action.payload.heroes
            state.enemy = action.payload.enemy
        },
        setEnemyHp: (state, action) => {
            state.enemy.hp = action.payload.value
        },
        setEnemyFloatingText: (state, action) => {
            state.enemy.tookDamage = action.payload.value
        },
        setHeroHp: (state, action) => {
            state.heroes[action.payload.heroIndex].hp = action.payload.value
        },
        setHeroEnergy: (state, action) => {
            state.heroes[action.payload.heroIndex].energy = action.payload.value
        },
        setHeroStatus: (state, action) => {
            state.heroes[action.payload.heroIndex].status = action.payload.value
        },

    },
})

export const { setHeroHp, setHeroEnergy, setHeroStatus, setEnemyHp, setEnemyFloatingText } = fightSlice.actions
export default fightSlice.reducer