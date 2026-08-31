import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import CourseCard from '../../components/CourseCard';

function CourseList() {
    // Sample courses data
    const displayCourses = [
        {
            _id: '1',
            title: 'Full Stack Web Development (MERN)',
            description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB with real-world industry projects.',
            category: 'Web Development',
            createdBy: 'Goli Anup Reddy',
            thumbnail: {
                secure_url: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500&auto=format&fit=crop&q=60'
            }
        },
        {
            _id: '2',
            title: 'Data Structures & Algorithms in Java',
            description: 'Learn DSA from scratch, optimize time complexities, and ace technical coding interviews.',
            category: 'Computer Science',
            createdBy: 'Industry Mentors',
            thumbnail: {
                secure_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60'
            }
        },
        {
            _id: '3',
            title: 'Python for Data Science & AI',
            description: 'Learn Python programming, Pandas, NumPy, and Machine Learning basics with hands-on practice.',
            category: 'Artificial Intelligence',
            createdBy: 'Tech Experts',
            thumbnail: {
                secure_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60'
            }
        }
    ];

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore Courses Made by{' '}
                    <span className="font-bold text-yellow-500">Industry Experts</span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14 justify-center">
                    {displayCourses.map((element) => {
                        return <CourseCard key={element._id} data={element} />;
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseList;
