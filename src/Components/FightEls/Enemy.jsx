import Progress from "./Progress";
export default function Enemy({ enemy }) {

    return (<>
        <div className="enemy-hp-bar-container">
            <Progress min={enemy.hp} max={enemy.maxHp} type={'health'} />
        </div>
        <div className="entity-pic enemy-pic boss-took-dmg">
            <img src={'/public/images/enemy/down/' + enemy.name + '_1.png'} alt={enemy.name} />
        </div>
    </>)
}