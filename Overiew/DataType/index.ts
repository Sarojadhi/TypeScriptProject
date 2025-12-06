export const call = () => {
  const firstInput = document.getElementById("first") as HTMLInputElement;
  const lastInput = document.getElementById("last") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;

  console.log("First Name:", firstInput?.value);
  console.log("Last Name:", lastInput?.value);
  console.log("Age:", ageInput?.value);

   
};
