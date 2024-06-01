import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/Contactlist.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import css from "./ContactsPage.module.css";
import { PiBookOpenTextLight } from "react-icons/pi";
export default function ContactsPage () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.box}>
      <h1 className={css.title}><PiBookOpenTextLight className={css.icon}/>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">You don't have contacts!!!</p>
      )}
    </div>
  );
};

