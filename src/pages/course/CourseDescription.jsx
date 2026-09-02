import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    // కోర్సు పేరును బట్టి సంబంధిత పిడిఎఫ్‌ని లింక్ చేయడం
    const getPdfUrl = (title) => {
        if (!title) return "/mern-full-stack-guide.pdf";
        const t = title.toLowerCase();
        if (t.includes("mern") || t.includes("web")) return "/mern-full-stack-guide.pdf";
        if (t.includes("java") || t.includes("dsa") || t.includes("structure")) return "/dsa-java-handbook.pdf";
        if (t.includes("python") || t.includes("data science")) return "/python-data-science-notes.pdf";
        return "/mern-full-stack-guide.pdf";
    };

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-8 pb-16 px-4 md:px-12 lg:px-20 text-white max-w-7xl mx-auto">
                
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="text-yellow-400 hover:text-yellow-300 font-semibold mb-6 flex items-center gap-2 transition-all duration-200 cursor-pointer"
                >
                    ← Back to Courses
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Left & Center: Details, Stats & Curriculum */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <span className="bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-yellow-500/30">
                                Certified Curriculum
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mt-3 mb-4 leading-tight">
                                {state?.title || "Full Stack Web Development"}
                            </h1>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                                {state?.description || "Master core concepts with hands-on industrial projects and comprehensive lecture notes."}
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            <div className="p-2 border-r border-slate-700/60 last:border-none">
                                <span className="text-xs text-gray-400 block mb-1">Total Lectures</span>
                                <span className="text-xl font-bold text-yellow-400">{state?.numberOfLectures || "35+"}</span>
                            </div>
                            <div className="p-2 border-r border-slate-700/60 last:border-none">
                                <span className="text-xs text-gray-400 block mb-1">Instructor</span>
                                <span className="text-xl font-bold text-yellow-400">{state?.createdBy || "Goli Anup Reddy"}</span>
                            </div>
                            <div className="p-2 border-r border-slate-700/60 last:border-none">
                                <span className="text-xs text-gray-400 block mb-1">Access</span>
                                <span className="text-xl font-bold text-emerald-400">Lifetime</span>
                            </div>
                            <div className="p-2">
                                <span className="text-xs text-gray-400 block mb-1">Resources</span>
                                <span className="text-xl font-bold text-yellow-400">Free PDF</span>
                            </div>
                        </div>

                        {/* Syllabus / Curriculum */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-2xl font-bold border-b border-slate-700 pb-2 text-white flex items-center gap-2">
                                📚 Detailed Curriculum & Modules
                            </h3>
                            
                            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 hover:border-yellow-500/40 transition">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-yellow-400 text-base sm:text-lg">
                                        Module 1: Foundations & Architecture
                                    </h4>
                                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-gray-300">Unit 1</span>
                                </div>
                                <p className="text-sm text-gray-300 mt-2">
                                    Comprehensive review of foundational concepts, environment tools, version control, and best industry practices.
                                </p>
                            </div>

                            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 hover:border-yellow-500/40 transition">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-yellow-400 text-base sm:text-lg">
                                        Module 2: Practical Implementation & State Handling
                                    </h4>
                                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-gray-300">Unit 2</span>
                                </div>
                                <p className="text-sm text-gray-300 mt-2">
                                    Deep dive into scalable component architecture, async operations, state synchronization, and validations.
                                </p>
                            </div>

                            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 hover:border-yellow-500/40 transition">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-yellow-400 text-base sm:text-lg">
                                        Module 3: Security, Optimization & Cloud Deployment
                                    </h4>
                                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-gray-300">Unit 3</span>
                                </div>
                                <p className="text-sm text-gray-300 mt-2">
                                    Authentication workflows, database schema design, index optimization, and continuous deployment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Media Card & Action Buttons */}
                    <div className="h-fit space-y-6">
                        <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 shadow-2xl space-y-5">
                            <div className="overflow-hidden rounded-xl border border-slate-700/80">
                                <img 
                                    className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                                    alt="Course Thumbnail"
                                    src={state?.thumbnail?.secure_url}
                                />
                            </div>

                            <div className="flex justify-between items-baseline">
                                <span className="text-2xl font-black text-white">Enrollment</span>
                                <span className="text-xl font-bold text-emerald-400 uppercase tracking-wide">Included</span>
                            </div>

                            <div className="space-y-3">
                                {role === "ADMIN" || data?.user?.subscription?.status === 'active' ? (
                                    <button
                                        onClick={() => navigate("/course/displaylectures", { state: { ...state } })}
                                        className="bg-yellow-500 text-slate-950 font-black text-lg rounded-xl px-5 py-3.5 w-full hover:bg-yellow-400 transition-all ease-in-out duration-300 shadow-lg cursor-pointer"
                                    >
                                        ▶ Watch Lectures
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate("/checkout")}
                                        className="bg-yellow-500 text-slate-950 font-black text-lg rounded-xl px-5 py-3.5 w-full hover:bg-yellow-400 transition-all ease-in-out duration-300 shadow-lg cursor-pointer"
                                    >
                                        Subscribe to Unlock
                                    </button>
                                )}

                                {/* Download Material Button */}
                                <a 
                                    href={getPdfUrl(state?.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-200 shadow-md"
                                >
                                    📥 Download Handbook (PDF)
                                </a>
                            </div>

                            <ul className="text-xs text-gray-400 space-y-2 pt-2 border-t border-slate-700/60">
                                <li className="flex items-center gap-2">✓ Verified lecture contents</li>
                                <li className="flex items-center gap-2">✓ Complete downloadable study material</li>
                                <li className="flex items-center gap-2">✓ Accessible on mobile and desktop</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;
