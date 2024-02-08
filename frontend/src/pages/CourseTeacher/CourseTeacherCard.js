import { Link } from "react-router-dom";
import AddLectures from "./AddLectures";
import { FaUsersBetweenLines } from "react-icons/fa6";

const CourseTeacherCard = ({course}) => {
    const {course_id, course_name,  course_description, course_price, total_lectures, duration, image_url} = course;
    
    // const [teachers, setTeachers] = useState([]);

    //loading the related teachers with this course
    // useEffect(()=>{
    //     fetch(`http://localhost:5002/courses/teachers/${course_id}`)
    //     .then(res => res.json())
    //     .then(data =>setTeachers(data.teachers))
    // },[]);


    // console.log(teachers[0]?.username)
    //truncate text
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      } else {
        // Truncate the text to the nearest word within the specified length
        const truncatedText = text.substr(0, text.lastIndexOf(' ', maxLength));
        return `${truncatedText}...`;
      }
    };
    return ( 
        <div>
            <div className="w-[70%] my-8">
            <div className="card card-side bg-base-100 shadow-xl p-6">
            <figure className="rounded-lg"><img className="w-[450px] h-[300px]" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="text-4xl">{course_name}</h2>
                <p>{course_description}</p>

                <div className="card-actions justify-between">
                <div className="flex items-center gap-8">
                    <FaUsersBetweenLines  className="text-4xl"/> 
                    800
                </div>
                <div className="flex items-center gap-5">
                    <button className="btn btn-primary text-xl">Delete</button>
                    <Link to={`/courses/main/${course_id}`}><button className="btn btn-primary text-xl">Teach</button></Link>
                </div>
               
                </div>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default CourseTeacherCard;