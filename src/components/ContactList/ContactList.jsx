import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/Contacts/contactsOperations';
import { selectorContacts, selectorFilter } from 'redux/Contacts/selectors';
import { List, Item, BtnDelete } from './ContactList.styled';
import { refreshOperation } from 'redux/Auth/authOperations';

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (filter === '') return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const filteredContacts = handleFilter();

  useEffect(() => {
    //   dispatch(refreshOperation()).then(() => dispatch(getContacts()));
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <p>{`${contact.name}:  ${contact.number}`}</p>
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};
