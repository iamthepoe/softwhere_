class Locality{
	private _cep: string = '';
	_publicplace: string = '';
	_complement: string = '';
	_district: string = '';
	_uf: string = '';

	public set cep(cep: string){
		if(cep.length != 8){
			throw new Error('Invalid CEP!');
		}else if(cep.includes('')){
			throw new Error('Invalid CEP!');
		}else if(isNaN(parseInt(cep))){
			throw new Error('Invalid CEP!');
		}else{
			this._cep = cep;
		}
	}
	
	constructor(publicplace: string, complement: string, district: string, uf: string){
		this._publicplace = publicplace;
		this._complement = complement;
		this._district = district;
		this._uf = uf;
	}
}

export default Locality;