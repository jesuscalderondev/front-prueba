import React from 'react';

interface ITeacherSocial {
  name: string;
  icon: string;
  url: string;
}

interface ITeacherData {
  name: string;
  title: string;
  bio: string;
  category: string;
  socials: ITeacherSocial[];
  imageSrc: string;
}

interface CardTeacherProps {
  data: ITeacherData;
}

export const CardTeacher: React.FC<CardTeacherProps> = ({ data }) => {

  return (
    <div
      className="
        w-full max-w-sm overflow-hidden p-0
        bg-white rounded-xl shadow-xl
        mx-auto my-8 
        hover:shadow-2xl transition duration-300
        p-3
      "
    >
      <div className="h-48 overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover" 
          src={data.imageSrc} 
          alt={`Perfil de ${data.name}`} 
        />
      </div>

      <div className="py-5 flex flex-col">
        <h2 className="text-xl font-bold text-gray-900 leading-tight mb-1">
          {data.name}
        </h2>
        <p className="text-gray-500 font-medium mb-4">
          {data.title}
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-6">
          {data.bio}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-semibold text-orange-500">
            {data.category}
          </span>
          <div className="flex items-center space-x-3">
            {data.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition duration-150"
              >
                <img src={social.icon} alt={`${social.name}`} width={30}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeacher;