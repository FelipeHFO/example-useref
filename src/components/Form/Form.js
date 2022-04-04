import { useCallback, useRef } from 'react';
import Input from '../Input/Input';
import styles from './Form.module.css';

export default function Form(){

  // useRef criara uma referência a algum Elemento HTML
  // useRef retornará um objeto contendo um Atributo chamado current
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitForm = useCallback((event) => {
    event.preventDefault();

    if(nameInputRef.current.value !== '' && passwordInputRef.current.value !== ''){
      console.log(
        {
          name: nameInputRef.current.value,
          password: passwordInputRef.current.value,
          message: 'Não é uma boa prática enviar a senha sem nenhum tratamento!'
        }
      );
      alert('Verifique seu console nas ferramentas de desenvolvimento!')
    } else {
      alert('Preencha todos os campos!');
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={submitForm}>

      {/* Componente Input passando uma ref como props */}
      <Input
        type="text"
        placeholder="Digite seu nome"
        className={styles.input}
        ref={nameInputRef}
      />
      
      <input
        type="password"
        placeholder="Digite sua senha"
        autoComplete="new-password"
        className={styles.input}
        ref={passwordInputRef}
      />
      <button
        type="submit"
        className={styles.button}
      >
        Entrar
      </button>
    </form>
  )
}