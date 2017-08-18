(function () {
  'use strict';
  angular.module('common.services')
  .factory('mockData', mockData);

  function mockData() {
    var fruits = [
      {id:'1',name:'Red apples',price:10,count:85,color:'Red'},
      {id:'2',name:'strawberries',price:12,count:55,color:'Red'},
      {id:'3',name:'bananas',price:5,count:75,color:'Yellow'},
      {id:'4',name:'yellow apples',price:7,count:70,color:'Yellow'},
      {id:'5',name:'green kiwis',price:8,count:100,color:'Green'},
    ]

    function getFruits() {
      return fruits;
    }
    function updateFruits(data) {
      fruits = data;
      return fruits;
    }

    return {
      getFruits:getFruits,
      updateFruits:updateFruits
    }
  }

})();