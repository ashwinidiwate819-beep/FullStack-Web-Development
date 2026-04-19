let transactions = JSON.parse(localStorage.getItem("finance")) || [];

function addTransaction() {
  const text = document.getElementById("text").value;
  const amount = +document.getElementById("amount").value;
  const type = document.getElementById("type").value;

  if (!text || !amount) return;

  transactions.push({ id: Date.now(), text, amount, type });
  save();

  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  save();
}

function save() {
  localStorage.setItem("finance", JSON.stringify(transactions));
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  let income = 0, expense = 0;

  transactions.forEach(t => {
    const li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      ${t.text} - ₹${t.amount}
      <span onclick="removeTransaction(${t.id})">❌</span>
    `;
    list.appendChild(li);

    t.type === "income" ? income += t.amount : expense += t.amount;
  });

  document.getElementById("income").innerText = "₹" + income;
  document.getElementById("expense").innerText = "₹" + expense;
  document.getElementById("balance").innerText = "₹" + (income - expense);
}

render();
