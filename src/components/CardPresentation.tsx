import { Clock, Video, Download, Star } from 'lucide-react';

interface ICourseData {
  category: string,
  title: string,
  price: number,
  duration: string,
  courses: number,
  sales: number,
  rating: number,
  imageSrc: string;
}

interface CourseCardProps {
  data: ICourseData;
}

const renderStars = (rating: number) => {
  const starArray = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starArray.push(<Star key={i} className="w-5 h-5 text-orange-500/90 fill-orange-500/80" />);
    } else if (i === fullStars && hasHalfStar) {
      starArray.push(
        <div key={i} className="relative w-5 h-5">
          <Star className="w-5 h-5 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <Star className="w-5 h-5 text-orange-500/90 fill-orange-500/80" />
          </div>
        </div>
      );
    } else {
      starArray.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
    }
  }
  return starArray;
};

const CourseCard = ({ data }: CourseCardProps) => {

  return (

    <div className="
        w-full max-w-sm overflow-hidden 
        bg-white rounded-xl shadow-xl 
        mx-auto my-8 
        hover:shadow-2xl transition duration-300
        p-3
    ">
      
      <div className="h-48 overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover" 
          src={data.imageSrc} 
          alt={data.title} 
        />
      </div>

      <div className="p-5 flex flex-col">
        
        <div className="flex justify-between items-center mb-1">
          <p className="text-gray-500 text-sm font-medium">{data.category}</p>
          <div className="flex items-center">
            {renderStars(data.rating)}
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-1">
          {data.title}
        </h2>
        <p className="text-2xl font-bold text-orange-500 mb-4">
          ${data.price}
        </p>
        
        
        <hr className="border-t border-gray-200 border-dashed mb-4" />
        
        
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-neutral-900" />
            <span>{data.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-neutral-900" />
            <span>{data.courses} Courses</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-5 text-neutral-900" />
            <span>{data.sales} Sales</span>
          </div>
        </div>
      </div>
      
      <div className="px-5 pb-5 flex justify-center">
        <button 
          className="
            absolute
            py-3
            px-10
            text-white text-lg font-semibold 
            rounded-full 
            shadow-lg 
            transition duration-300
            cursor-pointer
            bg-orange-500 hover:bg-orange-600
          "
        >
          Join Course
        </button>
      </div>

    </div>
  );
};

export default CourseCard;