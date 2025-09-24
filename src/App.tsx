import './App.css'
import CardExperience from './components/CardExpeience';
import CourseCard from './components/CardPresentation';
import { Footer } from './components/Footer'
import { Header } from './components/Headers'
import { TargetItem } from './components/TargetItem'
import CardTeacher from './components/CardTeachers';
import NewsletterBackground from './components/BacgroundDecorated';

const myCourseData = {
  category: "UI/UX Design",
  title: "UI/UX Desing for Beginners",
  price: 98,
  duration: "22hr 30min",
  courses: 34,
  sales: 250,
  rating: 4.8,
  imageSrc: "src/assets/kidRead.png"
};

const myCourseData2 = {
  category: "UI/UX Design",
  title: "UI/UX Desing for Beginners",
  price: 98,
  duration: "22hr 30min",
  courses: 34,
  sales: 250,
  rating: 4.8,
  imageSrc: "src/assets/womanLearn.png"
};


const studentTestimonial = {
  quote: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”",
  author: "Jesús Calderón",
  title: "Web Developer",
  avatarUrl: "https://unavatar.io/github/jesuscalderondev"
};

const studentTestimonial2 = {
  quote: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”",
  author: "Miguel",
  title: "Web Developer",
  avatarUrl: "https://unavatar.io/github/midudev"
};

const studentTestimonial3 = {
  quote: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”",
  author: "Fazt",
  title: "Web Developer",
  avatarUrl: "https://unavatar.io/github/fazt"
};

const teacher1 = {
  name: "Tracy D. Wright",
  title: "Professor @George Brown College",
  bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
  category: "Engineering physics",
  socials: [
    { name: 'Instagram', icon: 'src/assets/iconInsta.png', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'src/assets/iconLink.png', url: 'https://linkedin.com' },
  ],
  imageSrc: "https://unavatar.io/github/midudev",
};

const teacher2 = {
  name: "Tracy D. Wright",
  title: "Professor @George Brown College",
  bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
  category: "Engineering physics",
  socials: [
    { name: 'Instagram', icon: 'src/assets/iconInsta.png', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'src/assets/iconLink.png', url: 'https://linkedin.com' },
  ],
  imageSrc: "https://unavatar.io/github/jesuscalderondev",
};

const teacher3 = {
  name: "Tracy D. Wright",
  title: "Professor @George Brown College",
  bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
  category: "Engineering physics",
  socials: [
    { name: 'Instagram', icon: 'src/assets/iconInsta.png', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'src/assets/iconLink.png', url: 'https://linkedin.com' },
  ],
  imageSrc: "https://unavatar.io/github/mouredev",
};

function App() {

  return (
    <>
      <Header/>
      <main className='py-10'>
        <section className='sm:px-20 px-4 flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className="flex flex-col justify-start">
            <h1 className="text-7xl font-bold text-wrap text-slate-950">The <span className='text-orange-500'>Smart</span><br />
            Choice For <span className='text-orange-500'>Future</span></h1>
            <p className='text-wrap text-gray-400 font-medium mt-3'>
              Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...
            </p>
            
            <div className="flex items-center p-1 bg-white-900 rounded-full mt-15">
              <div className="flex items-center flex-grow pl-5">
                <span className='text-slate-700 font-bold mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </span>
                <input type="text" placeholder='Search for a location' className="flex-grow py-3 text-gray-700 placeholder-slate-700 font-semibold bg-transparent focus:outline-none border-none" />
              </div>
              <button className="bg-purple-950/85 hover:bg-purple-900 flex-shrink-0 px-8 py-3 ml-2 text-white font-semibold rounded-full shadow-lg transition duration-200 cursor-pointer">Continue</button>
            </div>
          </div>
          <img src="../src/assets/drawFirst.png" alt="Imagen de muestra para secction" width={800}/>
        </section>

        <div className="sm:mx-30 px-5 mx-14 my-10 bg-purple-950/85 rounded-lg flex lg:flex-row text-white flex-col justify-between items-center gap-5 py-12">
          <TargetItem
            icon='../src/assets/iconLearn.png'
            title='Learn The Latest Skills'
            description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.'
          />

          <TargetItem
            icon='../src/assets/iconGet.png'
            title='Get Ready For a Career'
            description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.'
          />

          <TargetItem
            icon='../src/assets/iconEarn.png'
            title='Earn a Certificate'
            description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.'
          />

        </div>

        <section className="sm:px-20 px-4 py-20 bg-white flex flex-col justify-center items-center w-screen">

          <h2 className="text-4xl font-bold">
            Our Tracks
          </h2>
          <p className="text-gray-400 font-medium">Lorem Ipsum is simply dummy text of the printing.</p>

          <div className="flex lg:flex-row flex-col gap-6 justify-center items-center mt-10">
            <CourseCard
              data={myCourseData}
            />
            <CourseCard
              data={myCourseData2}
            />
            <CourseCard
              data={myCourseData}
            />
          </div>
        </section>

        <section className='sm:px-20 px-4 flex flex-col lg:flex-row justify-between items-center gap-20 mt-20'>
          <img className='p-10' src="src/assets/drawLast.png" alt="Imagen de muestra para section" width={500}/>

          <div className="flex flex-col justify-start items-start w-full">
            <h1 className="text-7xl font-bold text-wrap text-slate-950">Premium <span className='text-orange-500'>Learning</span> Experience </h1>
            
            <div className="flex flex-col">
              <TargetItem
                icon='src/assets/iconHeart.png'
                title='Easily Accessible'
                description='Learning Will fell Very Comfortable With Courslab.'
                iconBg='purple'
              />  

              <TargetItem
                icon='src/assets/iconPuzzles.png'
                title='Fun learning expe'
                description='Learning Will fell Very Comfortable With Courslab.'
                iconBg='purple'
              />
            </div>
            
            
          </div>
        </section>

        <section className="sm:px-20 px-4 py-20 bg-white flex flex-col justify-center items-center w-screen">

          <h2 className="text-4xl font-bold">
            What student’s say
          </h2>
          <p className="text-gray-400 font-medium">Lorem Ipsum is simply dummy text of the printing.</p>

          <div className="flex lg:flex-row flex-col gap-6 justify-center items-center mt-10">
            <CardExperience data={studentTestimonial}/>
            <CardExperience data={studentTestimonial2}/>
            <CardExperience data={studentTestimonial3}/>
          </div>
        </section>

        <section className="sm:px-20 px-4 py-20 bg-white flex flex-col justify-center items-center w-screen">

          <h2 className="text-4xl font-bold">
            Our Tracks
          </h2>
          <p className="text-gray-400 font-medium">Lorem Ipsum is simply dummy text of the printing.</p>

          <div className="flex lg:flex-row flex-col gap-6 justify-center items-center mt-10">
            <CardTeacher
              data={teacher1}
            />
            <CardTeacher
              data={teacher2}
            />
            <CardTeacher
              data={teacher3}
            />
          </div>
        </section>

        <section className='sm:px-20 px-4 py-20 bg-white w-screen'>
          <NewsletterBackground/>
        </section>


      </main>
      <Footer/>
    </>
  )
}

export default App