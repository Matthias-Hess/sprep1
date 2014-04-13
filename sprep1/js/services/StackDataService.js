spacedApp.factory('stackDataService', function ($q) {
     return {

         deleteStack: function (stack){
             var db = new PouchDB('stacks');
             db.remove(stack);
         },

         readStack: function (id) {
             var deferred=$q.defer();
             
             
             PouchDB.replicate('stacks', 'https://spacedrepetition.couchappy.com/sprep');
             
             
             var db = new PouchDB('stacks');
             db.get(id, function(err, doc) {
                 if (err){
                     console.log(err);
                     deferred.reject(err);
                 }
                 else {
                    console.log("doc read!");
                    deferred.resolve(doc);
                 }
             });
             return deferred.promise;
         },

    getStackList: function  () {
            var deferred=$q.defer();

            var db = new PouchDB('stacks');
            db.allDocs({include_docs: true, descending: true}, function(err, doc) {
                var result = [];
                if (err){
                    deferred.reject(err);
                }
                else {
                    for (var row in doc.rows){
                        result.push(doc.rows[row].doc)  ;
                    }
                    console.log("allDocs retrieved!");
                    deferred.resolve(result);
                 }
            });
            return deferred.promise;
        },

        saveStack: function (stack) {
            var db = new PouchDB('stacks');
            db.put(stack, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a stack!');
            }
        });
    }
    };
});

