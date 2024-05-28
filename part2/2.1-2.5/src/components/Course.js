import React from 'react'
const Header = ({ heading }) => {
    return (
        <h1>{heading}</h1>
    )
}

const Part = ({ name, exercise }) => {
    return (
        <p>{name}{' '}{exercise}</p>
    )
}
const Total = ({ parts }) => {
    let total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (<b>total of {total} exercises</b>)
}

const Content = ({ parts }) => {
    return (
        parts.map((part) => (
            <Part key={part.id} name={part.name} exercise={part.exercises} />
        ))
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header heading={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course