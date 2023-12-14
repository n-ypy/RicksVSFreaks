import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: null,
    enemy: null,
    round: 0,
    status: 'fighting'
}


function findHero(heroes, heroId) {
    return heroes.find(hero => hero.id === heroId)
} 

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        setEnemyAndHeroes: (state, action) => {
            state.heroes = action.payload.heroes
            state.enemy = action.payload.enemy
        },
        setEnemyHp: (state, action) => {
            state.enemy.hp = action.payload.value
        },
        setEnemyFloatingText: (state, action) => {
            state.enemy.floatingText = action.payload.value
        },
        setHeroHp: (state, action) => {
            const hero = findHero(state.heroes, action.payload.heroId)
            hero.hp = action.payload.value
        },
        setHeroEnergy: (state, action) => {
            const hero = findHero(state.heroes, action.payload.heroId)
            hero.energy = action.payload.value
        },
        setHeroStatus: (state, action) => {
            const hero = findHero(state.heroes, action.payload.heroId)
            hero.status = action.payload.value
        },
        setHeroFloatingText: (state, action) => {
            const hero = findHero(state.heroes, action.payload.heroId)
            hero.floatingText = action.payload.value
        },
        setNextRound: (state) => {
            state.round++
        },
        setFightStatus: (state, action) => {
            state.status = action.payload.value
        }
    },
})

export const { setFightStatus, setNextRound, setEnemyAndHeroes, setHeroHp, setHeroEnergy, setHeroStatus, setEnemyHp, setEnemyFloatingText, setHeroFloatingText } = fightSlice.actions
export default fightSlice.reducer