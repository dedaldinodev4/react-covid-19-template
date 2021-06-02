import React from 'react';
import {motion} from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, 30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    exit: {
        x: '-100vw',
        opacity: 0
    }
}
const Loader = () => {

    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate="animationOne"
                exit="exit"
            >

            </motion.div>
        </>
    );

}

export default Loader;