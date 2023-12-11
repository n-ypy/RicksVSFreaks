import { useSelector } from "react-redux";

export default function RoundIndicator() {
    const round = useSelector((state) => state.fight.round)

    return (
        <>
            <div className="round-indicator-container">
                <div className="round-indicator">Round {round}</div>
            </div>
        </>
    )
}