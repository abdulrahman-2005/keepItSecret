const contentMainElement = document.getElementById("content");

const secretTemplate = {
	id: "",
	title: "",
	author: "",
    content: "",
	password: "",
    locked: ""
};

function viewSecret(secId) {
    for (secret of secretsData.secrets) {
        if (secId === secret.id) {
            setTempLSData(secId)
        }
        window.location.href = "./secret/view"
    }
}
function crackSecret(secId) {
    for (secret of secretsData.secrets) {
        if (secId === secret.id) {
            setTempLSData(secId)
        }
        window.location.href = "./secret/crack"
    }

}

function SecretHTML(secretObject) {
	if (secretObject.locked) {
		return `
<article class="secret" id="${secretObject.id}">
    <div class="left">
        <h4 class="secret-title">${secretObject.title}</h3>
        <h5 class="secret-author">By: <span class="secret-author-span">${secretObject.author}</span></h5>
        <a  onclick="crackSecret('${secretObject.id}')" class="secret-button">crack</a>
    </div>
    <div class="right">
        <!-- <img class="secret-state-image" src="./assets/images/locked.png" alt=""> -->
        <p class="icon">🔒</p>
        <p>locked</p>
    </div>
</article>`;
	} else {
		return `
<article class="secret cracked" id="${secretObject.id}">
    <div class="left">
        <h4 class="secret-title">${secretObject.title}</h3>
        <h5 class="secret-author">By: <span class="secret-author-span">${secretObject.author}</span></h5>
        <a  onclick="viewSecret('${secretObject.id}')" class="secret-button">view</a>
    </div>
    <div class="right">
        <p class="icon">🔓</p>
        <p>unlocked</p>
    </div>
</article>`;
	}
}

function loadSecrets(secretsToLoad) {
	contentMainElement.innerHTML = "";
	for (secret of secretsToLoad) {
		contentMainElement.innerHTML += SecretHTML(secret);
	}
}

loadSecrets(secretsData.secrets);


function search(element) {
    let output = []
    let value = element.value.toLowerCase()
    for (secret of secretsData.secrets) {
        if (secret.title.toLowerCase().includes(value) || secret.author.includes(value)) {
            output.push(secret)
        }
    }
    if (output.length === 0) {
        loadSecrets(secretsData.secrets)
        element.style.borderColor = "red"
        return
    }
    element.style.borderColor = "lightgreen"
    loadSecrets(output)
}