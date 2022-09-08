let mobile = [{

       Company: "Iphone",
       ModelNo:"Iphone12",
      RAM: "8 GB",
      Storage: "1 TB",
      Camera: "64 MP",
      Price: " Rs-302345",
    },
     {
      Company: "Iphone",
      ModelNo:"Iphone13",
      RAM: "16 GB",
      Storage: "1 B",
      Camera: "64 MP",
      Price: "Rs-300000",
    },
{
      Company: "Iphone",
      ModelNo: "Iphone14",
      RAM: "32 GB",
      Storage: "1 TB",
      Camera: "64 GB",
      Price: "Rs-441234",
    },
 {
      Company: "Samsung",
      ModelNo: "SamsungA30",
      RAM: "4 GB",
      Storage: "64 GB",
      Camera: "8 GB",
      Price: "Rs-22234",
    },
 {
      Company: "Samsung",
      ModelNo: "SamsungNote5",
      RAM: "2 GB",
      Storage: "32 GB",
      Camera: "8 GB",
      Price: "Rs-30234",
    },

     {
      Company: "Samsung",
      ModelNo:"SamsungS10",
      RAM: "7 GB",
      Storage: "128 GB",
      Camera: "48 MP",
      Price: "Rs-102498",
    },

   {
      Company: "Techno",
      ModelNo: "TechnoCamon18T",
      RAM: "8 GB",
      Storage:"128 GB",
      Camera: "48 MP",
      Price: "Rs-32000",
    },
  {
      Company: "Techno",
      ModelNo: "TechnoCamon17",
      RAM: "6 GB",
      Storage: "64 GB",
      Camera: "48 MP",
      Price:"Rs-30000",
    },
     {
      Company: "Techno",
      ModelNo: "TechnoCamon15",
      RAM: "4 GB",
      Storage: "64 GB",
      Camera: "48 MP",
      Price: "Rs-28000",
    },
    {
      Company: "Infinix",
      ModelNo: "Infix Note10",
      RAM: "8 GB",
      Storage:"128 GB",
      Camera: "32 MP",
      Price: "Rs-42000",
    },
    {
      Company: "Infinix",
      ModelNo: "Infinix Note11",
      RAM: "8 GB",
      Storage:"256 GB",
      Camera: "48 MP",
      Price: "Rs-45000",
    },
    {
      Company: "Infinix",
      ModelNo: "Infinix Note 12",
      RAM: "8 GB",
      Storage:"256 GB",
      Camera: "64 MP",
      Price: "Rs-52000",
    },
    {
      Company: "Redmi",
      ModelNo: "Note 12",
      RAM: "8 GB",
      Storage:"256 GB",
      Camera: "128 MP",
      Price: "Rs-64000",
    },
    {
      Company: "Redmi",
      ModelNo: "Note 10",
      RAM: "12 GB",
      Storage:"256 GB",
      Camera: "128 MP",
      Price: "Rs-65000",
    },
    {
      Company: "Redmi",
      ModelNo: "Redmi 10",
      RAM: "8 GB",
      Storage:"256 GB",
      Camera: "128 MP",
      Price: "Rs-34000",
    },
    {
      Company: "Itel",
      ModelNo: "s15 Pro",
      RAM: "2 GB",
      Storage:"32 GB",
      Camera: "16 MP",
      Price: "Rs-12000",
    },
    {
      Company: "Itel",
      ModelNo: "Vision 12",
      RAM: "3 GB",
      Storage:"32 GB",
      Camera: "8 MP",
      Price: "Rs-16000",
    },
    {
      Company: "Itel",
      ModelNo: "s16",
      RAM: "4 GB",
      Storage:" 64 GB",
      Camera: "16 MP",
      Price: "Rs-22000",
    },
]

let Company=mobile.map((val)=>{
  return val.Company
  
})
// console.log(Company)
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let phones=Company.filter(onlyUnique)
// console.log(phones)

let companies = phones.filter(
  onlyUnique
)

let mobileName = document.getElementById("mobileName");
let modelName = document.getElementById("modelName");

function fillPhones() {
  mobileName.innerHTML = "";
  for (var i = 0; i < companies.length; i++) {
    mobileName.innerHTML += `
    <option value='${companies[i]}'>${companies[i]}</option>
    `;
  }
}

fillPhones();

function fillNested() {
  modelName.disabled = false;
  let models = mobile.filter((values)=>{
    if(values.Company == mobileName.value){
      return values.ModelNo
    }
  });
  // console.log(models);
  modelName.innerHTML = "";
  for (var i = 0; i < models.length; i++) {
    modelName.innerHTML += `
    <option value = '${models[i].ModelNo}'>${models[i].ModelNo}</option>
    `;
  }
}
//   let nestKeys = Object.keys(mobile[mobileName.value]);
//   modelName.innerHTML = "";
//   for (var i = 0; i < nestKeys.length; i++) {
//     modelName.innerHTML += `<option value="${nestKeys[i]}">${nestKeys[i]}</option>`;
//   }
//   console.log(nestKeys);
// }

function searchFn() {
  let dataNew = document.getElementById("dataNew");

  let headings = mobile.filter((headings)=>{
    if(headings.ModelNo == modelName.value){
      return(headings)
    }
  })

  let headingValues = Object.keys(headings[0]);
  headingValues.shift();
  let data = Object.values(headings[0]);
  data.shift();
  dataNew.innerHTML = "";
  for (var i = 0; i < headingValues.length; i++) {
    dataNew.innerHTML += `
      <h5><span>${headingValues[i]} </span> : ${data[i]}</h5>
      `;
  }
}



// function searchFn() {
//   let data=document.getElementById('data')
//   let showResult = mobile[mobileName.value][modelName.value];
//   // let data=document.getElementById('data')
//   // let myData = JSON.stringify(showResult);
//   let keySpecs= Object.keys(showResult)
//   let ValSpecs= Object.values(showResult)
//   console.log(showResult)
//   data.innerHTML="";
//   for(var i=0; i<keySpecs.length;i++){
//     data.innerHTML+=`<h5><span>${keySpecs[i]}</span>:${ValSpecs[i]}</h5>`

//   }

// }

//  let mobileName=document.getElementById('mobileName').value
//  let modelName=document.getElementById('ModelNo').value
//  let valueModel=document.getElementById('valueModel').value

// console.log(keys)
// console.log(values)
