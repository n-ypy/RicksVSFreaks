import { useState } from 'react';
import Enemy from './Components/Enemy';
import HeroList from './Components/HeroList';
import HeroSelection from './Components/HeroSelection';
import './styles/Game.css';
import Fight from './Components/Fight';

export default function Game() {

    const[isFightInitiated, setIsFightInitiated] = useState(false)

    return (
        isFightInitiated ? <Fight /> : <HeroSelection setIsFightInitiated={setIsFightInitiated} />
        // <div className="App">
        //     <Enemy />
        //     <br></br>
        //     <section className="container-fluid">
        //         <HeroList />
        //     </section >
        // </div>
    )
}