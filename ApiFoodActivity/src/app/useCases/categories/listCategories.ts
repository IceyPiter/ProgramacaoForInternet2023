import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {//Lista as categorias existentes 
	try {
		const categories = await Category.find();//Captura as categorias

		res.json(categories);//Salva a constante
	} catch (error) {//Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}
}