import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = () => {
    const colorNormal = "#45505b";
    const colorHover = "#5580E9"

    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);

    return (
        <div>
            <SocialIcon onMouseEnter={() => setIsHover1(true)}
                        onMouseLeave={() => setIsHover1(false)} 
                        url="http://twitter.com/giangi92" bgColor={isHover1 ? colorHover : colorNormal} style={{ height: 30, width: 30, margin: 10 }} />
            <SocialIcon onMouseEnter={() => setIsHover2(true)}
                        onMouseLeave={() => setIsHover2(false)}
                        url="http://github.com/" bgColor={isHover2 ? colorHover : colorNormal} style={{ height: 30, width: 30, margin: 10 }} />
            <SocialIcon onMouseEnter={() => setIsHover3(true)}
                        onMouseLeave={() => setIsHover3(false)}
                        url="http://instagram.com/" bgColor={isHover3 ? colorHover : colorNormal} style={{ height: 30, width: 30, margin: 10 }} />
            <SocialIcon onMouseEnter={() => setIsHover4(true)}
                        onMouseLeave={() => setIsHover4(false)}
                        url="http://linkedin.com/" bgColor={isHover4 ? colorHover : colorNormal} style={{ height: 30, width: 30, margin: 10 }} />
        </div>
    )
}

export default SocialIcons;