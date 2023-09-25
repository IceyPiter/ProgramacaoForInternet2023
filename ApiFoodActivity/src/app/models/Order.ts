import {model, Schema } from 'mongoose';

//Cria um objeto Order
export const Order = model('Order', new Schema({
	table: {//Seta o dicionário table
		type: String,//Seta o tipo
		required: true,//Seta como obrigatório
	},
	status: {//Seta o dicionário status
		type: String,//Seta o tipo
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],//Seta o enum
		default: 'WAITING',//Seta o default
	},
	creatdAt: {//Seta o dicionário creatdAt
		type: Date,//Seta o tipo
		default: Date.now,//Seta o default
	},
	products: {//Seta o dicionário products 
		required: true,
		type:[{//Seta o dicionário type
			product: {//Seta o dicionário product
				type: Schema.Types.ObjectId,//Seta o tipo
				required: true,//Seta como obrigatório
				ref: 'Product',//Seta a referência
			},
			quantity: {//Seta o dicionário quantity
				type: Number,//Seta o tipo
				default: 1,//Seta o default
			},
		}],
	},
}));