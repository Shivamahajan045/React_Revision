✅ Top useRef Interview Questions & Answers
1️⃣ What is useRef?

Answer:
useRef is a React hook that returns a mutable object with a .current property.
It is mainly used to preserve values across renders without triggering a re-render, and to access/manipulate DOM elements.

2️⃣ What's the difference between useRef and useState?

Answer:

useState useRef
Triggers re-render when updated Does NOT re-render component
Used for UI-related state Used for non-UI values
Slower for rapidly updating values Perfect for fast, frequent updates
3️⃣ Does changing ref.current cause re-render?

Answer:
❌ No.
Changing a ref's .current property never re-renders the component.

4️⃣ What are common use cases of useRef?

Answer:

DOM manipulation (focus, scroll, play video, etc.)

Storing values across renders

Storing previous state or props

Handling timers (setTimeout, setInterval)

Caching expensive values

Preventing re-renders when storing mutable data

5️⃣ Can useRef trigger UI updates?

Answer:
Not directly.
If you change ref.current, React does NOT update the UI.

To update UI → you must use useState.

6️⃣ How is useRef used for DOM manipulation?

Example:

const inputRef = useRef();

function focusInput() {
inputRef.current.focus();
}

<input ref={inputRef} />
<button onClick={focusInput}>Focus</button>

7️⃣ How is useRef used to store previous values?

Example:

const prevValue = useRef();

useEffect(() => {
prevValue.current = value;
}, [value]);

8️⃣ Why is useRef good for timers?

Because updating .current does not cause re-render.

const timer = useRef(null);

timer.current = setTimeout(() => {...}, 1000);

9️⃣ What happens when a component re-renders — does useRef reset?

Answer:
❌ No.
ref.current persists for the entire lifetime of the component.

🔟 When should you NOT use useRef?

❌ When you want the UI to update.
Use useState instead.

✅ Real-World useRef Examples (Interview Favorites)
Example 1: Auto-focus an input
const inputRef = useRef();

useEffect(() => {
inputRef.current.focus();
}, []);

Example 2: Store previous state
const prevCount = useRef();

useEffect(() => {
prevCount.current = count;
}, [count]);

Example 3: Prevent re-renders by storing mutable data
const renderCount = useRef(0);

renderCount.current++;

Example 4: Video player control
const videoRef = useRef();

function playVideo() {
videoRef.current.play();
}

Example 5: Form validation without re-renders
const passwordRef = useRef();
