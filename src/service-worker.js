importScripts('idb.js');
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", (e)=>{
    //console.log("in message  >> ", e.data);
    if (e.data.action=='skipWaiting') self.skipWaiting()
})
// Creating a store when service worker initializes//
// eslint-disable-next-line no-undef
var dbPromise = idb.open('todo-store', 1, function (db) {
    if (!db.objectStoreNames.contains('todos')) {
        db.createObjectStore('todos', { keyPath: 'id' });
    }
});


//Clearing all the data from current store by passing the store name//
function clearAllData(st) {
    return dbPromise
        .then((db) => {
            var tx = db.transaction(st, 'readwrite')
            var store = tx.objectStore(st);
            store.clear();
            return tx.complete;
        })
}

// Reading all the data from current store by passing an arugment storename//
function readAllData(st) {
    return dbPromise
        .then(function (db) {
            var tx = db.transaction(st, 'readonly');
            var store = tx.objectStore(st);
            return store.getAll();
        });
}

// Deleting data from store by passing storename and id the item which need to be deleted// 
// eslint-disable-next-line no-unused-vars
function deleteItemFromData(st, id) {
    dbPromise
        .then((db) => {
            var tx = db.transaction(st, 'readwrite');
            var store = tx.objectStore(st);
            store.delete(id);
            return tx.complete
        })
        .then(() => {
        
            console.log("Item deleted... ")
        })
}



// Service worker life cycle event install //
self.addEventListener('install', function (event) {
    console.log("installing service worker >> ", event);
})

// Service worker life cycle evnet activate//
self.addEventListener('activate', function (event) {
    console.log("Activating service worker >> ", event);
    return self.clients.claim();
})


self.addEventListener('fetch', function (event) {
    //console.log("fetch service worker >> ", event);
    var url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    if (event.request.url.indexOf(url) > -1) {
        //console.log("evnet request >> ", event.request)
        event.respondWith(fetch(event.request)
            .then(function (res) {
                var clonedRes = res.clone();
                clearAllData('todos')
                    .then(function () {
                        return clonedRes.json();
                    })
                    .then(function (data) {
                        data.forEach((user) => {
                            dbPromise
                                .then(function (db) {
                                    var tx = db.transaction('todos', 'readwrite');
                                    var store = tx.objectStore('todos');
                                    store.put(user);
                                    return tx.complete;
                                });
                        })
                    });
                return res;
            })
        );
    }
})

self.addEventListener('sync', function (evnet) {
    console.log("Background Syncing >>> ", evnet);
    if (evnet.tag === "sync-new-post") {
    
        console.log("Syncing new post >> ");
        evnet.waitUntil(
            readAllData('sync-posts')
                .then(function (data) {
                    for (var dt of data) {
                    
                        console.log("dt >> ", dt);
                        fetch("https://jsonplaceholder.typicode.com/posts", {
                            method: "POST",
                            body: JSON.stringify(
                                {
                                    title: dt.title,
                                    body: dt.body,
                                    userId: dt.userId
                                }
                            ),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                Accept: "application/json"
                            }
                        })
                            .then(response => response.json())
                            .then(json => {
                            
                                console.log("from service worker Sent Data >> ", json);
                            })
                            .catch((err) => {
                            
                                console.log("Error while sending data >> ", err)
                            })
                    }

                })
        )
    }
})


// // Fetching content using Service Worker
// self.addEventListener('fetch', function(e) {
//     e.respondWith(
//       caches.match(e.request).then(function(r) {
//         console.log('[Service Worker] Fetching resource: '+e.request.url);
//         return r || fetch(e.request).then(function(response) {
//           return caches.open(cacheName).then(function(cache) {
//             console.log('[Service Worker] Caching new resource: ' + e.request.url);
//             cache.put(e.request, response.clone());
//             return response;
//           });
//         });
//       })
//     );
//   });


