/* global shoppingList, cuid, item */

'use strict';

const store = (function () {
  const foo = 'bar';
  const items = [{
    id: cuid(),
    name: 'apples',
    checked: false
  },
  {
    id: cuid(),
    name: 'oranges',
    checked: false
  },
  {
    id: cuid(),
    name: 'milk',
    checked: true
  },
  {
    id: cuid(),
    name: 'bread',
    checked: false
  }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    return items.find(i => i.id === id);
  };

  const addItem = function(name){
    try {
      item.validateName(name);
      this.items.push( item.create(name));
    } catch (error) {
      console.log('Cannot add item.');
    }

  };

  const findAndToggleChecked = function(id){
    console.log(findById(id));
    this.findById(id).checked = !this.findById(id).checked; 
  };

  const findAndUpdateName = function(id,newName){
    try {
      item.validateName(newName);
      this.findById(id).name = newName;

    } catch (error) {
      console.log('Cannot find/update item.');
    }
  };

  const findAndDelete = function(id){
    console.log(this.items.filter(i=> i.id !== id));
    this.items =this.items.filter(i=> i.id !== id);
  };

  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val){
    this.searchTerm  = val;
  };


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}());