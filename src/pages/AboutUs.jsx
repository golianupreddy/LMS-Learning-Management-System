import HomeLayout from "../layouts/HomeLayout";
import aboutMainPage from '../assets/images/aboutMainImage.png';
import apj from '../assets/images/apj.png';
import billGates from '../assets/images/billGates.png';
import einstein from '../assets/images/einstein.png';
import steveJobs from '../assets/images/steveJobs.png';

function AboutUs() {
    return(
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide affordable, accessible, and high-quality courses to empower learners worldwide and help them build industry-relevant technical skills.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img src={aboutMainPage} alt="Image" />
                    </div>
                </div>

                <div className="carousel w-1/2 my-10 mx-auto">
                    {/* Slide 1 - APJ Abdul Kalam */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className="w-40 rounded-full border-2 border-yellow-400" alt="APJ Abdul Kalam" />
                            <p className="text-xl text-gray-200">Teaching is a noble profession. It instills knowledge, shapes characters, and inspires minds</p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    {/* Slide 2 - Albert Einstein */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={einstein} className="w-40 rounded-full border-2 border-yellow-400" alt="Albert Einstein" />
                            <p className="text-xl text-gray-200">If you can't explain it to a six year old, you don't understand it yourself</p>
                            <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    {/* Slide 3 - Steve Jobs */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-yellow-400" alt="Steve Jobs" />
                            <p className="text-xl text-gray-200">Your time is limited, so don’t waste it living someone else’s life</p>
                            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    {/* Slide 4 - Bill Gates */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={billGates} className="w-40 rounded-full border-2 border-yellow-400" alt="Bill Gates" />
                            <p className="text-xl text-gray-200">Success is a lousy teacher. It seduces smart people into thinking they can’t lose</p>
                            <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;
