document.addEventListener("DOMContentLoaded", () => {
    const styleButton: HTMLButtonElement = document.getElementById("styleButton") as HTMLButtonElement;

    styleButton.addEventListener("click", () => {
        const body: HTMLElement = document.querySelector("body") as HTMLElement;
        body.classList.toggle("bg-dark");
        body.classList.toggle("text-light");
    });
});