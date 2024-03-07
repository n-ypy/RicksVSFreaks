export default function FightEndScreen({ fightStatus }) {
    const upperCaseStatus = fightStatus.toUpperCase()

    return (
        <>
            <div className="fight-status-screen">
                {(fightStatus === 'defeat') && <img src="/src/assets/images/defeat.png" />}
                {(fightStatus === 'victory') && <img src="/src/assets/images/victory.png" />}
                <div className="fight-status-text"> {upperCaseStatus}</div>
            </div>
        </>
    )
}