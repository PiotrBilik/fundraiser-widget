// Edytuj tylko tę listę, jeśli chcesz dodać/zmienić kody.
const FUNDRAISERS = {
  k178: "Beata Wawrzyniak",
  k899: "Klaudia Żulczyk",
  k879: "Natalia Detmerowska",
  k460: "Kamil Warzocha",
  k446: "Kamila Mazurek",
  k888: "Iwona Konieczna",
  k555: "Nina Gębczyńska",
  k689: "Natalia Cieciuch",
  k1268: "Maja Bilińska",
  k1269: "Wiktoria Wilkowska",
  k0641: "test",
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
