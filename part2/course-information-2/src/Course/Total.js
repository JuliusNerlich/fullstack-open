export const Total = ({parts}) => {
  
  console.log(parts)
  const totalValue = parts.reduce((acc, exercise) => acc + exercise.exercises, 0)
  return(
    <div>
      <h4>
        total of {totalValue} exercises
      </h4>
    </div>
  )
}