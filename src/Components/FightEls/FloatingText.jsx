import { HealIcon, HealthIcon, EnergyIcon } from "../Icons"

export default function FloatingText({ type, minusPlus, value, isEnemy }) {
    const icon = null
    const symbol = null

    switch (type) {
        case 'health':
            if (minusPlus === 'plus') {
                icon = <HealIcon />
                break;
            }
            icon = <HealthIcon />
            break;
        case 'energy':
            icon = <EnergyIcon />
            break;
    }

    switch (minusPlus) {
        case 'plus':
            symbol = '+'
            break;
        case 'minus':
            symbol = '-'
            break;
    }

    return (
        <>
            <div
                className={"lost-gain " + type + "-" + minusPlus + isEnemy ? "enemy-lost-gain" : ""}
            >
                {symbol} {value} {icon}
            </div>
        </>
    )
}