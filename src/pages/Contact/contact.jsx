import { useState, useEffect } from "react";

export default function Contact() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  const addCounter = () => {
    setCounter((prev) => prev + 1);
  };

  // useEffect(() => {
  //   async function fetchUsers() {
  //     await fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //       });
  //   }
  //   fetchUsers();
  // });
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Contact</h1>
      <p>You clicked {counter} times</p>
      <button className="btn btn-primary bg-blue-600" onClick={addCounter}>
        Click me
      </button>
      <div>
        <ul>
          {users.length ? (
            <>
              {" "}
              {users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
            </>
          ) : (
            <>
              <li>No users found</li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
