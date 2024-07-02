import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalObject = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalObject[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoalObject = {
        id: Math.random(),
        title: title,
        description: description
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal addFn={handleAddGoal} />
      <CourseGoalList goals={goals} fnDelete={handleDeleteGoal} />
    </main>
  )
}
