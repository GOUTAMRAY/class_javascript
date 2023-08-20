
class Student {
   constructor(name, ban, eng , math, s , ss , reli){
      this.name = name;
      this.ban  = ban;
      this.eng  = eng;
      this.math = math;
      this.s    = s;
      this.ss   = ss;
      this.reli = reli;


   };

   // get gpa & grade
    getGpa(sub){
      let gpa = 0;
      let grade;

      if (this[sub] >= 0 && this[sub] < 33 ) {
          gpa   =  0;
          grade ="F";
      }else if(this[sub] >= 33 && this[sub] < 40){
        gpa   =  1;
        grade ="D";
      }else if(this[sub] >= 40 && this[sub] < 50){
        gpa   =  2;
        grade ="C";
      }else if(this[sub] >= 50 && this[sub] < 60){
        gpa   =  3;
        grade ="B";
      }else if(this[sub] >= 60 && this[sub] < 70){
        gpa =  3.5;
        grade ="A-";
      }else if(this[sub] >= 70 && this[sub] < 80){
        gpa =  4;
        grade ="A";
      }else if(this[sub] >= 80 && this[sub] <= 100){
        gpa =  5;
        grade ="A+";
      }else{
        gpa = "invalid gpa ";
        grade = "invalid grade"
      }

      return{
        gpa : gpa,
        grade : grade,
      };
    };

   // get cgpa
    getCgpa(){
      if(this.ban >= 33 &&
        this.eng >= 33 && 
        this.math >= 33 && 
        this.s >= 33 && 
        this.ss >= 33 && 
        this.reli >= 33 )
        {
          const totalGpa = 
          this.getGpa("ban").gpa +
          this.getGpa("eng").gpa + 
          this.getGpa("math").gpa +
          this.getGpa("s").gpa + 
          this.getGpa("ss").gpa +  
          this.getGpa("reli").gpa;

          const cgpa = totalGpa / 6;
          return cgpa.toFixed(2);
        }else{
          return 0;
        }
    };
   // get final grade 
    getFinalGrade(){
      if(this.ban >= 33 &&
        this.eng >= 33 && 
        this.math >= 33 && 
        this.s >= 33 && 
        this.ss >= 33 && 
        this.reli >= 33 )
      {
        if(this.getCgpa() >= 0 && this.getCgpa() < 1) return "F";
        if(this.getCgpa() >= 1 && this.getCgpa() < 2) return "D";
        if(this.getCgpa() >= 2 && this.getCgpa() < 3) return "C";
        if(this.getCgpa() >= 3 && this.getCgpa() < 3.5) return "B";
        if(this.getCgpa() >= 3.5 && this.getCgpa() < 4) return "A";
        if(this.getCgpa() >= 4 && this.getCgpa() < 5) return "A-";
        if(this.getCgpa() >= 5) return "A+";
    }else{
      return "F";
    }
    };

   // get final cgpa
    getFinalResult(){
      if(this.ban >= 33 &&
        this.eng >= 33 && 
        this.math >= 33 && 
        this.s >= 33 && 
        this.ss >= 33 && 
        this.reli >= 33 )
        {
          return "Passed";
    }else{
      return "Failed";
    }
    
    };



}













