import { Request, Response } from 'express';
import { Product } from '../../models/Product';

//Cria uma novo campo nos produtos
export async function createProduct(req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename;
		const { name, description, price, category, ingredients } = req.body;//Seta as constantes

		const product = await Product.create({//Inicializa uma constante com os valores descritos abaixo
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [],
		});
		//Responde com uma 201 e salva o produto
		res.status(201).json(product);
	} catch (error) {//Tratamento
		console.log(error);
		res.sendStatus(500);
	}
}