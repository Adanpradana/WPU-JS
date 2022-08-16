const getApi = () => {
  const request = new Request("api/2022.json");
  return fetch(request).then((response) => response.json());
};

getApi().then((response) => console.log(response));

async function responseData() {
  const getData = await getApi();
  return getData;
}

responseData().then((params) => {
  return (document.body.innerHTML = `
  
  <div>
  <h1>National Holiday</h1>
  ${params
    .map(
      (data) => `

  <ul>
    <li>${data.holiday_name}</li>
    <li>${data.holiday_date}</li>
    <li>${data.is_national_holiday === true ? "HOLIYAY" : "NOT HOLIYAY"}</li>
  </ul>  
  
  `
    )
    .join("")}
  
  </div>
  
  `);
});
