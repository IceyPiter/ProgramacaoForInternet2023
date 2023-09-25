import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//Deleta uma Order
export async function cancelOrder(req: Request, res: Response) {
	try {
		const { orderId } = req.params;//Seta a constante
		await Order.findByIdAndDelete(orderId);//Procura a order pelo id e deleta
		res.sendStatus(204);

	} catch (error) {//Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}
}