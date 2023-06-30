import { Part } from "./Part"
export const Content = ({parts}) => {
    console.log(parts)
    return (
      <div>
        {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises}/> ))}
      </div>
    )
  }