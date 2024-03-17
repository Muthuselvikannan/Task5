//Create your own resume data in JSON format

let myResume =
{     
    "name":{
        "name": "Muthuselvi Tamizhventhan"
    },

    "contact":[{
        "email": "muthuselvitamizh@gmail.com",
        "phone": "+91 9094153970",
        "degree": "BCA",
        "address": "No 61/35, 3rd Street, Vijayaragavapuram, Saligramam",
        "postalCode": "600093",
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
    }],  
    
    "synopsis":{
    "objective": "Thriving to establish an anchoring position where I can improve and grow with the commpany, that enables my inner strength using challenging tasks."
},
        
    "work": [ 
      {
        "company": "Cognizant Technologies Solutions India Pvt. Ltd.",
        "position": "Specialist - Data",
        "startDate": "15-04-2019",
        "endDate": "Till now",
        "responsibility": "Managing team members Attendance, Queries and Reports"
      }],

    "education":[ 
      {
        "institution": "SCSVMV University",
        "department": "Computers",
        "studyType": "fulltime",
        "batch start year": "2003",
        "batch end year": "2008",
        "gpa": "8.1"
      }],
    
    "skills":[ 
      {
        "name": "Javascript, J2EE, Software Testing",
        "level": "Beginner"
        
      }],
  
    "languages": [{
  
       "language": "Tamil, English, Hindi"
      
    }],
    "interests": [{
      
        "interest": "Music, Books"
      
    } ]
};

    console.log(myResume);
