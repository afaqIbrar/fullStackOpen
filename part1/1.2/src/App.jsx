const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <>
       {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

const Total = (props) => {
  let totalExercise = 0;
  props.parts.forEach(part => {
    totalExercise += part.exercises;
  })
  return (
    <p>Number of exercises {totalExercise}</p>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
   const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App