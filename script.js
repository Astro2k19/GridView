const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany',
        site:'https://islandtrading.bm/'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico',
        site:'https://islandtrading.bm/'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
        site:'https://islandtrading.bm/'
    },
    {
        company: '<b>Island Trading</b>',
        chef: 'Helen Bennett',
        country: 'UK',
        site:'https://islandtrading.bm/'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
        site:'https://islandtrading.bm/'
    }
];

const data = {

    header: 'Header number one',
    headerClass:['header', 'site-header'],
    tableClass: ['table', 'talbe-one'],
    element:'body',
    attribute: {
        'company': {
            'label': 'Компания',
            'src': 'html',
            'link': true,
    
        },
        'chef': {
            'label': 'Директор',
        },
        'country': {
            'label': 'Страна',
            'check': (data) => {
                if (data['country'] === 'Germany') {
                    return data['country'] + ' map'
                }
                return data['country'];
            }
        }
    },
    information: dataExample,
}

let gridView = new GridView();

gridView.render(data);

console.log(gridView)