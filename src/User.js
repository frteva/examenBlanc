class User {
    #infos; #availability; #element;
    constructor(infos) {
        this.#infos = infos;
        this.#availability = false;
        this.#element = this.generateElement();
        this.#element.addEventListener("click", (e) => {
            this.#availability = !this.#availability;
            e.currentTarget.dataset.present = this.#availability;
        }) 
    }

    generateElement() {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = "false";

        const child =  
            `<img src="${this.#infos[7]}">
            <div class="user--info">
                    <h1>${this.#infos[0]} ${this.#infos[1]} ${this.#infos[2]}</h1>
                    <p>${this.#infos[5]} years old</p>
                    <p>${this.#infos[3]}, ${this.#infos[4]}</p>
            </div>
            <a href="${this.#infos[6]}">
                    <span class="mail">✉️</span>
            </a>`

        containerElement.insertAdjacentHTML("afterbegin", child);

        return containerElement;
    }

    render() {
        document.querySelector("main").appendChild(this.#element);
    }

    getInfos() {
        return this.#infos;
    }

    getAvailability() {
        return this.#availability;
    }

}

export default User;