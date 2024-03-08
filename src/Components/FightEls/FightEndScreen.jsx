import getImageUrl from "../../utils/getImageUrl.js"

export default function FightEndScreen({ fightStatus }) {
    const upperCaseStatus = fightStatus.toUpperCase()

    return (
        <>
            <div className="fight-status-screen">
                {(fightStatus === 'defeat') && <img src={getImageUrl("defeat.png")} />}
                {(fightStatus === 'victory') && <img src={getImageUrl("victory.png")} />}
                <div className="fight-status-text"> {upperCaseStatus}</div>
            </div>
        </>
    )
}