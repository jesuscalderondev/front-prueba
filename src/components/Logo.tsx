import React from 'react';
import logoSrc from '../assets/logo.png';
 
type LogoSize = 'xs' | 's' | 'm' | 'lg';

interface LogoProps {
    size?: LogoSize;
    className?: string;
}

const sizeMap: Record<LogoSize, string> = {
    xs: 'h-6',
    s: 'h-8',
    m: 'h-10',
    lg: 'h-12',
};

export const Logo: React.FC<LogoProps> = ({ size = 'm'}) => {
    const sizeClass = sizeMap[size] || sizeMap.m;

    return (
        <img src={logoSrc} alt="Book Store" className={`${sizeClass}`}/>
    );
};