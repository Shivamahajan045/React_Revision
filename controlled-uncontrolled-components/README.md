### controlled and uncontrolled component

A controlled component is a form element whose value is fully managed by react state.

Key Idea: Single source of truth = React State.

Ex: controlled input

function ControlledInput(){
const [name, setName] = useState("");
const handleInputChange = (e) =>{
setName(e.target.value);
}
return (
<div>
<input type = "text" value = {name} onChange = {handleInputChange}/>
</div>
)
}

export default ControlledInput;
