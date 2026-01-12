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
			imgUrl: "https://i.namu.wiki/i/varbt_DtFC_nSI_-5oPXGVsylpmQr-My7b_pFnO36qOEbIjhcQT3uUrTEQGIaAKlrHKlZc_MW6aEgyyT_mLhMg.webp"
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
				alert(`게임 목록에서 선택한 후 수정/삭제하세요.`);
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
			if ($("#sx").val() != "M" && $("#sx").val() != "W") {
				alert(`남성 / 여성 중에서 성별을 선택하세요.`);
				$("#sx").focus();
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
			if($("#date").val() < "1900-01-01" || $("#date").val() > "2100-01-01") {
				alert(`날짜는 1900-01-01 ~ 2100-01-01 중에서 입력해주세요.`);
				$("#date").focus();
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
		$("#name").val("");
		$("#sx").val("M");
		$("#cls").val("W");
		$("#hp").val(1);
		$("#mp").val(1);
		$("#str").val(1);
		$("#int").val(1);
		$("#dex").val(1);
		$("#lux").val(1);
		$("#date").val("2026-01-12");
		$("#imgUrl").val("");

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
			sx: $("#sx").val(),
			cls: $("#cls").val(),
			hp: Number.parseInt($("#hp").val()),
			mp: Number.parseInt($("#mp").val()),
			str: Number.parseInt($("#str").val()),
			int: Number.parseInt($("#int").val()),
			dex: Number.parseInt($("#dex").val()),
			lux: Number.parseInt($("#lux").val()),
			birthDate: $("#date").val(),
			imgUrl: $("#imgUrl").val()
		};
		this.#characters.push(newCharacter);
		this.printList();
		this.clearInput();
	}
}

$(() => {
	let rpg = new Character();
	rpg.printList();

	$(".btnAdd").click((e) => {
		e.preventDefault();
		rpg.addCharacter();
	});
	$(".btnUpt").click((e) => {
		e.preventDefault();
	});
	$(".btnDel").click((e) => {
		e.preventDefault();
	});
});

//if((new Date("2026-01-12")).getTime() == (new Date("2026-01-12")).getTime()) { console.log("yes"); } else { console.log("no"); }