export default function ProgressBar({ hp, hpMax, bgType, faType, barName }) {
        return (
            <div className="progress md-progress" >
                <div className="progress-bar"
                    style={{ width: (hp * 100 / hpMax) + "%" }}
                    aria-valuenow={hp}
                    aria-valuemin="0"
                    aria-valuemax={hpMax}
                    role="progressbar" >
                    <i className={` fas ${faType} ${bgType} icon-text`}> {hp} {barName} </i>
                </div>
            </div >
        )

}
