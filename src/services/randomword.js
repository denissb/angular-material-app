'use strict';

class RandomWordSvc {
    constructor($http) {
        this.$http = $http;
    }

    getWord() {
        return this.$http.jsonp('http://randomword.setgetgo.com/get.php?callback=JSON_CALLBACK').then(
            r => r.data.Word, 
            () => ''
        )
    }

    static factory($http) {
        return new RandomWordSvc($http);
    } 
};

RandomWordSvc.factory.$inject = ['$http'];

export { RandomWordSvc }