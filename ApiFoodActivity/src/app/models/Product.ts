import {model, Schema } from 'mongoose';

//Cria um novo objeto Product
export const Product = model('Product', new Schema({
	name: {//Seta o dicionário name
		type: String,//Configura o tipo
		required: true,//Seta como obrigatório
	},
	description: {//Seta o dicionário description
		type: String,//Configura o tipo
		required: true,//Seta como obrigatório
	},
	imagePath: {//Seta o dicionário imagePath
		type: String,//Configura o tipo
		required: true,//Seta como obrigatório
	},
	price: {//Seta o dicionário price
		type: Number,//Configura o tipo
		required: true,//Seta como obrigatório
	},
	ingredients: {//Seta o dicionário ingredients
		required: true,//Seta como obrigatório
		type:[{//Seta o dicionário type
			name: {//Seta o dicionário name
				type: String,//Configura o tipo
				required: true,//Seta como obrigatório
			},
			icon: {//Seta o dicionário icon
				type: String,//Configura o tipo
				required: true,//Seta como obrigatório
			},
		}],
	},
	category: {//Seta o dicionário category
		type: Schema.Types.ObjectId,//Configura o tipo
		required: true,//Seta como obrigatório
		ref: 'Category',//Seta a referência
	},
}));