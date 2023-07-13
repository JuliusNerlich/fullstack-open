import { Part } from "./Part"
export const Content = ({parts}) => {
    console.log(parts)
    return (
      <div>
        {parts.map((part, id) => (
        <Part key={id} name={part.name} exercises={part.exercises}/> ))}
      </div>
    )
  }