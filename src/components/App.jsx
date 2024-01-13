import { ContactForm } from '../components/Forms/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from '../components/ContactsList/ContactsList';

export const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
