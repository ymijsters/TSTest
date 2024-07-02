import Button from '../UI/Button.tsx';
import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id='sessions-page'>
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <ul id='sessions-list'>
        {SESSIONS.map((session) => {
          return (
            <li className='session-item'>
              <img src={session.image} />
              <div className='session-data'>
                <h3> {session.title}</h3>
                <p>{session.summary}</p>
                <Button className='actions'>Learn More</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
