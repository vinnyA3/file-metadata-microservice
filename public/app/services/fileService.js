angular.module('fileService',[])
    .factory('upload', function($http){
       var uploadFactory = {};
        // send the file
        uploadFactory.send = function(){
          return $http.post('/');  
        };
        
        return uploadFactory;
    });