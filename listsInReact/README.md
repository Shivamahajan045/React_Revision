1️⃣ What are Lists in React?

Lists in React are used to render multiple similar elements dynamically from an array of data.

👉 Usually done using Array.map()

const users = ["Shiva", "Amit", "Rahul"];

function App() {
return (
<ul>
{users.map((user) => (
<li>{user}</li>
))}
</ul>
);
}

2️⃣ Why do we use Lists?

Avoid writing repeated JSX

Dynamic rendering from API data

Improves code readability & scalability

3️⃣ What is key in React? ⭐ (VERY IMPORTANT)
🔹 Definition

A key is a special prop that helps React identify which items changed, added, or removed.

{users.map((user, index) => (

  <li key={index}>{user}</li>
))}

4️⃣ Why is key important?

React uses Virtual DOM diffing.
Keys help React:

Re-render only changed items

Improve performance

Avoid UI bugs

5️⃣ Can we use index as a key? ❌ (Interview trap)
❌ Not recommended when:

List items can be reordered

Items can be deleted/inserted

✅ Acceptable when:

Static list

No change in order

❌ Bad example:

items.map((item, index) => <li key={index}>{item}</li>);

✅ Good example:

items.map(item => <li key={item.id}>{item.name}</li>);

6️⃣ Rendering Objects in a List
const users = [
{ id: 1, name: "Shiva" },
{ id: 2, name: "Amit" }
];

return (

  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

7️⃣ Conditional Rendering with Lists
{users.length > 0 ? (
users.map(user => <p key={user.id}>{user.name}</p>)
) : (

  <p>No users found</p>
)}

8️⃣ List + Event Handling (Real-World)
const deleteUser = (id) => {
setUsers(users.filter(user => user.id !== id));
};

{users.map(user => (

  <div key={user.id}>
    <span>{user.name}</span>
    <button onClick={() => deleteUser(user.id)}>Delete</button>
  </div>
))}

9️⃣ Interview Question:

Why React throws warning: “Each child in a list should have a unique key”?

✅ Answer:

Because React needs a unique key to track list items efficiently during reconciliation and re-rendering.

🔟 One-Line Interview Answers (Rapid Fire)

Lists are rendered using → map()

Key purpose → Identify list items uniquely

Key stored in props? → ❌ No

Best key → Unique ID from backend

Index as key? → Only for static lists

🧠 Perfect Interview Closing Line

“Keys help React optimize rendering by uniquely identifying list elements during reconciliation.”
