import './Game.css';
import Enemy from './Components/Enemy';
import HeroList from './Components/HeroList';

export default function Game() {

    return (
        <div className="App">
            <Enemy />
            <br></br>
            <section className="container-fluid">
                <HeroList />
            </section >
        </div>
    )
}
