(function ()
{
   angular
           .module('app')
           .service('apiService', apiService);
   
   apiService.$inject = ['$http', '$q'];
   function apiService($http, $q)
   {
       this.getDataAll = function (url)
       {
           return $q(function (resolve)
           {
               $http.get(url).then(function (response)
                {
                    resolve(response);
                }, function (response)
                {
                    resolve(response);
                });
           });
           
       };
   }
   
})();
