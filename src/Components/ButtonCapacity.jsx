import { useSelector, useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../app/features/fight/fightSlice'


export default function ButtonCapacity({ player }) {
    const dispatch = useDispatch()

    return (
        <button 
        type="button" 
        onClick={() => {
            dispatch(hitMonster(5))
            dispatch(hitBack(player.id))
        }} 
            className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
}