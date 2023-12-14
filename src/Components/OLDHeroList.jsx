import HeroCard from './HeroCard';
import { useSelector, useDispatch } from 'react-redux';


export default function PlayerList() {
    const heroes = useSelector(state => state.fight.heroes)
    let heroesTotalHp = 0

  const heroCards = heroes.map((hero, index) => {
      heroesTotalHp += hero.hp
      return <HeroCard key={hero.id} heroIndex={index} />
    })

    return (
      <div className='row'>
        {(heroesTotalHp > 0) ? heroCards : <div>"You lost"</div>}
      </div>
    )
}