import CursoModel from "../model/curso-model";
import ValidaCurso from "../services/validaCurso.js"


const cursoController = (app) => {

    // cria uma instancia da classe CursoModel que sera usada para todas rotas
    const cursoModel = new CursoModel()

    //retornando um curso
    server.get('./cursos/:index', (req, res) => {
        const index = req.params

        return res.json(cursos[index]);
    })


    //retornando todos os cursos
    server.get('/cursos/:index', (req, res) => {
        const todosCursos = cursoModel.retornaCursos()

        res.json(
            {
                "cursos": todosCursos,
                "erro": false
            }
        )
    });

    //adicionar curso
    server.post('/cursos', (req, res) => {
        const body = req.body
        try {
            const novoCurso = new ValidaCurso(body.nome)

            CursoModel.insereCurso(novoCurso)

            res.json(

                {
                    "msg": "Curso inserido com sucesso",
                    "Curso": "novoCurso",
                    "erro": false
                }
            )

        } catch (error) {

            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }

    })



/* Métodos abaixo tem que passar pra MVC */
    //Atualizar um curso
    server.put('/cursos', (req, res) => {
        const index = req.params;
        const name = req.body;

        cursos[index] = name

        return res.json(cursos)
    });

    //deletar curso
    server.delete('/cursos/:index', (req, res) => {
        const index = req.params;

        cursos.splice(index, 1)

        return res.json({ message: 'O curso foi deletado' })
    })
/* Métodos acima tem que passar pra MVC */




}

export default cursoController