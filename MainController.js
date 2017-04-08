
rudraWeb.controller('MainController', ['$scope', function($scope){
  $scope.title = " MY WORKBOOK";
  $scope.details = [
  {
  name: 'Temperature Converter App',
  number: 'Project 1',
  pubdate: new Date('2017', '2', '5'),
  cover: 'img/android.png',
  project: 'Worked on creating a simple temperature converter android application majorly focused on basics on android application development.',
  info: 'android.html'},
  {
  name: 'Notelist Web Application',
  number: 'Project 2',
  pubdate: new Date('2016', '10', '14'),
  cover: 'img/php.png',
  project: 'Developed note taking application using PHP programming language. The main aim of the project is to allow a user to perform CRUD operations on a note. ',
  info: 'php.html'},
  { 
  name: 'Note making application', 
  number: 'Project 3',
  pubdate: new Date('2016', '04', '08'),
  cover: 'img/javascript.png',
  project: 'Created a single page Javascript application. The application consists of a Note application.',
  info: 'javascript.html' },
  {
  name: 'Java',
  number: 'Project 4',
  pubdate: new Date('2016', '10', '28'),
  cover: 'img/java.png',
  project: 'This is my java project',
  info: 'java.html' },
  {
  name: 'HTML & CSS',
  number: 'Project 5',
  pubdate: new Date('2016', '10', '28'),
  cover: 'img/css.png',
  project: 'This is my html and css project',
  info: 'css.html' },
  {
  name: 'Angular JS',
  number: 'Project 6',
  pubdate: new Date('2016', '10', '28'),
  cover: 'img/angular.png',
  project: 'This is my angular JS project',
  info: 'angular.html'

                   } ];
}
 ]);
  
