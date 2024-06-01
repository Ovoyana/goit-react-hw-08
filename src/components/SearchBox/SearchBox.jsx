import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors'

export default function SearchBox(){
  const searchContact = useSelector(selectNameFilter);
  const dispatch = useDispatch();
    return (
        <div className={css.box}>
          <p className={css.text}>Find contacts by name</p>
          <input
          className={css.input}
            type="text"
            value={searchContact}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </div>
      );
}