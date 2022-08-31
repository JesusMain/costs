import {useEffect, useState} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    /*Cria uma constante array vazia, esperando a resposta q vem da api*/
    const [categories, setCategories] = useState([])
    /*Faz com que execute somente uma vez */
    useEffect(() => {
        /*Para pegar as categorias do BD...db.json e exibir para o usuario no array categories */
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers:{'Content-type': 'application/json',},
    })
    /*recebe a resposta do fetch e transforma em json*/
    .then((resp) => resp.json())
    /*pega os dados json e coloca em setCategories*/
    .then((data) => {
        setCategories(data)
    })
    /*imprimi um erro q possa ocorrer*/
    .catch((err) => console.log(err))
    }, [] )

    return(
        <form className={styles.form}>
           <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />
           <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total" />
           <Select  name="category_id" text="Selecione a Categoria" options={categories} />
            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm