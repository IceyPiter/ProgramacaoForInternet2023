import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')//Hospeda o servidor porta 3000
	.then(() => {
		//configura as variaveis
		const app = express();
		const port = 3000;

		//Atribui os valores para o objeto app
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			//Printa a mensagem no terminal
			console.log(`🚗 Server is runing on http://localhost:${port}`);
		});
	})//Tratamento de erros
	.catch(() => console.log('Erro ao conectar no mongoDb'));