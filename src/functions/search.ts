import API from '../API';
import {modal} from '../DOMElements';
import writemodal from './writemodal';
import isValidCep from './validatecep';

async function searchCep()
{
	let cep = (document.querySelector('#cepinput') as HTMLInputElement).value;
	if(isValidCep(cep)){

		let data = await API.getCep(cep);

		let array = Object.values(data);

		if(array.length<10){
			alert('CEP não encontrado.');
		}else{
			for(let i = 0; i<array.length; i++){
				if(!array[i]) array[i] = 'Não informado';
			}
			writemodal(array);
			modal.show();
		}
	}
}

export default searchCep;