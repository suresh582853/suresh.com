var students_list={
                students_1001:{
                            name:"Suresh",
                            id:"123",
                            class:"9th class",
                            section:"A",
                            parentDetails:{
                              parentName:"Munaswamy",
                              phoneNumber:"7799390352",
                              address:"chittoor"
                            }
                },
                students_1002:{
                  name:"Lokesh",
                  id:"143",
                  class:"8th class",
                  section:"B",
                  parentDetails:{
                    parentName:"Amudha",
                    phoneNumber:"9148448467",
                    address:"tirupathi"
                  }
               },
               students_1003:{
                  name:"Dinesh",
                  id:"121",
                  class:"10th class",
                  section:"C",
                  parentDetails:{
                    parentName:"Raj",
                    phoneNumber:"9124246371",
                    address:"kadapa"
                  }
               },
}

var student1=students_list.students_1001.name+" "+students_list.students_1001.id+" "+students_list.students_1001.class+" "+
students_list.students_1001.section+" "+students_list.students_1001.parentDetails.parentName+" "+students_list.students_1001.parentDetails.phoneNumber+" "+
students_list.students_1001.parentDetails.address;

var student2=students_list.students_1002.name+" "+students_list.students_1002.id+" "+students_list.students_1002.class+" "+
students_list.students_1002.section+" "+students_list.students_1002.parentDetails.parentName+" "+students_list.students_1002.parentDetails.phoneNumber+" "+
students_list.students_1002.parentDetails.address;

var student3=students_list.students_1003.name+" "+students_list.students_1003.id+" "+students_list.students_1003.class+" "+
students_list.students_1003.section+" "+students_list.students_1003.parentDetails.parentName+" "+students_list.students_1003.parentDetails.phoneNumber+" "+
students_list.students_1003.parentDetails.address;

console.log(student1);
console.log(student2);
console.log(student3);





