class Locality{
	_cep: string = '';
	_publicplace: string = '';
	_complement: string = '';
	_district: string = '';
	_uf: string = '';
	
	constructor(cep: string, publicplace: string, complement: string, district: string, uf: string){
		this._cep = cep;
		this._publicplace = publicplace;
		this._complement = complement;
		this._district = district;
		this._uf = uf;
	}
}

export default Locality;