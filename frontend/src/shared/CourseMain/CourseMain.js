import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import LessonCard from "./LessonCard";
import AddLessons from "../../pages/CourseTeacher/AddLessons";

const CourseMain = () => {
    const course = useLoaderData();
    const [lessons, setLessons] = useState([]);
    // const [isPlaying, setIsPlaying] = useState(false);

    // const togglePlay = () => {
    //   setIsPlaying(!isPlaying);
    // };
    const {user} = useContext(AuthContext);
    const {course_id, course_name,  course_description, course_price, image_url} = course;
    const user_id = user?.teacher_id;
    // const [teachers, setTeachers] = useState([]);

    // '/lessons/:course_id'
    useEffect(()=> {
        fetch(`http://localhost:5002/lessons/${course_id}`)
            .then(res => res.json())
            .then(data =>setLessons(data))
    },[])  

    // console.log(user?.username,user?.id)
    // //loading the related teachers with this course
    // useEffect(()=>{
    //     fetch(`http://localhost:5002/courses/teachers/${course_id}`)
    //     .then(res => res.json())
    //     .then(data =>setTeachers(data.teachers))
    // },[]);

    console.log(lessons);

    console.log(course_id, user_id, course);
    const handleAddLectures = async()=> {
        console.log(course_id, user_id);
        try {
            const response = await fetch('http://localhost:5002/enroll', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ course_id, user_id}),
            });
      
            if (response.ok) {
              const enrollmentData = await response.json();
              console.log('Enrollment successful:', enrollmentData);
              // Optionally, you can handle successful enrollment here, such as updating state or displaying a success message.
            } else {
              const errorData = await response.json();
              console.error('Enrollment failed:', errorData.message);
              // Handle enrollment failure, display an error message, etc.
            }
          } catch (error) {
            console.error('Error during enrollment:', error.message);
            // Handle any unexpected errors
          }
    }
    return ( 
        <div className="p-12">
            <div className="mt-8">
                <h1 className="text-5xl mb-8">{course_name}</h1>
            </div>
            {/* lessons  */}
            {/* 
                add tabs here  
            */}
            <div role="tablist" className="tabs tabs-bordered mt-10">
            <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl px-12" aria-label="Lessons" defaultChecked/>
            <div role="tabpanel" className="tab-content p-10">
                <h2 className="text-4xl">Lessons : {lessons.length}</h2>
                <section>
                    {
                        lessons.map(lesson => 
                            <LessonCard key= {lesson?.lesson_id} lesson = {lesson}></LessonCard>    
                        )
                    }
                </section>
            </div>
                   {
                    user?.role === "teacher" ? 
                    <>
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl px-12" aria-label="Add Lessons" />
                        <div role="tabpanel" className="tab-content p-10">
                            <AddLessons></AddLessons>
                        </div>
                    </>
                    :
                    <>
                    </>
                   } 
            

            <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl px-12" aria-label="Outline" />
            <div role="tabpanel" className="tab-content p-10">Outline</div>
            </div>
            

        </div>
     );
}
 
export default CourseMain;