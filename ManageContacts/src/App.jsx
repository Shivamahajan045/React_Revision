import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey));
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuidv4(), data }]);
  };

  const deleteContact = (id) => {
    const updatedContactList = contact.filter((el) => el.id !== id);
    setContact(updatedContactList);
  };
  return (
    <div className="app">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
