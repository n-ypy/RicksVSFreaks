import ProgressBar from './ProgressBar';
import { useSelector, useDispatch } from 'react-redux';

export default function Enemy() {
    const enemy = useSelector((state) => state.fight.enemy)

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="card-monstre col-sm-12">
                        <div id="monsterCard">
                            <div className="text-center">
                                <div className="row">
                                    {enemy.hp > 0 ? <div className="col-sm-2 offset-sm-3">
                                        <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                                        <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                                    </div> : <h1>Victory</h1>}

                                    <div id="comboOnMonster" className="col-sm-6">

                                    </div>
                                </div>
                            </div>
                            <ProgressBar hp={enemy.hp} hpMax={enemy.hpMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}