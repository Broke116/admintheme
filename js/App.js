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

// like , sub , cust , ord line graphs
$(function () {
    var myvalues = [1, 8, 5, 7, 4, 4, 9];
    $('.inlinebarlike').sparkline(myvalues, { type: 'bar', barColor: 'orange' }); // bar chart sparkline eklentisi
    $('.inlinebarsub').sparkline(myvalues, { type: 'bar', barColor: 'blue' });  // http://omnipotent.net/jquery.sparkline/#s-docs
    $('.inlinebarcust').sparkline(myvalues, { type: 'bar', barColor: 'seagreen' });
    $('.inlinebarord').sparkline(myvalues, { type: 'bar', barColor: '#f68484' });
});

//var visitordata = [
//                    { y: '2009', a: 750, b: 250, c: 260 },
//                    { y: '2010', a: 500, b: 120, c: 150 },
//                    { y: '2011', a: 600, b: 40, c: 80 },
//                    { y: '2012', a: 650, b: 160, c: 300 },
//                    { y: '2013', a: 625, b: 40, c: 350 },
//                    { y: '2014', a: 725, b: 180, c: 210 },
//                    { y: '2015', a: 650, b: 100, c: 140 }
//                 ];

//Morris.Line({ // morris.js line chart
//    element: 'linechartuser',
//    data: visitordata,
//    hideHover: 'auto',
//    xkey: 'y',
//    ykeys: ['a', 'b', 'c'],
//    labels: ['View Count', 'Unique Views', 'User Count']
//});

//var browserdata = [
//                    { label: "Safari", value: 12 },
//                    { label: "Chrome", value: 40 },
//                    { label: "Firefox", value: 35 },
//                    { label: "IE", value: 5 },
//                    { label: "Others", value: 8 }
//                 ];

//Morris.Donut({ // morris.js donut chart
//    element: 'donutbrowser',
//    data: browserdata
//});

/* visitor statistics */
var jsonvwuscount = (function () {
    var visitdata = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata = data["visitvwcount"];
        }
    });

    return JSON.stringify(visitdata);
})
    ();

var jsonuscount = (function () {
    var visitdata2 = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata2 = data["visituscount"];
        }
    });

    return JSON.stringify(visitdata2);
})
    ();

var jsonunquscount = (function () {
    var visitdata = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata = data["visitunqcount"];
        }
    });

    return JSON.stringify(visitdata);
})
    ();

$(function () {
    $('#visitorstats').highcharts({
        title: {
            text: '2014 visitor stats',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Visitor'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'View count',
            data: $.parseJSON(jsonvwuscount)
        }, {
            name: 'User Count',
            data: $.parseJSON(jsonuscount)
        }, {
            name: 'Unique Views',
            data: $.parseJSON(jsonunquscount)
        }]
    });
});
/* visitor stats end */
