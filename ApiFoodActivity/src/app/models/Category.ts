import {model, Schema } from 'mongoose';

//Cria um objeto categoria
export const Category = model('Category', new Schema({
	name: {//Seta o dicionário nome
		type: String,//Seta o tipo
		required: true,//Seta como obrigatório
	},
	icon: {//Seta o dicionário icone
		type: String,//Seta o tipo
		required: true,//Seta como obrigatório
	}
}));