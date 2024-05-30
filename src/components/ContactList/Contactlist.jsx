import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/contactsSlice";
import { selectFilteredContacts } from "../../redux/contacts/selectors";



export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);
      return (
          <>
          {loading && <p className={css.text}>Loading...</p>}
        <ul className={css.list}>
          {contacts.map(contact => {
              return (
            <li className={css.item} key={contact.id} >
              <Contact data={contact}/>
            </li>
          );
          })}
        </ul>
      </>
      );
    }
    