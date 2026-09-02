import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 w-full max-w-5xl items-center">
                    
                    {/* Left Side: Thumbnail, Lectures, Instructor & Button */}
                    <div className="space-y-5 flex flex-col items-center justify-center">
                        <img 
                            className="h-64 w-full max-w-md rounded-lg object-cover shadow-lg border border-slate-700"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />
                        
                        <div className="space-y-4 w-full max-w-md">
                            <div className="flex flex-col items-center justify-between text-xl space-y-1">
                                <p className="font-semibold text-center">
                                    <span className="font-bold text-yellow-500">Total Lectures: </span> 
                                    {state?.numberOfLectures}
                                </p>
                                <p className="font-semibold text-center">
                                    <span className="font-bold text-yellow-500">Instructor: </span> 
                                    {state?.createdBy}
                                </p>
                            </div>

                            {/* Watch Lectures / Subscribe Button */}
                            {role === "ADMIN" || data?.user?.subscription?.status === 'active' ? (
                                <button
                                    onClick={() => navigate("/course/displaylectures", { state: { ...state } })}
                                    className="bg-yellow-500 text-slate-950 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300 shadow-md cursor-pointer"
                                >
                                    Watch Lectures
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="bg-yellow-500 text-slate-950 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300 shadow-md cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Title & Description */}
                    <div className="space-y-4 text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-5 text-center md:text-left">
                            {state?.title}
                        </h1>

                        <p className="text-yellow-500 font-semibold text-xl">
                            Course Description:
                        </p>
                        
                        <p className="text-gray-300 text-lg leading-relaxed text-justify">
                            {state?.description}
                        </p>
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;
