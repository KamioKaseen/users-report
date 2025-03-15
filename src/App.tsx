import { SearchField, UserCard } from "@components";
import './App.scss';

export default function App() {
  return (
    <div className="container">
      <SearchField />

      <main className="users-container">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </main>
    </div>
  )
}


