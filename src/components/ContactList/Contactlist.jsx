import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/selectors";



export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
   
      return (
          <>
          {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(contact => {
              return (
            <li className={css.item} key={contact.id} >
              <Contact contact={contact}/>
            </li>
          );
          })}
        </ul>
          )}
      </>
      );
    }
    