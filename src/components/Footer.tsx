import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {


    
    return (
        <footer className='flex flex-col sm:px-20 px-4 py-10'>

            <div className='flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:items-start gap-8 mb-8'>
                
                <div className="flex flex-col gap-4 items-start text-gray-700 lg:max-w-2xs">
                    <Link className="flex items-center gap-2" to="/">
                        <Logo />
                        <span className='text-xl font-bold text-black'>Book Store</span>
                    </Link>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                    </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-start items-center text-gray-700">
                    <span className='text-xl font-bold text-purple-950'>Company</span>
                    <a href="#">About us</a>
                    <a href="#">How to work</a>
                    <a href="#">Popular Course</a>
                    <a href="#">Service</a>
                </div>

                <div className="flex flex-col gap-4 lg:items-start items-center text-gray-700">
                    <span className='text-xl font-bold text-purple-950'>Courses</span>
                    <a href="#">Categories</a>
                    <a href="#">Ofline course</a>
                    <a href="#">Video course</a>
                </div>

                <div className="flex flex-col gap-4 lg:items-start items-center text-gray-700">
                    <span className='text-xl font-bold text-purple-950'>Support</span>
                    <a href="#">FAQ</a>
                    <a href="#">Help center</a>
                    <a href="#">Career</a>
                    <a href="#">Privacy</a>
                </div>

                <div className="flex flex-col gap-4 lg:items-start items-center text-gray-700">
                    <span className='text-xl font-bold text-purple-950'>Contact Info</span>
                    <a href="#">+0913-705-3875</a>
                    <a href="#">ElizabethJ@jourrapide.com</a>
                    <a href="#">
                        4808 Skinner Hollow Road Days Creek, OR 97429
                    </a>
                </div>
            </div>
            <hr className='text-gray-400' />
            <p className="text-gray-400 font-medium text-center mt-5">
                BookStore All Right Reserved, 2022
            </p>
        </footer>
    );
};