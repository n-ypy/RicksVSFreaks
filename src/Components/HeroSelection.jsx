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

                <div className='hero-selection'>
                    <div className='hero-selection-title'>BUILD YOUR TEAM</div>
                    <div className='hero-selection-card-container'>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Beth Clone</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/BethClone/BethCloneFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Commander Rick</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/CommanderRick/CommanderRickFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Gotron Summer</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/GotronSummer/GotronSummerFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Morty Phantom</div>
                                        <div className='hero-description-role'>
                                            <svg className='support-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                                            </svg>
                                            <div>Support</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            All team members gain a 15% to dodge the next attack.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            15% probability to absorb incoming damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/MortyPhantom/MortyPhantomFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Morty Rick</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/MortyRick/MortyRickFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Mr Nimbus</div>
                                        <div className='hero-description-role'>
                                            <svg className='healer-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path
                                                    d="M222.6 43.2l-.1 4.8H288c53 0 96 43 96 96s-43 96-96 96H248V160h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H248 220l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96H240V384h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H213l-3.1 99.5L208.5 495l0 1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16l0-1-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32H152c-53 0-96-43-96-96c0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128H136 122.6c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56S25.1 48 56 48h8 8 89.5l-.1-4.8L161 32c0-.7 0-1.3 0-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30c0 .6 0 1.3 0 1.9l-.4 11.2zM64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
                                            </svg>
                                            <div>Healer</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Heal for 70 all team members.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/MrNimbus/MrNimbusFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Original Jerry</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/OriginalJerry/OriginalJerryFront.png" alt="" />
                        </div>
                        <div className='hero-selection-card'>
                            <div className='hero-selection-card-description'>
                                <button type='button' className='hero-selection-btn btn-add-hero'>+</button>
                                <div className='hero-description-wrapper'>
                                    <div className='hero-description'>
                                        <div className='hero-description-name'>Pickle Rick</div>
                                        <div className='hero-description-role'>
                                            <svg className='fighter-role-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path
                                                    d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                                            </svg>
                                            <div>Fighter</div>
                                        </div>
                                        <div className='hero-description-stats'>
                                            <div className='hero-description-hp'>
                                                <svg className="hero-description-stat-icon hp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                                </svg>
                                                <div>568</div>
                                            </div>
                                            <div className='hero-description-energy'>
                                                <svg className="hero-description-stat-icon energy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                                <div>98</div>
                                            </div>
                                            <div className='hero-description-damage'>
                                                <svg className="hero-description-stat-icon damage-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
                                                </svg>
                                                <div>13</div>
                                            </div>
                                            <div className='hero-description-heal'>
                                                <svg className="hero-description-stat-icon heal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                                    <path
                                                        d="M49.93,0h23.01c4.3,0,7.82,3.52,7.82,7.82v34.3h34.3c4.3,0,7.82,3.52,7.82,7.82v23.01 c0,4.3-3.52,7.82-7.82,7.82h-34.3v34.3c0,4.3-3.52,7.82-7.82,7.82H49.93c-4.3,0-7.82-3.52-7.82-7.82v-34.3H7.82 c-4.3,0-7.82-3.52-7.82-7.82V49.93c0-4.3,3.52-7.82,7.82-7.82h34.3V7.82C42.12,3.52,45.63,0,49.93,0L49.93,0z" />
                                                </svg>
                                                <div>8</div>
                                            </div>
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M320 0a128 128 0 1 1 0 256A128 128 0 1 1 320 0zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                                            </svg>
                                            <div>Active Ability</div>
                                        </div>
                                        <div className='hero-description-ability-cost'>
                                            <div>Cost:</div>
                                            <div>98</div>
                                            <svg className='energy-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                            </svg>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            Inflicts 78 damage.
                                        </div>
                                        <div className='hero-description-ability-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path
                                                    d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
                                            </svg>
                                            <div>Passive Ability</div>
                                        </div>
                                        <div className='hero-description-ability-description'>
                                            10% probability that an attack, when executed, will inflict double its damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/public/images/hero/PickleRick/PickleRickFront.png" alt="" />
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
                <div className='enemy-selection-container'>
                <div className='hero-selection-title'>SELECT YOUR ENEMY</div>
                    <div className='selected-heroes'>
                        <div className='selected-hero-4'>
                            <img src="/public/images/enemy/FortuneQueen/FortuneQueenDown_1.png" alt="" />
                        </div>
                        <div className='selected-hero-3'>
                            <img src="/public/images/enemy/BethsMytholog/BethsMythologDown_1.png" alt="" />
                        </div>
                        <div className='selected-hero-2'>
                            <img src="/public/images/enemy/Snowball/SnowballDown_1.png" alt="" />
                        </div>
    
                    </div>
                    <div className='enemy-overview-card'>
                        <img src="/public/images/enemy/BethsMytholog/BethsMythologFront.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}