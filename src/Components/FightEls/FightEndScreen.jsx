export default function FightEndScreen({ fightStatus }) {
    const upperCaseStatus = fightStatus.toUpperCase()

    return (
        <>
            <div className="fight-status-screen">
                {(fightStatus === 'defeat') && <img src="/public/images/defeat.png" />}
                {(fightStatus === 'victory') && <img src="/public/images/victory.png" />}
                <div className="fight-status-text"> {upperCaseStatus}</div>
            </div>
        </>
    )
}