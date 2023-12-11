import { useState } from 'react';
import HeroSelection from './Components/HeroSelection';
import './styles/Game.css';
import Fight from './Components/Fight';
import './styles/StarBackground.css'

export default function Game() {

    const [isFightInitiated, setIsFightInitiated] = useState(false)

    return (<>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        {isFightInitiated ? <Fight /> : <HeroSelection setIsFightInitiated={setIsFightInitiated} />}
    </>
    )
}