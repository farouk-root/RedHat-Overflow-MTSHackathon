function generate() {
    let name1 = document.getElementById("name").value;
    let mail1 = document.getElementById("email").value;
    let phone1 = document.getElementById("phone").value;
    let address1 = document.getElementById("address").value;
    let linkedin1 = document.getElementById("linkedin").value;
    let prof1 = document.getElementById("prof").value;
    let objective1 = document.getElementById("objective").value;
    let per1= document.getElementById("per").value;
    let course1 = document.getElementById("course").value;
    let course21 = document.getElementById("course2").value;
    let course31 = document.getElementById("course3").value;
    let comp1 = document.getElementById("comp").value;
    let university1 = document.getElementById("university").value;
    let projectn1 = document.getElementById("project").value;
    let projectn2 = document.getElementById("project2").value;
    //let phoNoLength = phone1.length;
  
    if (name1 == "") 
      alert("Please enter your name");
  
    else if (mail1 == "") 
      alert("Please enter your email-id");
  
    else if (phone1 == "") 
      alert("Please enter your phone no.");
  
    else if (address1 == "") 
      alert("Please enter your address");
  
    else if (linkedin1 == "") 
      alert("Please enter your linkedin id");
  
    else if (prof1 == "") 
      alert("Please enter your prof");
  
    else if (objective1 == "") 
      alert("Please enter your objectives");
  
    else if (course1 == "") 
      alert("Please enter your course");
  
    else if (comp1 == "") 
      alert("Please enter your comp");
  
    else if (university1 == "") 
      alert("Please enter your university name");
  
    else if (per1 == "") 
      alert("Please enter your percentage");
  
    else 
      display();
  
    let companyn1 = document.getElementById("company").value;
  
    if (companyn1 == "") 
      document.getElementById("expp").style.display = "none";
  
    document.getElementById("projj").style.display = "none";
  
    if (projectn1 != "") 
      document.getElementById("projj").style.display = "block";
  
    else if (projectn2 != "") 
      document.getElementById("projj").style.display = "block";
  
    if (course21 == "")
      document.getElementById("course2N").style.display = "none";
  
    if (course31 == "")
      document.getElementById("course3N").style.display = "none";
  }
  function display() {
    let tocap = document.getElementById("name").value;
  
    document.getElementById("namet").innerHTML = tocap.toUpperCase();
  
    //Email
    document.getElementById("mailt").innerHTML =
      document.getElementById("email").value;
  
    //contact
    document.getElementById("phonet").innerHTML =
      document.getElementById("phone").value;
  
    //address
    document.getElementById("addresst").innerHTML =
      document.getElementById("address").value;
  
    //Linkedin
    document.getElementById("linkedt").innerHTML =
      document.getElementById("linkedin").value;
  
    // objective
    document.getElementById("objectivet").innerHTML =
      document.getElementById("objective").value;
  
    // // Company
    document.getElementById("companyt").innerHTML =
      document.getElementById("company").value;
  
    //Role
    document.getElementById("rolet").innerHTML =
      document.getElementById("role").value;
  
    //C1
    // Course
    document.getElementById("courset").innerHTML =
      document.getElementById("course").value;
  
    // Year of passing
    document.getElementById("compt").innerHTML =
      document.getElementById("comp").value;
  
    //university college
    document.getElementById("universityt").innerHTML =
      document.getElementById("university").value;
  
    //Percentage
    document.getElementById("pert").innerHTML =
      document.getElementById("per").value;
    //C2
    // Course
    document.getElementById("course2t").innerHTML =
      document.getElementById("course2").value;
  
    // Year of passing
    document.getElementById("comp2t").innerHTML =
      document.getElementById("comp2").value;
  
    //university college
    document.getElementById("university2t").innerHTML =
      document.getElementById("university2").value;
  
    //Percentage
    document.getElementById("per2t").innerHTML =
      document.getElementById("per2").value;
    //C3
    // Course
    document.getElementById("course3t").innerHTML =
      document.getElementById("course3").value;
  
    // Year of passing
    document.getElementById("comp3t").innerHTML =
      document.getElementById("comp3").value;
  
    //university college
    document.getElementById("university3t").innerHTML =
      document.getElementById("university3").value;
  
    //Percentage
    document.getElementById("per3t").innerHTML =
      document.getElementById("per3").value;
  
    //Profession
    document.getElementById("proft").innerHTML =
      document.getElementById("prof").value;
  
    //Projects
    document.getElementById("projectt").innerHTML =
      document.getElementById("project").value;
      
    document.getElementById("project2t").innerHTML =
      document.getElementById("project2").value;
  
    document.getElementById("resumeform").style.display = "none";
    document.getElementById("resumetemp").style.display = "block";
  }
  function printr() {
    document.getElementById("printbtn").style.display = "none";
    document.getElementById("removeLine").style.display = "none";
    document.getElementById("removeLine2").style.display = "none";
    document.getElementById("removeLine3").style.display = "none";
    window.print();
  }
  