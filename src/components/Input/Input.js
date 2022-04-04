/*
  Esta função forwardRef é necessária para que o React entenda que este
  componente terá uma ref sendo passada por props para ele.
*/
import { forwardRef } from 'react';
import styles from '../Form/Form.module.css';

/*
  Note que o primeiro parâmetro do componente funcional é as props e o segundo
  é a ref.
*/
const Input = ({ type, placeholder}, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      ref={ref}
    />
  )
}

export default forwardRef(Input);