const users = [
    {
        id: "001",
        role: "Java Developer",
        company: "Infosys",
        location: "Hyderabad, Telangana, India",
        date: "Dec 10, 2025",
        imgSrc: './images/Infosys.jpg'
        },
        {
        id: "002",
        role: "Software Developer",
        company: "Microsoft",
        location: "Hyderabad, Telangana, India",
        date: "Jan 10, 2025",
        imgSrc: './images/Microsoft.jpg'
    },
    {
        id: "003",
        role: "Data Analyst",
        company: "Google",
        location: "Hyderabad",
        date: "Jan 10, 2025",
        imgSrc: './images/Google.jpg'
    },
    {
        id: "004",
        role: "Software Developer",
        company: "Microsoft",
        location: "Hyderabad, Telangana, India",
        date: "Jan 10, 2025",
        imgSrc: './images/Microsoft.jpg'
    },
    {
        id: "005",
        role: "Data Analyst",
        company: "Google",
        location: "Hyderabad",
        date: "Jan 10, 2025",
        imgSrc: './images/Google.jpg'
    },
    {
    id: "006",
    role: "Java Developer",
    company: "Infosys",
    location: "Hyderabad, Telangana, India",
    date: "Dec 10, 2025",
    imgSrc: ''
    }
];
var userCards = '';

for (var i = 0; i < users.length; i++) {
    userCards += `
       
        <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card " >
               <a href="#" class="d-flex justify-content-center"><img src="${users[i].imgSrc}"  class="card-img-top" alt=""></a>
               <div class="card-body">
                  <h5><a class="  job-role justify-content-center d-flex fw-bold ">${users[i].role}</a></h5>
                  <p class="card-text fw-medium  my-3"><i class="fa-regular fa-handshake "></i>${users[i].company}</p>
                  <p class="card-text fw-medium"><i class="fa-solid fa-location-dot"></i> ${users[i].location}</p>
                  <p class="card-text fw-medium "><i class="fa-regular fa-clock"></i>${users[i].date}</p>
                  <a href="applynow.html" class="  fst-italic fw-medium apply-now ">Apply Now >></a>
                </div>
            </div>
        </div>
           `;
}

document.getElementById('user-cards').innerHTML = userCards;

