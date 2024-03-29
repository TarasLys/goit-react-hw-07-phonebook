import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteContacts }) => {
  return (
    <>
      <div className={css.general}>
        <li className={css.list}>
          {contacts.name}: {contacts.phone}
        </li>

        <br />
        <button className={css.btn} onClick={() => deleteContacts(contacts.id)}>
          Delete
        </button>
      </div>
    </>
  );
};
export default Contacts;
