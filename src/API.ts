class API{
	private static readonly _url = 'https://viacep.com.br/';
	public static async getCep(cepnum: string){
		let res = await fetch(this._url+'ws/'+cepnum+'/json');
		let cep = await res.json();
		return cep;
	}
}

export default API;