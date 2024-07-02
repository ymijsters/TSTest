import { type PropsWithChildren } from "react"

type CourseGoalProps = PropsWithChildren<{ 
    id: number;
    title: string; 
    fnDelete: (id: number) => void
}>;

export default function CourseGoal({ id, title, fnDelete, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => fnDelete(id)}>Delete</button>
        </article>
    )
}