console.log("Скрипт подключён");

const portionPrice = 500;
let demoCount = 2;
console.log(portionPrice * demoCount);

function calculateTotal(price, count) {
  let total = price * count;
  if (count >= 3) {
    total = total * 0.9;
  }
  return total;
}

console.log(calculateTotal(500, 1));
console.log(calculateTotal(500, 2));
console.log(calculateTotal(500, 3));
console.log(calculateTotal(500, 4));

const toggleButton = document.querySelector("#toggle-description");
const description = document.querySelector("#restaurant-description");

toggleButton.addEventListener("click", function () {
  description.classList.toggle("hidden");
  const isHidden = description.classList.contains("hidden");
  if (isHidden) {
    toggleButton.textContent = "Показать описание";
  } else {
    toggleButton.textContent = "Скрыть описание";
  }
  toggleButton.setAttribute("aria-expanded", String(!isHidden));
});

const countInput = document.querySelector("#portion-count");
const totalOutput = document.querySelector("#order-total");

function isCountValid(count) {
  return Number.isInteger(count) && count >= 1 && count <= 10;
}

function updateTotal() {
  const count = Number(countInput.value);
  if (!isCountValid(count)) {
    totalOutput.textContent = "Укажите целое количество от 1 до 10.";
    return;
  }
  const total = calculateTotal(portionPrice, count);
  totalOutput.textContent = `Итого: ${total} руб.`;
}

countInput.addEventListener("input", updateTotal);
updateTotal();

const form = document.querySelector("#order-form");
const nameInput = document.querySelector("#guest-name");
const statusOutput = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const guestName = nameInput.value.trim();
  const count = Number(countInput.value);
  statusOutput.textContent = "";

  if (guestName === "") {
    statusOutput.textContent = "Введите имя, а не только пробелы.";
    nameInput.focus();
    return;
  }

  if (!isCountValid(count)) {
    statusOutput.textContent = "Нужно целое количество от 1 до 10.";
    countInput.focus();
    return;
  }

  const total = calculateTotal(portionPrice, count);
  statusOutput.textContent =
    `${guestName}, учебный заказ проверен. Итого: ${total} руб. ` +
    "Данные никуда не отправлены.";
});

function clearStatus() {
  statusOutput.textContent = "";
}

nameInput.addEventListener("input", clearStatus);
countInput.addEventListener("input", clearStatus);
