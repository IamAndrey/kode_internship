export const lookPass = (event) => {
    const buttonElement = event.currentTarget;
    const divElement = buttonElement.parentElement;
    const inputElement = divElement.querySelector("input");

    if(inputElement.type === "password") {
        inputElement.type = "text";

        buttonElement.classList.add('is-active');
        buttonElement.setAttribute("data-tip", "Скрыть пароль");
    } else {
        inputElement.type = "password";

        buttonElement.classList.remove('is-active');
        buttonElement.setAttribute("data-tip", "Показать пароль");
    }
};

export const generateCode = () => {
    let code = '';
    for (let i = 0; i <= 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code
}