import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//Cria uma nova Order
export async function createOrder(req: Request, res: Response) {
	try {
		const {table, products} = req.body;//Seta as constantes

		const order = await Order.create({ table, products });//Cria uma order
		res.status(201).json(order);//Salva a order
	} catch (error) { //Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}
}