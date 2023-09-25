import { Request, Response } from 'express';
import { Category } from '../../models/Category';

//Cria uma nova categoria
export async function createCategory(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		const {icon, name} = req.body;//Seta o icone e o nome
		const category = await Category.create({icon, name});//Seta a categoria e o nome da categoria
		res.status(201).json(category);//salva a categoria
	} catch (error) {//Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}
}