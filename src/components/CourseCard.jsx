import { Link, useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

// Course PDF / Reference materials mapping (Stable, Verified URLs)
const coursePdfs = {
    "Full Stack Web Development (MERN)": "https://roadmap.sh/full-stack",
    "Data Structures & Algorithms in Java": "https://introcs.cs.princeton.edu/java/cheatsheet/",
    "Python for Data Science & AI": "https://www.pythoncheatsheet.org/"
};

function CourseCard({ data }) {
    const navigate = useNavigate();

    // Get PDF link by course title, fallback to data.pdfUrl or default link
    const pdfLink = coursePdfs[data?.title] || data?.pdfUrl || "https://roadmap.sh";

    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img 
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-all ease-in-out duration-300 object-cover" 
                    src={data?.thumbnail?.secure_url} 
                    alt="Thumbnail" 
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data?.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {data?.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-4 flex-wrap">
                        {/* Explore Course Button */}
                        <div 
                            onClick={() => {
                                navigate("/course/description", { state: { ...data } });
                            }} 
                            className="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                        >
                            Explore Course <IoArrowForward className="rtl:rotate-180 w-4 h-4 ml-1" />
                        </div>

                        {/* Free PDF Material Button */}
                        <a 
                            href={pdfLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
                        >
                            📥 Free PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
