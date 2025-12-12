✅ useMemo Hook — React Interview Notes

1. What is useMemo?

useMemo is a React hook that memoizes (caches) the result of an expensive function so that it does not re-run on every render.

Syntax:
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);

✅ 2. Why do we use useMemo?

Interview points:

✔ Prevents unnecessary re-computation

Useful when:

You’re doing heavy calculations (loops, sorting, filtering, math operations, huge arrays).

The component re-renders often, but the expensive value doesn’t need to be recalculated every time.

✔ Improves performance

Helps avoid lag in UI.

✔ Helps with referential equality

Prevents child components from re-rendering when the memoized value is passed as a prop.

✅ 3. When NOT to use useMemo?

Interviewers LOVE this question.

When the computation is light.

When the dependency array changes often → memoization gives no benefit.

Overuse can make code complex for no real performance gain.

React already does many optimizations — only use when profiling shows bottleneck.

✅ 4. Example for interview
❌ Without useMemo (expensive function re-runs every render)
const App = () => {
const [count, setCount] = useState(0);

const expensiveCalculation = (num) => {
console.log("Calculating...");
for (let i = 0; i < 1000000000; i++) {} // heavy loop
return num \* 2;
};

const result = expensiveCalculation(count); // re-runs every time

return (
<>

<p>Result: {result}</p>
<button onClick={() => setCount(c => c + 1)}>Increment</button>
</>
);
};

✅ With useMemo (runs ONLY when count changes)
const result = useMemo(() => {
return expensiveCalculation(count);
}, [count]);

🔥 5. Real-world example (very important): filtering large lists
const filteredUsers = useMemo(() => {
return users.filter(user => user.active);
}, [users]);

This prevents filtering again on every render if users didn’t change.

🎯 6. useMemo vs useCallback

Interviewers often ask this.

Hook Memoizes
useMemo The result / value of a function
useCallback The function itself
