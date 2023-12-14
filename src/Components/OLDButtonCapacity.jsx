import { useSelector, useDispatch } from 'react-redux';
import { heroTurn, enemyTurn } from '../app/features/fight/fightSlice'


export default function ButtonCapacity({ hero, actionName, actionValue, actionCost }) {
    const dispatch = useDispatch()

    return (
        <button
            type="button"
            onClick={() => {
                dispatch(heroTurn({ value: actionValue, cost: actionCost, heroId: hero.id, name: actionName }))
                dispatch(enemyTurn(hero.id))
            }}
            className="btn btn-success material-tooltip-main "
            disabled={hero.alrdyPlayed || (actionCost > hero.mana)}
        >
            {actionName}
            <i className="fas fa-bomb"></i> {actionValue}
            <i className="fas fa-fire-alt"></i> - {actionCost}
        </button>
    )
}