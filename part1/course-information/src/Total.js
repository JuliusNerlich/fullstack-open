export const Total = ({parts}) => {
  console.log(parts)
  const totalValue = parts.reduce((acc, exercise) => acc + exercise.exercises, 0)
  return(
    <div>
      <p>
        Number of exercises {totalValue}
      </p>
    </div>
  )
}