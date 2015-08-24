var bio = {
	"name" : "Shanmathi Mayuram Krithivasan",
	"role" : "",
	"welcomeMessage": "Hi! I'm Shanmathi. I am a Masters student at University of Illinois at Chicago.",
	"contacts" : {
		"email" : "smayur3@uic.edu",
		"github" : "Shanmathi1",
    "linkedin" : "shanmathimk",
		"location" : "Chicago"
	},
	"skills" : ["C", "C++", "Java", "HTML&CSS","JavaScript","Python","Mobile Development"],
	"bioPic" : "images/pic.jpg",
	
	display: function() {
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedEmail + formattedGitHub + formattedLinkedIn + formattedLocation);
    $("#footerContacts").append(formattedEmail + formattedGitHub + formattedLinkedIn +  formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    

    $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }


	
}
};

var education = {
	"schools" : [ {
	"name" : "University of Illinois at Chicago",
	"location" : "Chicago, IL",
	"degree" : "Masters",
	"major" : "CS",
	"dates" : "Dec 2015",
	"gpa" : "3.83/4"
},
{
	"name" : "Anna University",
	"location" : "Chennai, India",
	"degree" : "Bachelors",
	"major" : "CS",
	"dates" : "April 2013",
	"gpa" : "8.74/10"
}
],
displaySchools: function() {
    for (var e in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].major);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
      var formattedGPA = HTMLschoolGPA.replace("%data%", education.schools[e].gpa);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
      $(".education-entry:last").append(formattedGPA);
    }
  }
}

var work = {
	"jobs" : [
	{
		"employer" : "W.W.Grainger Inc",
		"title" : "Software Engineer Intern",
		"location" : "LakeForest, IL",
		"dates" : "June 2015 - August 2015",
		"description" : "Designed a working prototype for  G-Sales iOS Mobile App used by Territory Sales Representatives (TSR) for a one stop solution. Developed features using Swift to render front-end and javaScript to perform back-end logic with cloud functions on Parse. Performed regression testing for smooth data migration between SAP ECC and CRM systems and Hybris Commerce Suite"
	},
	{
		"employer" : "UIC College of Medicine",
		"title" : "Programmer",
		"location" : "Chicago, IL",
		"dates" : "August 2014 - May 2015",
		"description" : "Modified existing web applications of College of Medicine to correct errors, upgrade interfaces and improve performance. Collaborated with other team members in plan, design and development of robust solutions using javaScript and jQuery. Managed the student database in Oracle and queried the database to generate periodic reports for course marketing analysis"


	},
	{
		"employer" : "TATA Consultancy Services",
		"title" : "Assistant Systems Engineer",
		"location" : "Chennai, India",
		"dates" : "November 2013 - June 2014",
		"description" : "Developed RICEF objects for retail process using ABAP for client – Woolworths, the largest supermarket store chain in Australia. Enhanced the existing functionality of SAP’s standard business application based on client’s needs via customer exits and BADI. Migrated data using ABAP and LSMW from a Non-SAP system to a SAP system to increase performance and efficiency"


	},

	{
		"employer" : "WebDesignst.com",
		"title" : "Software Design Engibeer Intern",
		"location" : "Chennai, India",
		"dates" : "September 2012 - October 2013",
		"description" : "Designed overall layout and developed interactive websites for clients using HTML, CSS, javaScript and jQuery. Developed UI layers for mobile applications using Java for Android with SQLite database and Objective-C for iOS platform. Interfaced with business analysts, developers, and technical support to determine optimal specifications."


	}


	],
	display: function() {
    for (var e in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

var project = {
  "projects": [ {
    "title": "Frogger Game",
    "url": "http://shanmathi1.github.io/frogger_game/",
    "dates": "2015",
    "description": "This application is a clone of the classic game, Frogger. Coded players, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style. Created enemy subclasses with different movement patterns and sprites (edited art assets in GIMP).",
    "image": "images/frogger.png"
  },
  {
    "title": "Neighborhood Map",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2015",
    "description": "This is a single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages. Developed a full-page map that loads with popular places in every location. Users can view recent pictures taken at each location(retrieved by AJAX request to Instagram API).",
    "image": "images/map.png"
  },
  {
    "title": "Website Optimization",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2015",
    "description": "Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90. Eliminated inefficiencies in the website's scroll animation.  Site now scrolls at 60 frames per second.",
    "image": "images/website.jpg"
  },
  {
    "title": "Tweet Classification",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2015",
    "description": "Implemented sentiment and opinion mining techniques of data mining on tweets from 2012 US Presidential elections. Designed a classifier from the training data set of both the candidates from their twitter page using Java’s API for Weka. Tested the classified data by Naïve Bayes and SVM Algorithm for good F-measure, recall, precision and accuracy.",
    "image": "images/tweet.png"
  },
  {
    "title": "MS-GSP Algorithm",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2015",
    "description": "Generalized Sequential Pattern algorithm is an algorithm used for sequence mining. It is used in recommendations in various online shopping websites to analyze sequence in buying items and its frequency. Developed an Application using Java to count the total number of products(sequences) bought together during sales.", 
    "image": "images/msgsp.png"
  },
  {
    "title": "Android Music Player App",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2015",
    "description": "Designed and coded two Android Apps for implementing a music player using Java, Android SDK and SQLite database. First App stores a number of audio clips and contains a service intended to be bound, which exposes an API for clients to use. Second App consists of an activity that exposes functionality of first App and binds to the service for playing desired audio clips.",
    "image": "images/music.jpg"
  },
  {
    "title": "Assemble Language Emulator",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2014",
    "description": "Developed GUI for implementing assembly language instructions with set of widgets for displaying the state of computer. Identified and displayed the state changes brought about by the execution of assembly instructions on memory and registers. Implemented using Smalltalk and interfaced design with customizable search mechanisms making it easy for naive users.",
    "image": "images/ale.png"
  },
  {
    "title": "Web Application Security",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2014",
    "description": "Designed, implemented and analyzed the  security  features  of a web  application login module and user registration module. Implemented Role Based Access Control (RBAC) to regulate access to resources based on roles of individual users of application. Secured the application from security vulnerabilities including SQL injection, cross site scripting and cross site request forgery. Developed application using ASP.NET, server side code in C# and database using MYSQL workbench.",
    "image": "images/login.jpg"
  },
  {
    "title": "Visual Role Mining",
    "url": "https://github.com/Shanmathi1?tab=repositories",
    "dates": "2014",
    "description": "Developed an interactive visualization front end system for role engineers to design roles and identify permissions to them. Designed an ability to zoom in on to a specific range of data and adjust the range of viewed data through a drill-down process. Clustered the records in the training set using K-means (Data size  – 800 users, 300 roles and 2000 permissions).",
    "image": "images/visual.png"
  }],
  display: function() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      formattedTitle = formattedTitle.replace("%url%", project.projects[e].url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
};

// Calls display functions in each section
bio.display();
project.display();
work.display();
education.displaySchools();

$("#mapDiv").append(googleMap);
