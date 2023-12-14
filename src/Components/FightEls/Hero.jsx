export default function Hero({ selectedHero, hero, index }) {

    return (
        <>
            <div
                className={selectedHero && selectedHero.name === hero.name ? 'hero-pic move-hero-' + index : 'hero-pic move-back-' + index}
                key={hero.name + '_1.png'}
                style={{
                    "--hero-pic": `url("/public/images/hero/up/${hero.name}_1.png")`,
                    "--hero-up-1": `url("/public/images/hero/up/${hero.name}_1.png")`,
                    "--hero-up-2": `url("/public/images/hero/up/${hero.name}_2.png")`,
                    "--hero-up-3": `url("/public/images/hero/up/${hero.name}_3.png")`,
                    "--hero-down-1": `url("/public/images/hero/down/${hero.name}_1.png")`,
                    "--hero-down-2": `url("/public/images/hero/down/${hero.name}_2.png")`,
                    "--hero-down-3": `url("/public/images/hero/down/${hero.name}_3.png")`,
                    "--hero-side-1": `url("/public/images/hero/side/${hero.name}_1.png")`,
                    "--hero-side-2": `url("/public/images/hero/side/${hero.name}_2.png")`,
                    "--hero-side-3": `url("/public/images/hero/side/${hero.name}_3.png")`,
                }}
            >
            </div>
        </>
    )
}