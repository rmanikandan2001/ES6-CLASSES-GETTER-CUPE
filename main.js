

class cube{
	
	constructor(area){
		
		this.area = area;
		
		
	}
	
	get volume(){
		return this.vol;
	}
	
	
	get vol(){
		
		return this.area* this.area;
		
	}
	
	
	
}

let vol = new cube(8);

console.log(vol.volume);