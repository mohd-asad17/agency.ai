import { motion } from "motion/react";
import ServiceTitle from "./ServiceTitle";
import TeamMember from "./TeamMember";

const Teams = () => {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
         className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
            <ServiceTitle title={'Meet the team'} desc={'A passionate team of digital experts dedicated to your brands success.'} />
            <TeamMember />
        </motion.div>
    )
}

export default Teams;