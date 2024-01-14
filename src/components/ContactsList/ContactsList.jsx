import Contacts from '../Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';

const ContactsList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {filterContacts.map((el, index) => (
        <Contacts contacts={el} key={index} deleteContacts={deleteContacts} />
      ))}
    </>
  );
};
export default ContactsList;
