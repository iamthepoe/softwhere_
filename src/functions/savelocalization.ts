import API from '../API';
import Locality from '../Locality';

async function saveLocalization(){
    let savedLocalizations: Array<Locality> = [];

    if(localStorage.getItem('savedLocalizations')){
        savedLocalizations = JSON.parse(localStorage.getItem('savedLocalizations') as string);
    }

    let local = await API.getCep((document.querySelector('#cepinput') as HTMLInputElement).value);
    let localExists = savedLocalizations.find(localization => localization._cep == local.cep);
    if(!localExists){
        savedLocalizations.push(new Locality(local.cep, local.logradouro, local.complemento, local.distrito, local.uf));
        localStorage.setItem('savedLocalizations', JSON.stringify(savedLocalizations));
        alert('Localização salva!');
    }else{
        alert('Esta localização já está salva!');
    }
}

export default saveLocalization;
