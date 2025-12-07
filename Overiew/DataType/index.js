const btn = () => {
    const fname = document.getElementById("first");
    console.log(fname.value);
    const lname = document.getElementById("last");
    console.log(lname.value);
    const age = document.getElementById("age");
    console.log(fname.value, lname.value, "is", age.value, "years old ");
};
document.getElementById("btn")?.addEventListener("click", btn);
export {};
//# sourceMappingURL=index.js.map