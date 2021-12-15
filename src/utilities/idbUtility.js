import idb from './idb'

export const dbPromise = idb.open('todo-store', 1, function (db) {
    if (!db.objectStoreNames.contains('todos')) {
      db.createObjectStore('todos', {keyPath: 'id'});
    }
  });
  
  export const writeData = (st, data) => {
    return dbPromise
      .then(function(db) {
        var tx = db.transaction(st, 'readwrite');
        var store = tx.objectStore(st);
        store.put(data);
        return tx.complete;
      });
  }
  
  export const readAllData = (st) => {
    return dbPromise
      .then(function(db) {
        var tx = db.transaction(st, 'readonly');
        var store = tx.objectStore(st);
        return store.getAll();
      });
  }
  
  export const clearAllData = (st) => {
    return dbPromise
      .then(function(db) {
        var tx = db.transaction(st, 'readwrite');
        var store = tx.objectStore(st);
        store.clear();
        return tx.complete;
      });
  }
  
  export const deleteItemFromData = (st, id) => {
    dbPromise
      .then(function(db) {
        var tx = db.transaction(st, 'readwrite');
        var store = tx.objectStore(st);
        store.delete(id);
        return tx.complete;
      })
      .then(function() {
        console.log('Item deleted!');
      });
  }