// void main(){
//   print("Hello World");
// }


// void main(){
//   int age = 20;
//   double pi = 3.14;
//   String name = "Atul";
//   bool isLearning = true; 

//   print('Name = $name ,Age = $age , Value = $pi, Validation = $isLearning' );

// }


// void main(){
//   int number = 10 ;
//   if(number%2 == 0){
//     print("Even number");
//   }else{
//     print("odd number");
//   }
// }

import 'dart:io';

void main() {
  print('Enter an integer:');
  
  // Read input as a string
  String? input = stdin.readLineSync();
  
  if (input != null) {
    // Convert string to integer
    int number = int.parse(input);
    print('You entered: $number');
  }
}
