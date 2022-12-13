import { Text } from "@nextui-org/react"
import style from './LandingText.module.css'
import { useState, useRef } from "react";

export default function App() {
    const intro = ["Learning", "Building", "Sharing"];
    const animationElement = useRef(null);

    const [tick, setTick] = useState(0);
    function handleAnimationEnd() {
        setTick(tick + 1);
        animationElement.current.style.animation = `none`;
        animationElement.current.offsetHeight; /* trigger reflow */
        animationElement.current.style.animation = null;
    }

    return (
        <div className={style.container}>
            <Text h1>OpenDev is all about </Text>
            <div className={style['anim-container']}>
                <div className={style['moving-box']}
                    ref={animationElement}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <Text h1
                        css={{
                            textGradient: "45deg, $blue700 -20%, $pink600 70%",
                        }}
                    >{intro[tick % 3]}</Text>
                </div>
            </div>
        </div>
    )
}