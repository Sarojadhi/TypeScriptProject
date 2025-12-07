const btn = () => {
  const fname = document.getElementById("first") as HTMLInputElement;
  console.log(fname.value);

  const lname = document.getElementById("last") as HTMLInputElement
  console.log(lname.value)

  const age = document.getElementById("age") as HTMLInputElement
  console.log( fname.value, lname.value, "is",age.value ,"years old ");
};
document.getElementById("btn")?.addEventListener("click", btn);

