export default function ExerciseTable({exercises}){
  return (
    <>
    <div>
    <table className="exercise-table">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Duration</th>
          <th>Rest</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((ex, i) => (
          <tr key={i}>
            <td>{ex.exercise_name}</td>
            <td>{ex.number_of_sets}</td>
            <td>{ex.number_of_reps}</td>
            <td>{ex.video_link}</td>
            <td>{ex.day}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

