

interface NewsletterBackgroundProps {
}
const NewsletterBackground: React.FC<NewsletterBackgroundProps> = ({ }) => {
  return (
    <div 
      className="
        relative h-100 py-20 lg:py-0 
        flex flex-col items-center justify-start
        overflow-hidden rounded-xl bg-purple-950/90
        sm:justify-center
      "
      style={{
        backgroundImage: `
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="95" stroke="%23fefefe" stroke-width="4" fill="none"/></svg>'),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="45" stroke="%23fefefe" stroke-width="3" fill="none"/></svg>'),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="22" stroke="%23fefefe" stroke-width="2" fill="none"/></svg>'),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M 10 30 Q 20 10 40 30 T 60 50" stroke="%23ff7e33" stroke-width="3" fill="none" transform="rotate(180 35 30)"/></svg>')
        `,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `
          -50px -50px,
          -20px 20px,
          10px 10px,
          8% 90% 
        `,

        backgroundSize: `
          200px 200px,
          100px 100px,
          50px 50px,
          50px 50px
        `
      }}
    >
      <div className="py-20 sm:py-0">
        <h2 className="text-3xl font-bold text-white mb-2 z-10">
        Subscribe to our newsletter
        </h2>
        <p className="text-white text-opacity-80 mb-6 z-10">Lorem Ipsum is simply dummy text of the printing.</p>
      
        <div className="flex items-center p-1 bg-white rounded-full mt-15">
            <div className="flex items-center flex-grow pl-5">
            <input type="text" placeholder='Email Address' className="flex-grow py-3 text-gray-700 placeholder-gray-400 font-semibold bg-transparent focus:outline-none border-none" />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 flex-shrink-0 px-8 py-3 ml-2 text-white font-semibold rounded-full shadow-lg transition duration-200 cursor-pointer">Send</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBackground;