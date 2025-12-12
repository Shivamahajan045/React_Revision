useCallback is a React hook that memoizes a function, so the same function reference is returned across re-renders unless dependencies change.

Syntax:
const memoizedFn = useCallback(() => {
// function logic
}, [dependencies]);

✅ 2. Why do we use useCallback?
✔ To prevent unnecessary re-renders

When you pass functions as props to child components, they get new references on every re-render.

This triggers unnecessary child re-renders.

useCallback ensures the function reference stays the same unless needed.

✔ To maintain referential equality

Useful with:

React.memo

useEffect dependency arrays

event handlers passed to children

✔ To avoid re-creating functions on every render

React recreates functions each render → not always costly,
but when used in expensive components → impacts performance.

🚫 3. When NOT to use useCallback?

Interviewers love this question.

When child component is not memoized, useCallback gives no benefit.

When function is simple or small.

Overusing it can increase memory usage and reduce readability.

Only use after profiling.

🔥 4. Simple example — Parent passes handler to child
❌ Problem without useCallback:

A new function is created on every render → child re-renders.

function Parent() {
const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
};

return <Child onClick={handleClick} />;
}

Even if Child uses React.memo, it still re-renders because
handleClick is different reference each time.

✅ With useCallback (function reference preserved)
const handleClick = useCallback(() => {
setCount(c => c + 1);
}, []);

Now Child will not re-render unless necessary.

📌 5. Real-world example — Passing stable functions
const filteredData = useMemo(() => {
return items.filter(filterFunction);
}, [items, filterFunction]);

Here filterFunction should be stable, so we write:

const filterFunction = useCallback(item => item.active, []);

Prevents useMemo from recalculating unnecessarily.

🔥 6. useCallback vs useMemo (common interview question)
Hook Memoizes
useCallback A function reference
useMemo A value (result of a function)

Example:

useCallback(() => doSomething(), []) // memoizes the function

useMemo(() => computeSomething(), []) // memoizes the computed value
