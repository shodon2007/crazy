const users = [
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
    {
        fullName: "Андреев Андрей Андреевич",
        number: "+7 (999) 199-54-23",
        email: "about@shodon.ru",
        role: "user",
    },
];

function renderUsers(users) {
    const htmlList = document.querySelector(".main__list");
    users.forEach((item) => {
        htmlList.innerHTML += `
        <div class="user">
            <div class="user__top">
                <img src="./static/user.svg" />
                <div class="user__name">${item.fullName}</div>
            </div>
            <table>
                <tr>
                    <td>Почта</td>
                    <td>${item.email}</td>
                </tr>
                <tr>
                    <td>Номер</td>
                    <td>${item.number}</td>
                </tr>
                <tr>
                    <td>Роль</td>
                    <td>${item.role}</td>
                </tr>
            </table>
            <div class="user__bottom">
                <a href="#">Удалить</a>
                <a href="#">Редактировать</a>
                <a href="#">Подробнее</a>
            </div>
        </div>
        `;
    });
}

renderUsers(users);
