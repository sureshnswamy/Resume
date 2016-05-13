var name= "Suresh Swamy";
var role = "Web Developer";
var bio = {
  "name": "Suresh Swamy",
  "role": "Web Developer",
  "contacts": {"email":"sureshnswamy@gmail.com",
              "mobile": "0226285763",
              "location": "Lower Hutt",
              "twitter":"@kiwiyan",
              "github": "sureshnswamy"
            },
  "pic": "images/Suresh09.png",
  "skills" : ["Node.js", "Javascript", "CSS", "HTML", "Git",  "Project Management"],
  "message": "Welcome to the awesome resume you have been looking for"
};

var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%", role);
var formattedPic= HTMLbioPic.replace('%data%',bio.pic)
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

var formattedPic = HTMLbioPic.replace('%data%', bio.pic);
var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.message);


$("#header").prepend(formattedName, formattedRole);
$('#header').append(formattedPic, formattedMessage);
$("#topContacts").append(formattedMobile, formattedEmail, formattedgithub, formattedTwitter, formattedLocation);
$("#header").append(HTMLskillsStart);

for (skill in bio.skills) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkills);
}

var work = {
  'jobs': [
    {
      'employer': 'Yali Ltd',
      "title":  "Co-founder",
      "location": "Wellington, New Zealand", 
    "years": "March 2015 - Present",
    "description":"Founded a business incubator for SaaS and\
    related application development for the\
    Internet service providers.\
    Developed the business plan and operational model, \
    conducted market analyses.\
    Identified potential customers and customer engagement pathways\
    Created social media channel for customer outreach"

  },
  {
  "employer": "Robinson Research Institute, Victoria University of Wellington",
  "title":  "Research Fellow",
  "location": "Wellington, New Zealand", 
  "years": "Aug 2010 - Jan 2015",
  "description":"High-pressure science and technology research leader. Setup experimental \
  facility for high pressure measurements in materials at \
  low-temperature, high-magnetic field."
  },

 { "employer": "CSEC University of Edinburgh, UK",
  "title":  "Research Associate",
  "location": "Edinburgh, UK", 
  "years": "Feb 2008 - Jul 2010",
  "description":"Extreme conditions user facility development."
  }

]
};



var education ={
  "schools": [
  {
  "name": "Enspiral Developer Academy",
  "degree": "Node.js with Javascript",
  "years": "Nov 2015-April 2016",
  "location": "Wellington, New Zealand"
  },
  {
  "name": "Mumbai University",
  "degree": "Ph.D [Shockwave Physics]",
  "years": "1998-2002",
  "location": "Mumbai, India"
  },
  {
  "name": "Kamaraj University",
  "degree": "M.Sc(Physics)",
  "years": "1987-1989",
  "location": "Madurai, India"
  }
  ],
  "onlineCourse":[
    {"title":"HTML and CSS",
    "school": "Udacity",
    "dates": "Nov 2015",
    "url": "https://www.udacity.com/"
    },
    {"title":"Javascript",
    "school":"Codecademy",
    "dates": "Nov 2015",
    "url": "https://www.codecademy.com/"
    }
  ]

};

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedworklocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedworklocation);

    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].years);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description)
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();


function displayEducation () {
  for (school in education.schools) {
    $('#education').append(HTMLschoolStart);
    formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
     formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
    formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
    formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
   
    $('.education-entry:last').append(formattedSchoolName, formattedSchoolDates, formattedSchoolDegree);
  }
}
displayEducation();

$('.education-entry:last').append(HTMLonlineClasses);
  
  for (online in education.onlineCourse) {
    var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourse[online].title);
   // $('.education-entry:last').append();

    var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourse[online].school);
   // $('.education-entry:last').append();

    var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourse[online].dates);
   // $('.education-entry:last').append();

    var formattedonlineURL = HTMLonlineURL.replace('%url%', education.onlineCourse[online].url);

    // var formattedonlineURLTXT = HTMLonlineURL.replace('%data%', education.onlineCourse[online].school);

    $('.education-entry:last').append(formattedonlineTitle,formattedonlineSchool, formattedonlineDates,formattedonlineURL);
  };


var projects = {
  'list': [
          {
            'title': 'Comms Companion',
            "dates": 'April 2016',
            'description': 'Final group project. This application was developed with three collaborators. This application is aimed for kids with Autism syndrome to help them communicate with their parents/gaurdians.\
             This was built using React for frontend with express for the server along with SQLite for database with CSS styling and a SVG for timer animation. )',
           'projectImage':'images/cryostat.jpg'
          },



          {
            'title': 'Large sample volume Cryostat for electrical and optical properties measurements',
            "dates": 'August 2014',
            'description': 'Designed and developed a closed cycle refrigerator for electrical transport and\
              optical properties measurement in 4-400K temperature range. This facility is used\
              for thermopower and resistivity measurements of superconducting samples in\
              pellet, thin-film and tape architecture. (MBIE Funded project)',
           'projectImage':'images/cryostat.jpg'
          },

          {
            "title":'IR Laser Machining Facility',
             "dates":"March 2013",
             "description":'A 20W OEM IR laser was customized with \
             control using a custom software. This facility can be used for cutting,\
             drilling micro and nano holes, and grooves in various materials.\
             This can handle superconducting cables for laser striation to improve its AC\
             loss properties.(MBIE funded Project).\
             A pilot project for drilling micro and nano pores in polymer membranes the laser\
             machining facility was used in collaboration with Izone™ and NZ based company\
             marketing these products. (Marsden Funded Project)',
             'projectImage':'images/Laser_facility.jpg'
          }         
    ]
  };

  function displayProjects() {
    for (project in projects.list) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.list[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.list[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.list[project].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.list[project].projectImage);
    $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
    }

  }

displayProjects();

$("#mapDiv").append(googleMap);