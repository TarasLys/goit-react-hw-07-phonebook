import Contacts from '../Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsRemove } from '../../redux/postDetailReducer';
const ContactsList = () => {
  const contacts = useSelector(state => state.postDetails.contacts);
  const filter = useSelector(state => state.postDetails.filter);
  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(setContactsRemove(id));
  };
  return (
    <>
      {contacts
        ?.filter(
          contact =>
            filter === '' ||
            contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(el => (
          <Contacts contacts={el} key={el.id} deleteContacts={deleteContacts} />
        ))}
    </>
  );
};
export default ContactsList;
