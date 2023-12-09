export default function StartFightBtn({ confirmSelection }) {
    return (
        <>
            <button type="button" className='start-fight-btn' onClick={() => confirmSelection()}>
                <div className='title'>FIGHT</div>
                <div className='title middle'>FIGHT</div>
                <div className='title bottom'>FIGHT</div>
            </button>
        </>
    )
}