import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//Muda os status de uma order
export async function changeOrderStatus(req: Request, res: Response) {
	try {//Seta as constantes
		const { orderId } = req.params;
		const { status } = req.body;

		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){//teste de status
			return res.status(400).json({//retorna o status 400 e salva
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'//Seta a variavel erro
			});
		}
		await Order.findByIdAndUpdate(orderId, { status });//Atualiza o status da order
		res.sendStatus(204);
	} catch (error) {//Tratamento de erros
		console.log(error);
		res.sendStatus(500);
	}
}