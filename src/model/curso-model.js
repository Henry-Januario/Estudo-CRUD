import cursos from "./database/cursos.js"


export default class CursoModel{

    insereCurso = (cursos)=>{
        const name = req.body
        cursos.push(name)

        return res.json(cursos)


    /* 
    //Como insere no Insomnia

    {
        "name": "nodeJS"
    } 
    */
    }

    retornaCurso = ()=>{
        return res.json(cursos);
    }

}
