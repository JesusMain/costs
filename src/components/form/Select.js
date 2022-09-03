import styles from './Select.module.css'
function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
           <select name={name} id={name} onChange={handleOnChange} value={value || ''} >
            <option>Selecione uma opção</option>
            {options.map((option) => (
                /*value=para o backend entender como ira monitorar
                key= para deixar a option unica para o react
                name= para usúario selecionar */
                <option value={option.id}key={option.id}>{option.name}</option>
            ))}
           </select>
        </div>
    )
}
export default Select