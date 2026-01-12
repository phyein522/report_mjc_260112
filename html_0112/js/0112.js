class Character {
	#characters = [
		{
			id: 0,
			name: "소리없는폭풍",
			cls: "W",
			sx: "M",
			hp: 50,
			mp: 11,
			str: 99,
			int: 5,
			dex: 15,
			lux: 7,
			birthDate: "2026-01-12",
			imgUrl: "https://i.namu.wiki/i/mD0hjSfGZiYLxny86p1-MqpLphYPoQ6fuErnlH1rVhHdwcDoVxb-BDVZBLLrB_Ll2lSiLd6WJGL3s4tcHE6e-KPFu8z2cVryYNL0fMjslduRc_nDT8buagyTLm0dV0e65O6x9VQrwA6OzInWY_dSoA.webp"
		},
		{
			id: 1,
			name: "간zㅣ폭풍",
			cls: "M",
			sx: "M",
			hp: 11,
			mp: 50,
			str: 5,
			int: 99,
			dex: 7,
			lux: 15,
			birthDate: "2026-01-12",
			imgUrl: "https://i.namu.wiki/i/mD0hjSfGZiYLxny86p1-MqpLphYPoQ6fuErnlH1rVhHdwcDoVxb-BDVZBLLrB_Ll2lSiLd6WJGL3s4tcHE6e-KPFu8z2cVryYNL0fMjslduRc_nDT8buagyTLm0dV0e65O6x9VQrwA6OzInWY_dSoA.webp"
		}
	];

	printList() {
		$(".listDataBlock").empty();
		this.#characters.forEach(character => $(".listDataBlock").append(this.printRow(character)));
	}

	printRow(character) {
		let html = `
<div class="listDataRow">
	<div style="display: none;">${character.id}</div>
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

	checkInputData(...noCheck) {
		if(!noCheck.includes("id")) {
			if (this.#characters.findIndex(character => character.id == $("#id").val()) == -1) {
				alert(`게임 목록에서 선택한 후 수정/삭제/공격하세요.`);
				return false;
			}
		}
		if(!noCheck.includes("name")) {
			if ($("#name").val().length < 1 || $("#name").val().length > 10) {
				alert(`닉네임은 1 ~ 10자 중에서 입력해 주세요.`);
				$("#name").focus();
				return false;
			}
		}
		if(!noCheck.includes("sx")) {
			if ($("input[name='gender']:checked").val() != "M" && $("input[name='gender']:checked").val() != "W") {
				alert(`남성 / 여성 중에서 성별을 선택하세요.`);
				$("input[name='gender']").focus();
				return false;
			}
		}
		if(!noCheck.includes("cls")) {
			if ($("#cls").val() != "W" && $("#cls").val() != "M" && $("#cls").val() != "A" && $("#cls").val() != "B") {
				alert(`전사 / 마법사 / 궁수 / 도적 중에서 직업을 선택하세요.`);
				$("#cls").focus();
				return false;
			}
		}
		if(!noCheck.includes("hp")) {
			if (Number.parseInt($("#hp").val()) < 1 || Number.parseInt($("#hp").val()) > 100 || $("#hp").val() == '') {
				alert(`HP에는 1 ~ 100 중에서 입력해주세요.`);
				$("#hp").focus();
				return false;
			}
		}
		if(!noCheck.includes("mp")) {
			if (Number.parseInt($("#mp").val()) < 1 || Number.parseInt($("#mp").val()) > 100 || $("#mp").val() == '') {
				alert(`MP에는 1 ~ 100 중에서 입력해주세요.`);
				$("#mp").focus();
				return false;
			}
		}
		if(!noCheck.includes("str")) {
			if (Number.parseInt($("#str").val()) < 1 || Number.parseInt($("#str").val()) > 100 || $("#str").val() == '') {
				alert(`STR에는 1 ~ 100 중에서 입력해주세요.`);
				$("#str").focus();
				return false;
			}
		}
		if(!noCheck.includes("int")) {
			if (Number.parseInt($("#int").val()) < 1 || Number.parseInt($("#int").val()) > 100 || $("#int").val() == '') {
				alert(`INT에는 1 ~ 100 중에서 입력해주세요.`);
				$("#int").focus();
				return false;
			}
		}
		if(!noCheck.includes("dex")) {
			if (Number.parseInt($("#dex").val()) < 1 || Number.parseInt($("#dex").val()) > 100 || $("#dex").val() == '') {
				alert(`DEX에는 1 ~ 100 중에서 입력해주세요.`);
				$("#dex").focus();
				return false;
			}
		}
		if(!noCheck.includes("lux")) {
			if (Number.parseInt($("#lux").val()) < 1 || Number.parseInt($("#lux").val()) > 100 || $("#lux").val() == '') {
				alert(`LUX에는 1 ~ 100 중에서 입력해주세요.`);
				$("#lux").focus();
				return false;
			}
		}
		if(!noCheck.includes("birthDate")) {
			if($("#birthDate").val() < "1900-01-01" || $("#birthDate").val() > "2100-01-01") {
				alert(`날짜는 1900-01-01 ~ 2100-01-01 중에서 입력해주세요.`);
				$("#birthDate").focus();
				return false;
			}
		}
		if(!noCheck.includes("imgUrl")) {
			if ($("#imgUrl").val().indexOf("http") !== 0) {
				alert("이미지 주소는 http 로 시작해야 합니다.");
				$("#imgUrl").focus();
				return false;
			}
		}
		return true;
	}

	clearInput() {
		$("#id").val(-1);
		$("#name").val("");
		$("input[name='gender']").prop("checked", false);
		$("#cls").val("W");
		$("#hp").val(1);
		$("#mp").val(1);
		$("#str").val(1);
		$("#int").val(1);
		$("#dex").val(1);
		$("#lux").val(1);
		$("#birthDate").val("2026-01-12");
		$("#imgUrl").val("");
		$(".showImage").attr("src", "");
	}

	printImg() {
		$(".showImage").one("error", (e) => {
			e.preventDefault();
			$(".showImage").css("display", "none");
			$(".showImage").attr("src", "");
			return;
		});
		$(".showImage").css("display", "block");
		$(".showImage").attr("src", $("#imgUrl").val());
	}

	addCharacter() {
		if (this.checkInputData("id") === false) {
			return;
		}
		let newId = this.#characters.reduce((max, character) => (max < character.id) ? character.id : max, 0) + 1;
		let newCharacter = {
			id: newId,
			name: $("#name").val(),
			sx: $("input[name='gender']:checked").val(),
			cls: $("#cls").val(),
			hp: Number.parseInt($("#hp").val()),
			mp: Number.parseInt($("#mp").val()),
			str: Number.parseInt($("#str").val()),
			int: Number.parseInt($("#int").val()),
			dex: Number.parseInt($("#dex").val()),
			lux: Number.parseInt($("#lux").val()),
			birthDate: $("#birthDate").val(),
			imgUrl: $("#imgUrl").val()
		};
		this.#characters.push(newCharacter);
		this.printList();
		this.clearInput();
		this.printImg();
		this.printAttackList();
	}

	uptCharacter() {
		if (this.checkInputData() === false) {
			return;
		}
		let uptCharacter = {
			id: Number.parseInt($("#id").val()),
			name: $("#name").val(),
			sx: $("input[name='gender']:checked").val(),
			cls: $("#cls").val(),
			hp: Number.parseInt($("#hp").val()),
			mp: Number.parseInt($("#mp").val()),
			str: Number.parseInt($("#str").val()),
			int: Number.parseInt($("#int").val()),
			dex: Number.parseInt($("#dex").val()),
			lux: Number.parseInt($("#lux").val()),
			birthDate: $("#birthDate").val(),
			imgUrl: $("#imgUrl").val()
		};
		this.#characters[Number.parseInt($("#id").val())] = uptCharacter;
		this.printList();
		this.clearInput();
		this.printImg();
		this.printAttackList();
	}

	delCharacter() {
		if (this.checkInputData() === false) {
			return;
		}
		this.#characters = this.#characters.filter(character => character.id != Number.parseInt($("#id").val()));
		this.printList();
		this.clearInput();
		this.printImg();
		this.printAttackList();
	}

	setData2InputBox(getId) {
		let findCharacter = this.#characters.find(character => character.id == getId);
		$("#id").val(findCharacter.id);
		$("#name").val(findCharacter.name);
		$("input[name='gender'][value='" + findCharacter.sx + "']").prop("checked", true);
		$("#cls").val(findCharacter.cls);
		$("#hp").val(findCharacter.hp);
		$("#mp").val(findCharacter.mp);
		$("#str").val(findCharacter.str);
		$("#int").val(findCharacter.int);
		$("#dex").val(findCharacter.dex);
		$("#lux").val(findCharacter.lux);
		$("#birthDate").val(findCharacter.birthDate);
		$("#imgUrl").val(findCharacter.imgUrl);
		$(".showImage").attr("src", findCharacter.imgUrl);
		this.printImg();
	}

	printAttackList() {
		$("#attackStr").empty();
		this.#characters.forEach(character => $("#attackStr").append(this.printOption(character)));
		$("#attackInt").empty();
		this.#characters.forEach(character => $("#attackInt").append(this.printOption(character)));
		$("#attackItem").empty();
		this.#characters.forEach(character => $("#attackItem").append(this.printOption(character)));
	}

	printOption(character) {
		let html = `<option value="${character.id}">${character.name}</option>`;
		return html;
	}

	attackSTR() {
		if(this.checkInputData() == false) {
			return;
		}
		let attacker = this.#characters.findIndex(character => character.id == Number.parseInt($("#id").val()));
		let targetId = $("#attackStr").val();
		let targetCharacter = this.#characters.findIndex(character => character.id == targetId);
		if (this.#characters[targetCharacter].hp - this.#characters[attacker].str < 0) {
			this.#characters[targetCharacter].hp = 0;
		} else {
			this.#characters[targetCharacter].hp -= this.#characters[attacker].str;
		}
		this.printList();
	}
	
	attackINT() {
		if(this.checkInputData() == false) {
			return;
		}
		let attacker = this.#characters.findIndex(character => character.id == Number.parseInt($("#id").val()));
		let targetId = $("#attackInt").val();
		let targetCharacter = this.#characters.findIndex(character => character.id == targetId);
		if(this.#characters[attacker].mp - 5 >= 0) {
			if (this.#characters[targetCharacter].hp - this.#characters[attacker].int < 0) {
				this.#characters[targetCharacter].hp = 0;
			} else {
				this.#characters[targetCharacter].hp -= this.#characters[attacker].int;
			}
			this.#characters[attacker].mp -= 5;
		}
		this.printList();
	}
}

$(() => {
	let rpg = new Character();
	rpg.printList();
	rpg.printAttackList();
	rpg.clearInput();

	$(".btnAdd").click((e) => {
		e.preventDefault();
		rpg.addCharacter();
	});
	$(".btnUpt").click((e) => {
		e.preventDefault();
		rpg.uptCharacter();
	});
	$(".btnDel").click((e) => {
		e.preventDefault();
		rpg.delCharacter();
	});

	$("#imgUrl").blur((e) => {
		e.preventDefault();
		rpg.printImg();
	});

	$(document).on("click", ".listDataRow", function (e) {
		e.preventDefault();
		let getId = $(e.currentTarget).children().first().text() * 1;
		rpg.setData2InputBox(getId);
	});

	$(".atkbtn1").click((e) => {
		e.preventDefault();
		rpg.attackSTR();
	});
	$(".atkbtn2").click((e) => {
		e.preventDefault();
		rpg.attackINT();
	});
	$(".atkbtn3").click((e) => {
		e.preventDefault();
	});
});

//if((new Date("2026-01-12")).getTime() == (new Date("2026-01-12")).getTime()) { console.log("yes"); } else { console.log("no"); }