import {content} from '../DOMElements';

function writemodal(array: unknown[]){
	content.innerHTML = 
	`
		<p><b>CEP: </b>${array[0]}</p>
		<p><b>Logradouro: </b>${array[1]}</p>
		<p><b>Complemento: </b>${array[2]}</p>
		<p><b>Bairro: </b>${array[3]}</p>
		<p><b>Localidade: </b>${array[4]}</p>
		<p><b>UF: </b>${array[5]}</p>
	`
}

export default writemodal;
