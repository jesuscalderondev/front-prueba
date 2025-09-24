import React from 'react';

interface TargetItemProps {
  icon: string;
  title: string;
  description: string;
  iconBg?: 'white' | 'purple';
}

export const TargetItem: React.FC<TargetItemProps> = ({ icon, title, description, iconBg = 'white' }) => {
  
  const bgClass = iconBg === 'purple' 
    ? 'bg-purple-950/90' 
    : 'bg-white/20';

  return (
    <div className="flex lg:items-start sm:items-center flex-col lg:flex-row justify-between items-center py-5 gap-5">
      <span className={`${bgClass} rounded-xl p-5 flex-shrink-0`}>
        <img src={icon} alt={`Icono para ${title}`} width={60} />
      </span>

      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-400 font-medium mt-3 text-wrap">
          {description}
        </p>
      </div>
    </div>
  );
};