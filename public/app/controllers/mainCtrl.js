angular.module('mainCtrl',[])
    .controller('mainController', function(upload){
        var vm = this;
        vm.uploadFile = function(){
          upload.send()
            .success(function(data){
             vm.file_data = data.file_size; 
          });
        };
    });