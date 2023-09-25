import { Request, Response } from 'express';
import { Product } from '../../models/Product';

//Lista os produtos por categoria
export async function listProductsByCategory(req: Request, res: Response) {
	try {
		const {categoryId} = req.params;//Seta a constante

		const products = await Product.find().where('category').equals(categoryId);//Pega os produtos salvos dividindo por categoria

		res.json(products);//Salva a constante
	} catch (error) {//Tratamento de erro
		console.log(error);
		res.sendStatus(500);
	}

}