import CourseGoal from "./CourseGoal";
import { type CourseGoalObject } from "../App";
import InfoBox from "./InfoBox";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoalObject[];
  fnDelete: (id: number) => void;
}

export default function CourseGoalList({ goals, fnDelete }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no coure goals yet. Start adding some!</InfoBox>
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are collecting a lot of goals, don't put too much on your plate
      </InfoBox>
    )
  }

  return (
    <Fragment>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} fnDelete={fnDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}