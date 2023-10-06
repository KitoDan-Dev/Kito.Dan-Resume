const form = document.getElementById("myForm");
const form2 = document.getElementById("myForm2");




form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameobj = document.getElementById("name").value;
  const company = document.getElementById("company").value;

  const messageCompanyMotion = `Hi Kito, i'm ${nameobj} from ${company} and i like to talk about Motion Design.`;
  const messageNoCompanyMotion = `Hi Kito, i'm ${nameobj} and i like to talk about Motion Design.`;
  const messageNoNameMotion = `Hi Kito, i'm from ${company} and i like to talk about Motion Design.`;
  
  if (nameobj === "" && company === "") {
    window.open('https://api.whatsapp.com/send?phone=5562982032552');
  }
  else if (nameobj !== "" && company === "") {
    window.open("https://api.whatsapp.com/send?phone=5562982032552R&text=" + encodeURIComponent(messageNoCompanyMotion), "_blank");
  }
  else if (nameobj === "" && company !== "") {
    window.open("https://api.whatsapp.com/send?phone=5562982032552R&text=" + encodeURIComponent(messageNoNameMotion), "_blank");
  }
  else {
    window.open("https://api.whatsapp.com/send?phone=62982032552&text=" + encodeURIComponent(messageCompanyMotion), "_blank");
  }
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameobj2 = document.getElementById("name2").value;
  const company = document.getElementById("company2").value;

  const messageCompanyDev = `Hi Kito, i'm ${nameobj2} from ${company} and i like to talk about Front-End Development.`;
  const messageNoCompanyDev = `Hi Kito, i'm ${nameobj2} and i like to talk about Front-End Development.`
  const messageNoNameDev = `Hi Kito, i'm from ${company} and i like to talk about Front-End Development.`

  if (nameobj2 === "" && company === "") {
    window.open('https://api.whatsapp.com/send?phone=5562982032552');
  }
  else if (nameobj2 !== "" && company === "") {
    window.open("https://api.whatsapp.com/send?phone=5562982032552R&text=" + encodeURIComponent(messageNoCompanyDev), "_blank");
  }
  else if (nameobj2 === "" && company !== "") {
    window.open("https://api.whatsapp.com/send?phone=5562982032552R&text=" + encodeURIComponent(messageNoNameDev), "_blank");
  }
  else {
    window.open("https://api.whatsapp.com/send?phone=62982032552&text=" + encodeURIComponent(messageCompanyDev), "_blank");
  }
});