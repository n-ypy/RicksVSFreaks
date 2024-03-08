import getImageUrl from "../../utils/getImageUrl.js"

export default function SelectedHeroesIndicator({ selectedHeroes }) {
    return (
        <>
            <div className='selected-heroes'>
                {selectedHeroes.map((hero, index) => (
                    <div key={index * 3}>
                        {
                            hero ? <img className='animate-hero-selected' src={getImageUrl('hero/icon/' + hero.name + '.png')} alt={hero.name} />
                                : <img src={getImageUrl("hero/icon/Default.png")} alt="defaultIcon" />
                        }
                    </div>
                ))}
            </div>
        </>
    )
}