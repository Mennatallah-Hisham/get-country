
const btnSearch=document.querySelector(".search");
const container =document.querySelector(".container");
const inputCountry =document.querySelector(".inputCountry");

const renderCountry= function(country){

    container.innerHTML="";

    const countryCard=`

    <article class="card">
    <img class="flag" src=${country.flag} alt="flag"/>
    <div class="country-data">
    <h1 class="name" >${country.name}</h1>
    <p><span class="sub-title">capital:</span>${country.capital}</p>
    <p><span class="sub-title">region:</span>${country.region}</p>
    <p><span class="sub-title">subregion:</span>${country.subregion}</p>
    <p><span class="sub-title">population:</span>${country.population}</p>
    <p><span class="sub-title">currency:</span>${country.currencies[0].name}</p>
    <p><span class="sub-title">languages:</span>${country.languages[0].name}</p>
    <p><span class="sub-title">population:</span>${country.population}</p>


    </div>
    </article>
    `
    container.insertAdjacentHTML("afterbegin",countryCard)

    console.log(country);

}

const renderError= function (error){
    container.innerHTML="";

    const errorDiv= `
    <div class="error">
    ${error}
    </div>
    `

    container.insertAdjacentHTML("afterbegin",errorDiv);

}

const getCountry= function(country){

    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res=>{
        if(!res.ok){
            throw new Error("country not found");
        }
       return res.json()})
    .then(data=>renderCountry(data[0]))
    .catch(error=>renderError(error));
}



 btnSearch.addEventListener("click",(e)=>{
e.preventDefault();

getCountry(inputCountry.value);
 });


