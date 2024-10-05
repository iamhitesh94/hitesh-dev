import Link from "next/link";
import { socialLinks } from "@/constants/constants";
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <>
            <div className={containerStyles}>
                {socialLinks.map((item, index) => {
                    return (
                        <Link href={item.link} target="_blank" key={index} className={iconStyles}>
                            <span>{item.icon}</span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Social;