import React from 'react';

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
        <img src="src/assets/logo.png" alt="Book Store" className={`${sizeClass}`}/>
    );
};