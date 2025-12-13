✅ Lifting State Up in React (Interview Explanation)
⭐ What does “Lifting State Up” mean?

Lifting state up means:

Moving shared state from child components to their nearest common parent so that multiple components can use and sync the same data.

In React, data flows top → down (one-way data flow).
So if two sibling components need the same data, the state cannot stay in one child.

⭐ Why do we need Lifting State Up?

React rules:

A child cannot directly share state with another child

Props flow only from parent to child

So we:

Move the state to the common parent

Pass data down via props

Pass update functions down via callback props
