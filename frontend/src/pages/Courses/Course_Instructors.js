import { isNull } from "lodash";

const CourseInstructors = ({teacher}) => {
    const {email,  username, image_url} = teacher;

    return ( 
        <div className="w-[80%] m-auto">
            <div className="flex gap-20 py-10">
                <div className="w-[40%]">
                    <img className="rounded-full w-96 h-96" src={"https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=1024x1024&w=is&k=20&c=LL6lof_jAFsmPoGn_qRKEiEEFf9XATGm7aQMObT4Z4U="} alt="" />
                </div>
                <div className="w-[60%] text-left">
                    <h1 className="text-3xl text-left text-cyan-900">{username}</h1>
                    <h3 className="text-2xl text-cyan-700 py-4">{email}</h3>
                    <h4 className="text-cyan-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, molestias officiis earum enim deserunt accusantium minus possimus ab! Non illo sint praesentium maiores. Laudantium asperiores assumenda, corporis hic error sapiente fuga aliquam. Maiores debitis, molestias rem unde quaerat aliquam explicabo velit eaque voluptas nulla quo quasi quisquam, sint pariatur quibusdam reprehenderit in, nisi ex voluptatem animi enim voluptates! Culpa consectetur itaque vitae temporibus consequuntur inventore? Sunt recusandae omnis veniam officiis? Libero, officia beatae facere molestiae modi explicabo optio minima iure dignissimos amet quas expedita perferendis quaerat adipisci itaque qui provident odio quo quibusdam natus, consectetur perspiciatis eum officiis! Nulla voluptate consequatur, rerum rem a provident! Cum labore sit sed distinctio corporis quo, quas nulla ipsa eveniet quaerat, facere magni a. Quae, doloribus dolorum ipsam beatae a iste! </h4>
                </div>
            </div>
        </div>
     );
}
 
export default CourseInstructors;