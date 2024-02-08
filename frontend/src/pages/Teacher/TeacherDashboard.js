import { useContext, useEffect, useState } from "react";
import courseFinder from "../../apis/courseFinder";
import { AuthContext } from "../../context/AuthProvider";
import Course from "../Courses/Course";
import CourseMain from "../../shared/CourseMain/CourseMain";
import CourseTeacherCard from "../CourseTeacher/CourseTeacherCard";
import AddCourses from "../CourseTeacher/AddCourses";

const TeacherDashboard = () => {
    //load the course using course_teacher table
    const [coursesTeacher, setCoursesTeacher] = useState([])
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user?.username);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await courseFinder.get(`/teacher-courses/${user.id}`)
                // const data = await response.json();
                console.log(response?.data?.courses)
                setCoursesTeacher(response?.data?.courses);
            } catch (error) {

            }
        }
        fetchData()
    }, []);

    console.log(coursesTeacher)
    return ( 
        <div className="p-8">
            <div>
                <h1 className="text-5xl border-3xl">Dashboard</h1>
                <h2 className="mt-3 text-xl">Welcome Back <span className="text-blue-400">{user?.username}</span>, Ready For Your Next Lecture?</h2>
            </div>
            {/* your courses section  */}
            {/* display the tabs */}
            <div role="tablist" className="tabs tabs-lifted py-12">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl  [--tab-bg:bg-blue-200] [--tab-border-color:blue-200]" aria-label="My Courses" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <section>
                    <h2 className="text-3xl">My courses </h2>
                    <div>
                        {
                            coursesTeacher.map(course => 
                                <CourseTeacherCard key = {course.course_id} course = {course} />
                            )
                        }
                    </div>
                    
                </section>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl [--tab-bg:bg-blue-200] [--tab-border-color:blue-200]" aria-label="Add Courses" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <AddCourses></AddCourses>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl [--tab-bg:bg-blue-200] [--tab-border-color:blue-200]" aria-label="Earnings" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
            
        </div>
    );
}
 
export default TeacherDashboard;