export default function Progress({ min, max, type }) {

    switch (type) {
        case 'health':
            break;
        case 'energy':
            break;

        default:
            throw new Error('type: health or energy expected');
    }

    return (
        <>
            <div className="progress-bar">
                <div className="progress-bar-text">{min}/{max}</div>
                <div className={"progress-bar-progress progress-" + type} style={{ width: (min / max) * 100 + '%' }}></div>
            </div>
        </>
    )

}