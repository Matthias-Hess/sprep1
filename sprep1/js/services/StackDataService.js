spacedApp.factory('stackDataService', function ($q) {
     return {

         deleteStack: function (stack){
             var db = new PouchDB('stacks');
             db.remove(stack);
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

