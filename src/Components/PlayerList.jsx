import PlayerCard from './PlayerCard';
import { useSelector, useDispatch } from 'react-redux';


export default function PlayerList() {
    const players = useSelector(state => state.fight.players)
    let playersHp = 0

  const playerCards = players.map((player, index) => {
      playersHp += player.pv
      return <PlayerCard key={player.id} player={player} playerIndex={index} />
    })
console.log(playersHp)
    return (
      <div className='row'>
        {(playersHp > 0) ? playerCards : <div>"You lost"</div>}
      </div>
    )
}