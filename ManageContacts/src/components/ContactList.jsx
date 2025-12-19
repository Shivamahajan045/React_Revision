import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = ({ contact, deleteContact }) => {
  return (
    <>
      <div className="contact-list-title">Contact List</div>

      {contact.length === 0 && <p className="empty-text">No contacts yet</p>}

      <div className="contact-list">
        {contact.map((val) => (
          <div key={val.id} className="contact-item">
            <div className="contact-info">
              <span className="name">{val.data.name}</span>
              <span className="email">{val.data.email}</span>
            </div>

            <span
              className="delete-btn"
              onClick={() => deleteContact(val.id)}
              title="Delete contact"
            >
              <DeleteIcon fontSize="small" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
