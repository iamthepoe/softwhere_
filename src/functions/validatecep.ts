function isValidCep(cep: string): boolean{
    if(!cep){
		alert('O campo não pode estar vazio!');
        return false;
	}else if(isNaN(parseInt(cep)) || cep.includes('-')){
		alert('Insira somente números!');
        return false;
	}else if(cep.length != 8){	
		alert('Cep inválido!');
        return false;
    }else{
        return true;
    }
}

export default isValidCep;