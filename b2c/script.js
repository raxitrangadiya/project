// Sample data for faculty and students
let facultyData = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
  ];
  
  let studentData = [
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Anderson", email: "bob.anderson@example.com" },
  ];
  
  // Function to populate faculty list
  function populateFacultyList() {
    const facultyList = document.getElementById("faculty-list");
    facultyList.innerHTML = "";
  
    facultyData.forEach((faculty) => {
      const facultyItem = document.createElement("div");
      facultyItem.innerHTML = `<strong>${faculty.name}</strong> - ${faculty.email}`;
      facultyList.appendChild(facultyItem);
    });
  }
  
  