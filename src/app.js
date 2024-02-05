import User from "./User.js";

const getUsers = async () => {
    const apiUrl = "https://randomuser.me/api/?results=20";
    const res = await fetch(apiUrl);

    if(!res.ok) {
        throw new Error("Cannot reach API");
    }

    const resData = await res.json();
    const users = resData.results;
    const userTable = [];

    users.forEach(user => {
        const cleanedUser = [user.name.title, user.name.first, user.name.last, user.location.city, user.location.country, user.dob.age, user.email, user.picture.large];
        userTable.push(cleanedUser);
    });

    userTable.sort(function(a, b) { 
        return a[2] > b[2] ? 1 : -1});

    userTable.forEach(user => {
        const userEl = new User(user);
        userEl.render();
    });


}

const usersFetch = getUsers();
