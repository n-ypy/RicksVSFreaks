import { createSlice } from '@reduxjs/toolkit'

const initialState = {
players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
],
monster: {
    id: 1,
    name: 'samsung',
    pv: 800,
    pvMax: 800,
}
}

export const fightSlice = createSlice({
name: 'fight',
initialState,
reducers: {
    hitMonster: (state, action) => {
        const damange = Math.min(state.monster.pv, action.payload)
        state.monster.pv -= damange
    },
    hitBack: (state, playerId) => {
        const playerIndex = state.players.findIndex(player => player.id === playerId.payload)
        let damage = Math.ceil(Math.random() * 1)
        damage = Math.min(state.players[playerIndex].pv, damage)
        state.players[playerIndex].pv -= damage
    }
},
})

export const { hitMonster, hitBack } = fightSlice.actions
export default fightSlice.reducer