/* 
    Created on : 22.Ağu.2015, 00:18:10
    Author     : Ekin YÜCEL
*/
/* chart visitors */
var app = angular.module('App', ['easypiechart']);
    app.controller('chartCtrl', ['$scope', function ($scope) {
        $scope.percent = 10;
        $scope.options = {
        animate: {
            duration: 0,
            enabled: false
        },
        barColor: '#ef1e25',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'circle'
    };
} ]);

$(function(){
    var myvalues = [1,8,5,7,4,4,9];
    $('.inlinebarlike').sparkline(myvalues, {type: 'bar', barColor: 'orange'} ); // bar chart sparkline eklentisi
    $('.inlinebarsub').sparkline(myvalues, {type: 'bar', barColor: 'blue'} );  // http://omnipotent.net/jquery.sparkline/#s-docs
    $('.inlinebarcust').sparkline(myvalues, {type: 'bar', barColor: 'seagreen'} );
    $('.inlinebarord').sparkline(myvalues, {type: 'bar', barColor: '#f68484'} );
});