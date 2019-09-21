// DOM ELEMENTS
const fact = document.querySelector("#fact");
const factText = document.querySelector("#factText");
const numberInput = document.querySelector("#numberInput");

// Functions
const getFactFetch = async () => {
	const number = numberInput.value;

	const res = await fetch(`http://numbersapi.com/${number}`);
	const data = await res.text();

	if (number !== "") {
		fact.style.display = "block";
		factText.textContent = data;
	}

	// Set time out
	async function waitFor() {
		await setTimeout(() => {
			fact.style.display = "none";
		}, 10000);
	}

	// Call the wait for function to get the execution of it within the main function
	waitFor();
};

// Event listeners
numberInput.addEventListener("input", getFactFetch);
