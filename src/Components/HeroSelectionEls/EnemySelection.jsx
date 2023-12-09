export default function EnemySelection({ animationTrigger, enemies, selectedEnemy, selectEnemy }) {

    return (
        <div className={`enemy-selection-container${animationTrigger ? ' move-enemy-container' : ''}`}>
            <div className='hero-selection-title enemy-title'>{selectedEnemy.displayName}</div>
            <div className='enemy-overview-card'>
               <img key={selectedEnemy.name} src={"/public/images/enemy/front/" + selectedEnemy.name + ".png"} alt={selectedEnemy.name} />
            </div>
            <div className='enemy-select'>
                {enemies.map((enemy, index) => (
                    <div key={enemy.name} className={selectedEnemy.name === enemy.name ? 'selected-enemy' : ''} onClick={() => selectEnemy(index)}>
                        <img src={"/public/images/enemy/down/" + enemy.name + "_1.png"} alt={enemy.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}