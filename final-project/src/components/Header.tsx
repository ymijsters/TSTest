import Button from '../UI/Button';

export default function Header() {
  return (
    <header id='main-header'>
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <Button textOnly to='/'>
            Our Mission
          </Button>
          <Button textOnly to='/sessions'>
            Browse Sessions
          </Button>
          <Button /*onClick missing */>Upcoming Sessions</Button>
        </ul>
      </nav>
    </header>
  );
}
