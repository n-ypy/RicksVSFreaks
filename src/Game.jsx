import './Game.css';
import Monster from './Components/Monster';
import PlayerList from './Components/PlayerList';

export default function Game() {

    return (
        <div className="App">
            <Monster />
            <br></br>
            <section className="container-fluid">
                <PlayerList />
            </section >
        </div>
    )
}
