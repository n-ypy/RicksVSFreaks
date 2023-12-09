import { useState } from 'react';
import Enemy from './Components/Enemy';
import HeroList from './Components/HeroList';
import HeroSelection from './Components/HeroSelection';
import './styles/Game.css';

export default function Game() {

    const[isFightInitiated, setIsFightInitiated] = useState(false)

    return (
        !isFightInitiated && <HeroSelection setIsFightInitiated={setIsFightInitiated} />
        // <div className="App">
        //     <Enemy />
        //     <br></br>
        //     <section className="container-fluid">
        //         <HeroList />
        //     </section >
        // </div>
    )
}