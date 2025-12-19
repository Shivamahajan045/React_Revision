import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

function App() {
  const localStorageKey = "contact";

  const [contact, setContact] = useState(() => {
    const storedContacts = localStorage.getItem(localStorageKey);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuidv4(), data }]);
  };

  const deleteContact = (id) => {
    setContact(contact.filter((el) => el.id !== id));
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
