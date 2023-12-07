import '../styles/HeroSelection.css'
import '../styles/StarBackground.css'

export default function HeroSelection() {

    return (<>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className='hero-selection-page'>
            <div className='title-container'>
                <div className='title'>Ricks<span>vs</span>Freaks</div>
                <div className='title middle'> Ricks<span>vs</span>Freaks</div>
                <div className='title bottom'> Ricks<span>vs</span>Freaks</div>
            </div>
            <div className='selection-container'>
                {/* <div className='enemy-selection-container'>
                    <div className='enemy-overview-card'>
                        <img src="/public/images/enemy/Gazorpian/GazorpianFront.png" alt="" />
                    </div>
                </div> */}
                <div className='hero-selection'>
                    <div className='hero-selection-title'>BUILD YOUR TEAM</div>
                    <div className='hero-selection-card-container'>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Beth Clone</div>
                            <img src="/public/images/hero/BethClone/BethCloneFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Commander Rick</div>
                            <img src="/public/images/hero/CommanderRick/CommanderRickFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Gotron Suit Summer</div>
                            <img src="/public/images/hero/GotronSuitSummer/GotronSuitSummerFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Morty Phantom</div>
                            <img src="/public/images/hero/MortyPhantom/MortyPhantomFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Morty Rick</div>
                            <img src="/public/images/hero/MortyRick/MortyRickFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Mr Nimbus</div>
                            <img src="/public/images/hero/MrNimbus/MrNimbusFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Original Jerry</div>
                            <img src="/public/images/hero/OriginalJerry/OriginalJerryFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-nameplate'>Pickle Rick</div>
                            <img src="/public/images/hero/RatSuitPickleRick/RatSuitPickleRickFront.png" alt="" />
                        </div>
                    </div>
                    <div className='selected-heroes'>
                        <div className='selected-hero-4'>
                            <img src="/public/images/RickDefaultIcon.png" alt="" />
                        </div>
                        <div className='selected-hero-3'>
                            <img src="/public/images/RickDefaultIcon.png" alt="" />
                        </div>
                        <div className='selected-hero-2'>
                            <img src="/public/images/RickDefaultIcon.png" alt="" />
                        </div>
                        <div className='selected-hero-1'>
                            <img src="/public/images/hero/OriginalJerry/OriginalJerryIcon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}