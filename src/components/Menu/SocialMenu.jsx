import React from "react";
import config from "../../../data/SiteConfig";

const SocialMenu = () => (
    <>
        <a href={config.behanceProfile} target="_blank" rel="noopener noreferrer">behance</a>
        <a href={config.dribbbleProfile} target="_blank" rel="noopener noreferrer">dribbble</a>
        <a href={config.linkedinProfile} target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href={config.githubProfile} target="_blank" rel="noopener noreferrer">github</a>
    </>
)

export default SocialMenu