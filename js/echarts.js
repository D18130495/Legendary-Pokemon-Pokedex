var abilityForLine = [
    {
        name: 'Mewtwo',
        type: 'line',
        data: [106, 110, 90, 154, 90, 130]
    },
    {
        name: 'Lugia',
        type: 'line',
        data: [106, 90, 130, 90, 154, 110]
    },
    {
        name: 'Kyogre',
        type: 'line',
        data: [100, 100, 90, 150, 140, 90]
    },
    {
        name: 'Giratina',
        type: 'line',
        data: [150, 100, 120, 100, 120, 90]
    },
    {
        name: 'Zekrom',
        type: 'line',
        data: [100, 150, 120, 120, 100, 90]
    },
    {
        name: 'Zygarde',
        type: 'line',
        data: [54, 100, 71, 61, 85, 115]
    },
    {
        name: 'Solgaleo',
        type: 'line',
        data: [137, 137, 107, 112, 89, 97]
    },
    {
        name: 'Eternatus',
        type: 'line',
        data: [140, 85, 95, 145, 95, 130]
    }
]

var pokemonLineTag = []

window.onload = function() {
    for (var i = 0; i < abilityForLine.length; i++) {
        pokemonLineTag[i] = abilityForLine[i].name
    }

    // Initialize the echarts instance based on the prepared dom
    var abilityLine = echarts.init(document.getElementById('line'));

    // Specify the configuration items and data for the chart
    var lineOption = {
        title: {
            // text: 'Pokémon Ability Line Chart'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: pokemonLineTag
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Hp', 'Atk', 'Def', 'SpA', 'SpD', 'Spe']
        },
        yAxis: {
            type: 'value'
        },
        series: abilityForLine
    };

    // Display the chart using the configuration items and data just specified.
    abilityLine.setOption(lineOption);

    window.onresize = function() {
        abilityLine.resize();
    };
}







// var ability = [
//     {
//         value: [106, 110, 90, 154, 90, 130],
//         name: 'Mewtwo'
//     },
//     {
//         value: [16, 110, 90, 154, 90, 130],
//         name: '123'
//     }
// ]
//
// var pokemonName = []
//
// window.onload = function() {
//     for(var i = 0; i < ability.length; i++){
//         pokemonName[i] = ability[i].name
//     }
//
//     // Radar Chart
//     var abilityRadar = echarts.init(document.getElementById('radar'));
//
//     var radarOption = {
//         title: {
//             text: 'Pokémon Ability Radar Chart'
//         },
//         legend: {
//             data: pokemonName
//         },
//         radar: {
//             indicator: [
//                 { name: 'Hp', max: 200 },
//                 { name: 'Atk', max: 200 },
//                 { name: 'Def', max: 200 },
//                 { name: 'Spe', max: 200 },
//                 { name: 'SpD', max: 200 },
//                 { name: 'SpA', max: 200 }
//             ]
//         },
//         series: [
//             {
//                 name: 'Budget vs spending',
//                 type: 'radar',
//                 data: ability,
//                 label: {
//                     show: true,
//                     formatter: function (params) {
//                         return params.value;
//                     }
//                 }
//             }
//         ]
//     };
//
//     abilityRadar.setOption(radarOption);
// }


