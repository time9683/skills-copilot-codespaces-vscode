function skillsMember(){
    const skills = {
        programming: "Expert",
        problemSolving: "Advanced",
        communication: "Intermediate",
        teamwork: "Intermediate",
        creativity: "Beginner",
      };
    
      // Iterate through the skills object and display the skill and its proficiency level
      for (const [skill, proficiency] of Object.entries(skills)) {
        console.log(`${skill}: ${proficiency}`);
      }
}