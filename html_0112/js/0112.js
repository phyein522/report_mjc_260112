class Character {
	#characters = [
		{
			name: "소리없는폭풍",
			cls: "W",
			sx: "M",
			hp: 50,
			mp: 11,
			str: 99,
			int: 5,
			dex: 15,
			lux: 7,
			birthDate: new Date("2026-01-02")
		}
	];

	printList() {
		$(".listDataBlock").empty();
		this.#characters.forEach(character => $(".listDataBlock").append(this.printRow(character)));
	}

	printRow(character) {
		let html = `
<div class="listDataRow">
	<div class="listItem">
		<div class="itemData text-wrapper">${character.name}</div>
	</div>
	<div class="listItem">
		<div class="itemData text-wrapper">${this.printSx(character.sx)}</div>
	</div>
	<div class="listItem">
		<div class="itemData text-wrapper">${this.printCls(character.cls)}</div>
	</div>
	<div class="listItem">
		<div class="itemData text-wrapper">HP: ${character.hp}</div>
		<div class="itemData text-wrapper">MP: ${character.mp}</div>
		<div class="itemData text-wrapper">STR: ${character.str}</div>
		<div class="itemData text-wrapper">INT: ${character.int}</div>
		<div class="itemData text-wrapper">DEX: ${character.dex}</div>
		<div class="itemData text-wrapper">LUX: ${character.lux}</div>
	</div>
</div>
`;
		return html;
	}

	printSx(characterSx) {
		switch(characterSx) {
			case "M":
				return "남성";
			case "W":
				return "여성";
			default:
				return "불명";
		}
	}

	printCls(characterCls) {
		switch(characterCls) {
			case "W":
				return "전사";
			case "M":
				return "마법사";
			case "A":
				return "궁수";
			case "B":
				return "도적";
			default:
				return "불명";
		}
	}
}

$(() => {
	let rpg = new Character();
	rpg.printList();

	$(".btnAdd").click((e) => {
		e.preventDefault();
	});
	$(".btnUpt").click((e) => {
		e.preventDefault();
	});
	$(".btnDel").click((e) => {
		e.preventDefault();
	});
});