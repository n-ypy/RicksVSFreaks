import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FloatingText from "./FloatingText"
import { setHeroStatus } from "../../app/features/fight/fightSlice"
import getImageUrl from "../../utils/getImageUrl.js"

export default function Hero({ selectedHero, hero, index }) {

    const [floatingTextEl, setFloatingTextEl] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (hero.floatingText === null) {
            return
        }

        setFloatingTextEl(<FloatingText key={Math.random()} type={hero.floatingText.type} minusPlus={hero.floatingText.minusPlus} value={hero.floatingText.value} isEnemy={false} />)
    }, [hero.floatingText])

    useEffect(() => {
        if (hero.hp <= 0) {
            dispatch(setHeroStatus({ heroId: hero.id, value: 'dead' }))
        }
    }, [hero.hp])

    return (
        <>
            <div
                className={(selectedHero && selectedHero.name === hero.name ? 'hero-pic move-hero-' + index : 'hero-pic move-back-' + index) + (hero.status === 'dead' ? ' hero-dead' : '')}
                key={hero.name + '_1.png'}
                style={{
                    "--hero-pic": `url("${getImageUrl("hero/up/" + hero.name + "_1.png")}")`,
                    "--hero-up-1": `url("${getImageUrl("hero/up/" + hero.name + "_1.png")}")`,
                    "--hero-up-2": `url("${getImageUrl("hero/up/" + hero.name + "_2.png")}")`,
                    "--hero-up-3": `url("${getImageUrl("hero/up/" + hero.name + "_3.png")}")`,
                    "--hero-down-1": `url("${getImageUrl("hero/down/" + hero.name + "_1.png")}")`,
                    "--hero-down-2": `url("${getImageUrl("hero/down/" + hero.name + "_2.png")}")`,
                    "--hero-down-3": `url("${getImageUrl("hero/down/" + hero.name + "_3.png")}")`,
                    "--hero-side-1": `url("${getImageUrl("hero/side/" + hero.name + "_1.png")}")`,
                    "--hero-side-2": `url("${getImageUrl("hero/side/" + hero.name + "_2.png")}")`,
                    "--hero-side-3": `url("${getImageUrl("hero/side/" + hero.name + "_3.png")}")`,
                }}
            >
                {floatingTextEl}
            </div>
        </>
    )
}