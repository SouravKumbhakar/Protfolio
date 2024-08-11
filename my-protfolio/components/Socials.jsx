import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaYoutube,FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/SouravKumbhakar",
    },
    {
        icon: <FaLinkedinIn/>,
        path: "https://www.linkedin.com/in/sourav-kumbhakar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        icon: <FaTwitter/>,
        path: "https://x.com/108_sourav",
    },
    
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link
                    href={item.path}
                    key={index}
                    target="_blank"
                    className={iconStyles}
                >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials