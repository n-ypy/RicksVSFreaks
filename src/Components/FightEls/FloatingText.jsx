import { HealIcon, HealthIcon, EnergyIcon } from "../Icons"

export default function FloatingText({ type, minusPlus, value, isEnemy }) {
    let icon = null
    let symbol = null

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
                className={"floating-text " + type + "-" + minusPlus + (isEnemy ? " enemy-floating-text" : "")}
            >
                {symbol} {value} {icon}
            </div>
        </>
    )
}