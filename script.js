const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let sum =0;
	for(let x of prices)sum+=parseInt(x.textContent);
	const element = document.createElement("tr");
	element.innerHTML = `<td id="ans">${sum}</td>`;
	const table = document.querySelector("table");
	table.appendChild(element);
  
};

getSumBtn.addEventListener("click", getSum);

