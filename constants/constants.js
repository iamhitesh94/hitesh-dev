import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaUpwork, FaEnvelope } from "react-icons/fa6";

export const menulinks = [
    {
        'title': "Home",
        'path': '/',
    },
    // {
    //     'title': "Services",
    //     'path': '/services',
    // },
    // {
    //     'title': "Resume",
    //     'path': '/resume',
    // },
    // {
    //     'title': "Work",
    //     'path': '/work',
    // },
    {
        'title': "Contact",
        'path': '/contact',
    },
]

export const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/iamhitesh94" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/coder.heet/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hitesh-solanki-4749b9132" },
    { icon: <FaUpwork />, link: "https://www.upwork.com/freelancers/~019dbae2cbd1f506f6" },
    { icon: <FaEnvelope />, link: "mailto:iamhitesh3@gmail.com" },
]

export const stats = [
    { num: 7, text: "Years of experience" },
    { num: 3, text: "Project completed" },
    { num: 4, text: "Technologies mastered" },
    { num: 250, text: "Code commits" },
]

export const services = [
    {
        num: "01",
        title: "Web Development",
        desc: "Experienced in WordPress and Laravel development, specializing in creating custom themes, plugins, and web applications. Proficient in PHP, ensuring robust functionality and seamless user experiences. Passionate about delivering high-quality code and innovative solutions.",
        href: "#"
    },
    { 
        num: "02", 
        text: "UI/UX",
        desc: "Creating intuitive and engaging digital experiences. Focused on user research, wireframing, prototyping, and visual design to enhance usability and aesthetics, ensuring seamless interactions that meet user needs and business goals.",
        href: "#"
    },
    { 
        num: "03", 
        text: "Logo Design",
        desc: "Creative logo design services that capture your brand's essence. I craft unique and memorable logos that reflect your identity, ensuring eye-catching visuals that resonate with your audience. Let's bring your vision to life!",
        href: "#"
    },
]