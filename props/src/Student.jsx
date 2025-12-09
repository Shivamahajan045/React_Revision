import PropTypes from "prop-types";

const Student = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Name: {props.name}</h1>

      <h2>Age: {props.age}</h2>
    </div>
  );
};

Student.defaultProps = {
  name: "guest",
  age: 0,
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Student;
