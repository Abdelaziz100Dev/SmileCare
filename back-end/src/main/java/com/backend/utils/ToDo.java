//      \                          ----- to start sonarqube -------
//                                 > cd C:\sonarqube\bin\windows-x86-64
//                                                      > ./StartSonar.bat
// then go to http://localhost:9000/projects
//  to start sonar-scanner, cd to project then run this > C:\sonar-scanner-5.0.1.3006-windows\bin/sonar-scanner.bat

//Patient: Stores information about patients, including their name, contact details, medical history, insurance information, etc.
//        Doctor : Contains details about doctors working in the medical cabinet, such as their name, specialty, contact information, schedule, etc.
//        Appointment : Represents appointments scheduled between patients and doctors, including the date, time, reason for the visit, status (confirmed, canceled, etc.), and any notes.
//        Medical Record : Stores detailed information about each patient visit, including diagnosis, prescribed medications, treatments, test results, and follow-up instructions.
//        Billing: Tracks financial transactions, including invoices issued to patients, payments received, outstanding balances, insurance claims, etc.
//        Inventory: Manages medical supplies and equipment inventory, including item name, quantity on hand, reorder level, supplier information, etc.
//        Staff: Contains details about non-medical personnel working in the cabinet, such as receptionists, nurses, administrators, etc.
//        Facility: Describes the physical location of the medical cabinet, including address, contact information, operating hours, facilities available, etc.