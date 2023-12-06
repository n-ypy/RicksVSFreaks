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
            <div className='hero-selection-container'>
                <div className='hero-overview'>
                    <div className='selected-heroes-container'>
                        <div className='selected-heroes-title'>TEAM COMPOSITION</div>
                        <div className='selected-heroes'>
                            <div className='selected-hero-4'>
                                <img src="/public/images/RatSuitPickleRick/RatSuitPickleRickIcon.png" alt="" />
                            </div>
                            <div className='selected-hero-3'>
                                <img src="/public/images/MrNimbus/MrNimbusIcon.png" alt="" />
                            </div>
                            <div className='selected-hero-2'>
                                <img src="/public/images/MortyPhantom/MortyPhantomIcon.png" alt="" />
                            </div>
                            <div className='selected-hero-1'>
                                <img src="/public/images/OriginalJerry/OriginalJerryIcon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-selection'>
                    <div className='hero-selection-title'>BUILD YOUR TEAM</div>
                    <div className='hero-selection-card-container'>
                        <div className='hero-selection-card'>
                            <img src="/public/images/BethClone/BethCloneFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Beth Clone</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/CommanderRick/CommanderRickFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Commander Rick</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/GotronSuitSummer/GotronSuitSummerFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Gotron Suit Summer</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/MortyPhantom/MortyPhantomFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Morty Phantom</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/MortyRick/MortyRickFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Morty Rick</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/MrNimbus/MrNimbusFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Mr Nimbus</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/OriginalJerry/OriginalJerryFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Original Jerry</div>
                        </div>
                        <div className='hero-selection-card'>
                            <img src="/public/images/RatSuitPickleRick/RatSuitPickleRickFront.png" alt="" />
                            <div className='hero-selection-card-nameplate'>Pickle Rick</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}