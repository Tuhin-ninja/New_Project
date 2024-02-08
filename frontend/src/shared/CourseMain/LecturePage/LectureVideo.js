import React from 'react';
import ReactPlayer from 'react-player';
import { useLoaderData } from 'react-router-dom';

const LectureVideo = ({lecture}) => {
    // const lecture = useLoaderData();
    // console.log(lecture);
    const {lecture_id, pdf_note, video_link} = lecture;
    return (
        <div>
            {/* this is video section */}
            <div>
            <h2 className='text-3xl mb-4'>{pdf_note}</h2>
            <ReactPlayer
                url={video_link}
                width="640"
                height="750px"
                controls
            />
            </div>
        </div>
    );
};

export default LectureVideo;