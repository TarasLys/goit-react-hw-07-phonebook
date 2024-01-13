import Contacts from '../Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';

const ContactsList = () => {
  const { items, isLoading, error, filter } = useSelector(getTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {Array.isArray(items) &&
        items
          .filter(
            item =>
              filter === '' ||
              item.name.toLowerCase().includes(filter?.toLowerCase().trim())
          )

          .map((el, index) => (
            <Contacts
              contacts={el}
              key={index}
              deleteContacts={deleteContacts}
            />
          ))}
    </>
  );
};
export default ContactsList;
