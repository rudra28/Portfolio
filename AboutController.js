
rudraWeb.controller('AboutController', ['$scope', function($scope){
  $scope.title = " MY ACADEMIC BACKGROUND & QUALIFICATIONS";
  $scope.academics = [{ 
  name: 'Experience',
  place: 'Credence Systems Pvt. Ltd. Noida, India', 
  position: 'Web Developer',
  date: 'May 2014 - June 2015',
  cover: 'img/exp.png', },
  {
  name: 'Experience',
  place: 'Nettech Pvt. Ltd. Kolkata, India', 
  position: 'Intern',
  date: 'Dec 2013 - May 2014',
  cover: 'img/exp1.png',
   },
  {
  name: 'Education',
  place: 'Illinois Institute of Technology, Chicago', 
  position: 'Masters in Information Technology and Management',
  date: 'Aug 2015 - May 2017',
  cover: 'img/edu.png',
   },
  {
  name: 'Education',
  place: 'National Institute of Technology, Raipur', 
  position: 'B.Tech in Information Technology',
  date: 'Aug 2011 - May 2015',
  cover: 'img/edu1.png',
   },
  {
  name: 'Certification',
  place: 'Shaping Up with Angular JS', 
  position: 'Code School',
  date: 'May 2016',
  cover: 'img/cer.png',
   },
  {
  name: 'Certification',
  place: 'EMC Academic Associate, Information Storage', 
  position: 'EMC',
  date: 'Dec 2015',
  cover: 'img/cer1.png',

  },
  {
  name: 'Certification',
  place: ' Web Design and Development', 
  position: 'Nettech Pvt. Ltd. Kolkata, India',
  date: 'Jan 2014',
  cover: 'img/cer2.png',

  },
  {
  name: 'Work in Progress',
  place: ' Many more to come', 
  position: 'Development | Website | Software | Application',
  date: 'Year 2017',
  cover: 'img/upcoming.png',
  }

  ];

   

}
 ]);
  
