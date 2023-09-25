import { Request, Response } from 'express';
import { Product } from '../../models/Product';

//Lista os produtos já salvos
export async function listProducts(req: Request, res: Response) {
	try {
		const products = await Product.find();//Procura o produto

		res.json(products);
	} catch (error) {//Tratamento de erro
		console.log(error);
		res.sendStatus(500);
	}

}