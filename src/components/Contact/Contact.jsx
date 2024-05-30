import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from 'react-hot-toast';


export default function Contact  ({data: { id, name, number}})  {
  const dispatch = useDispatch();
  function handleDeleteContact(id) {
    dispatch(deleteContact(id));
    toast.success("Contact was deleted");
  }
  return (
    <div className={css.container}>
        <div>
        <div className="set">
      <p className={css.input}> 
      <RiContactsFill className={css.icon} />
         {name}
      </p>
      </div>
      <div className="set">
      <p className={css.input}> 
      <FaPhone className={css.icon} />
         {number}
      </p>
      </div>
      </div>
      <button className={css.btn} 
       onClick={() => handleDeleteContact(id)}
       type="button"
       >
        Delete
      </button>
    </div>
  );
};

