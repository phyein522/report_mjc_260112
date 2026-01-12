class Character {
	#name = "";
	#cls = "";
	#sx = "";
	#hp = 0;
	#mp = 0;
	#str = 0;
	#int = 0;
	#dex = 0;
	#lux = 0;
	#birthDate = new Date();

	constructor(name = "불명", cls = "없음", sx = "불명", hp = 1, mp = 1, str = 1, int = 1, dex = 1, lux = 1, birthDate = (new Date())) {
		this.#name = name;
		this.#cls = cls;
		this.#sx = sx;
		this.#hp = hp;
		this.#mp = mp;
		this.#str = str;
		this.#int = int;
		this.#dex = dex;
		this.#lux = lux;
		this.#birthDate = new Date(birthDate);	//new Date("YYYY-MM-DD")
	}
}