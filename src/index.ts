import {searchBtn, saveBtn} from './DOMElements';
import searchCep from './functions/search';
import saveLocalization from './functions/savelocalization';


searchBtn.addEventListener('click', searchCep);

saveBtn.addEventListener('click', saveLocalization);