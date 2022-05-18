
//* HOME PAGE - LAYOUT  *//
export const homeVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            durantion: 0.5,
            delay: 0.5
        }
    },
};

//* Navbar Animation *//
export const MenuVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        
        transition: {
            type: 'spring', 
            stiffness: 120
        }
    }
}; 


//* VARIANTS LAYOUTS *//
export const LayoutVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            durantion: 0.5,
            delay: 0.5
        }
    },
};

export const wideVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120
        }
    }
}

//* Buttons Variants *//

export const btnIntroVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        
        transition: {
            type: 'spring', stiffness: 120
        }
    },
    hover: {
        background: "#f10e46", 
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
          duration: 0.3,
          yoyo: Infinity
        }
    }
}


export const btnVariants = {
    hover: { 
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(241,14,70)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}


