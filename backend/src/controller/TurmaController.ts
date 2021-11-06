import { getRepository } from "typeorm";
import { Turma } from '../entity/Turma';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => {
    const Students = await getRepository(Turma).find()
    return response.json(Students);
};

export const saveStudent = async(request: Request, response: Response) => {
    const Student = await getRepository(Turma).save(request.body)
    return response.status(200).json( {message: 'Aluno cadastrado com sucesso!'} )
};

export const getStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const Student = await getRepository(Turma).findOne(id)
    return response.json(Student);
};
 
export const updateStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const Student = await getRepository(Turma).update(id, request.body)
 
    if (Student.affected == 1){
        const StudentUpdated = await getRepository(Turma).findOne(id)
        return response.json(StudentUpdated);
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};
 
export const deleteStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const Student = await getRepository(Turma).delete(id)
 
    if (Student.affected == 1){
        return response.status(200).json( {message: "Aluno excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const registredStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const Student = await getRepository(Turma).update(id, {
        matriculado: true,
    })
 
    if (Student.affected == 1){
        const StudentFinished = await getRepository(Turma).findOne(id)
        return response.json(StudentFinished);
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};
