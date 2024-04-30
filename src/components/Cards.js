import React from 'react'
import Card from './Card';

const Cards = (courses) => {
    let allCourses = [];

    // returns list of all courses received from the API response
    const getCourses = () => {

        console.log("Printing Courses");
        console.log(courses);
        Object.values(courses).forEach( (courseCategory)=> {
        courseCategory.forEach((course)=>{
            allCourses.push(course);
        })
    })

    return allCourses;
    
}
  return (
    <div>
    {!courses? (<div>
        <p>No Data Found</p>
    </div>) : (getCourses().map( (course) => {
       return <Card key = {course.id} course={course} />
    }))}
    </div>
  );
};

export default Cards;
