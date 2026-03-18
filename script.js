// Edytuj tylko tę listę, jeśli chcesz dodać/zmienić kody.
const FUNDRAISERS = {
  k178: "Beata Wawrzyniak",
  k899: "Klaudia Żulczyk",
  k879: "Natalia Detmerowska",
  k460: "Kamil Warzocha",
  k446: "Kamila Mazurek",
  k900: "Agata Reguła",
  k1041: "Małgorzata Gawrońska",
  k888: "Magdalena Bendec",
  k777: "Karolina Prusińska",
  k999: "Piotr Bilik",
  k689: "Natalia Cieciuch",
  k1184: "Roksana Żak",
  k1183: "Natalia Kurys",
  k1216: "Kacper Bułak",
  k1170: "Alicja Ziółek",
};

const input = document.getElementById("consultantCode");
const button = document.getElementById("verifyBtn");
const result = document.getElementById("consultantInfo");

function verifyCode() {
  const code = input.value.trim().toLowerCase();
  const fundraiser = FUNDRAISERS[code];

  if (fundraiser) {
    result.classList.remove("error");
    result.classList.add("success");
    result.textContent = `Kod potwierdzony. Osoba prowadząca: ${fundraiser}.`;
    return;
  }

  if (!code) {
    result.classList.remove("success");
    result.classList.remove("error");
    result.textContent = "Wpisz kod, aby rozpocząć weryfikację.";
    return;
  }

  result.classList.remove("success");
  result.classList.add("error");
  result.textContent = "Nie znaleziono takiego kodu. Sprawdź i spróbuj ponownie.";
}

button.addEventListener("click", verifyCode);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    verifyCode();
  }
});
