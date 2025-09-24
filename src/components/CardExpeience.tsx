interface ICardExperienceProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}

interface CardExperienceProps{
    data : ICardExperienceProps;
}


export const CardExperience = ({ data }: CardExperienceProps) => {
  return (
    <div
      className="
        w-full max-w-sm p-6 sm:p-8 md:p-10
        bg-white rounded-lg shadow-xl
        mx-auto my-8 
        transition duration-300
      "
    >
      <p
        className="
          text-lg sm:text-xl
          text-gray-500
          leading-relaxed
          mb-8
        "
      >
        "{data.quote}"
      </p>

      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 contrast-70 opacity-75 hover:contrast-100 hover:opacity-100 transition duration-200 ease-in-out"
          src={data.avatarUrl}
          alt={`Avatar de ${data.author}`}
        />
        <div>
          <p className="text-gray-900 font-semibold text-base">{data.author}</p>
          <p className="text-gray-500 text-sm">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;