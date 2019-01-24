/* global shoppingList, cuid */

'use strict';

const item = (function(){
  const foo = 'bar';

  const validateName = function(name){
    if(!name)
      throw console.error('Name does not exist');      
  };

  const create = function(name){
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  };
  return {validateName,create};
}());