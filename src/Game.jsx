import { useEffect, useState } from 'react';
import HeroSelection from './Components/HeroSelection';
import './assets/styles/Game.css';
import Fight from './Components/Fight';
import './assets/styles/StarBackground.css'
import images from './libs/imagesList';
import getImageUrl from './utils/getImageUrl';

export default function Game() {

    const [isFightInitiated, setIsFightInitiated] = useState(false)

    const preloadImages = () => {
        images.forEach((imgPath) => {
            const img = new Image();
            img.src = getImageUrl(imgPath);
        })
    }

    useEffect(() => {
        preloadImages()
    }, [])

    return (<>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        {isFightInitiated ? <Fight /> : <HeroSelection setIsFightInitiated={setIsFightInitiated} />}
    </>
    )
}