import {Modal} from 'bootstrap';
import API from './API';

const element = document.querySelectorAll('.modal')[0] as HTMLElement;

const modal = new Modal(element, {
	keyboard: true,
	backdrop: true
});

const content = document.querySelector('#content') as HTMLDivElement;
const btn = document.querySelector('#searchBtn') as HTMLButtonElement;

btn.addEventListener('click', async ()=>{
	let cep = (document.querySelector('#cepinput') as HTMLInputElement).value;
	if(!cep){
		alert('O campo não pode estar vazio!');
	}else if(isNaN(parseInt(cep))){
		alert('Insira somente números!');
	}else if(cep.length != 8){	
		alert('Cep inválido!');
	}else{
		let data = await API.getCep(cep);
		let array = Object.values(data);
		if(array.length<10){
			alert('CEP Inválido!');
		}else{
			
			for(let i = 0; i<array.length; i++){
				if(!array[i]) array[i] = 'Não informado';
			}
			
			content.innerHTML = 
			`
			<p><b>CEP: </b>${array[0]}</p>
			<p><b>Logradouro: </b>${array[1]}</p>
			<p><b>Complemento: </b>${array[2]}</p>
			<p><b>Bairro: </b>${array[3]}</p>
			<p><b>Localidade: </b>${array[4]}</p>
			<p><b>UF: </b>${array[5]}</p>
			`
			modal.show();
		}
	}
	
});
