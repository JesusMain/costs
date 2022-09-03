import {useEffect, useState} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }){
    /*Cria uma constante array vazia, esperando a resposta q vem da api*/
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    /*Faz com que execute a cada renderização */
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

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        //handleSubmit(project)
    }
    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e) {
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
           <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" 
           handleOnChange={handleChange} />
           <Input type="number" text="Orçamento do Projeto" name="budget"
           handleOnChange={handleChange} placeholder="Insira o orçamento total" />
           <Select  name="category_id" text="Selecione a Categoria" options={categories} 
           handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm