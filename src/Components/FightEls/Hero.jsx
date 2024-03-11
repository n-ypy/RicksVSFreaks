import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import FloatingText from "./FloatingText"
import { setHeroStatus } from "../../app/features/fight/fightSlice"
import getImageUrl from "../../utils/getImageUrl.js"

export default function Hero({ selectedHero, hero, index }) {

    const [floatingTextQueue, setFloatingTextQueue] = useState([])
    const [heroTookDamage, setHeroTookDamage] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (hero.floatingText === null) {
            return
        }

        if (hero.floatingText.minusPlus === 'minus' && hero.floatingText.type === 'health') {
            setHeroTookDamage(true)
            setTimeout(() => {
                setHeroTookDamage(false)
            }, 300)
        }

        setFloatingTextQueue(prevQueue => [...prevQueue, {
            key: Math.random(),
            type: hero.floatingText.type,
            minusPlus: hero.floatingText.minusPlus,
            value: hero.floatingText.value,
            isEnemy: false
        }])
    }, [hero.floatingText])

    useEffect(() => {
        if (hero.hp <= 0) {
            dispatch(setHeroStatus({ heroId: hero.id, value: 'dead' }))
        }
    }, [hero.hp])

    const removeFloatingText = () => {
        setFloatingTextQueue(prevQueue => {
            const [, ...newQueue] = prevQueue
            return newQueue
        })
    }

    return (
        <>
            <div
                className={(selectedHero && selectedHero.name === hero.name ? 'hero-pic move-hero-' + index : 'hero-pic move-back-' + index) + (hero.status === 'dead' ? ' hero-dead' : '') + (heroTookDamage ? " hero-took-dmg" : "")}
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
                {floatingTextQueue.map((floatingText, index) => (
                    <FloatingText
                        key={floatingText.key}
                        type={floatingText.type}
                        minusPlus={floatingText.minusPlus}
                        value={floatingText.value}
                        isEnemy={floatingText.isEnemy}
                        onAnimationEnd={index === 0 ? removeFloatingText : null}
                    />
                ))}
            </div>
        </>
    )
}
