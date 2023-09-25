import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//Lista a ordens existentes
export async function listOrders(req: Request, res: Response) {
	try {
		const orders = await Order.find()//Procura as ordens
			.sort({creatAt: 1})//Ordena
			.populate('products.product');//Popula produtos

		res.json(orders);//Salva as alterações
	} catch (error) {//Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}

}