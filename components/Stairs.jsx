"use client";
import { animate, motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* Render 6 motion div, each representing a step for stairs.
            Each div will have same animation defined by stairAnimation obj.
            The delay for each div will be calculated dynamatically based on it's reversed index, creating a staggered effect with decreasing delay for each div
        */}
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1,
                            }}
                            className="h-full w-full bg-white relative"
                        />
                    )
                })
            }
        </>
    )
}

export default Stairs;