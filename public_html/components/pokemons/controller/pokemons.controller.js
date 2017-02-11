(function()
{
    'use strict';
    angular
            .module('app')
            .controller('pokemonsController', pokemonsController);
    
    pokemonsController.$inject = ['$scope', 'apiService'];
    
    function pokemonsController($scope, apiService)
    {
        var vm = this;
        vm.data = {};
        
        apiService.getDataAll('http://pokeapi.co/api/v2/pokemon/').then(function (response)
        {
            if(response.status === 200)
            {
                vm.data = response.data.results;
            }
        });
    }
    
})();