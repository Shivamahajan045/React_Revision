import { useState } from "react";
const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setContactData({
      ...contactData,

      [e.target.name]: e.target.value,
    });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "") {
      alert("All fields are required!");
      return;
    }
    console.log(contactData);
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div>
      <h2>Add Contact</h2>

      <form action="">
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter name"
          onChange={handleInputChange}
          value={contactData.name}
          name="name"
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="enter name"
          onChange={handleInputChange}
          value={contactData.email}
          name="email"
        />
        <br />
        <br />
      </form>

      <button className="add-contact" type="submit" onClick={handleAddContact}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
