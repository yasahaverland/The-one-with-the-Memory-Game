const cardArray = [
    {
        name: 'monica',
        img: 'img/Frame 1.png'
    },
    {
        name:'chandler',
        img:'img/Frame 2.png'
    },
    {
        name:'rachel',
        img:'img/Frame 3.png'
    },
    {
        name:'joey',
        img:'img/Frame 4.png'
    },
    {
        name:'phoebe',
        img:'img/Frame 6.png'
    },
    {
        name:'ross',
        img:'img/Slice 3.png'
    },
    {
        name:'janice',
        img:'img/Slice 2.png'
    },
    {
        name: 'monica',
        img: 'img/Frame 1.png'
    },
    {
        name:'chandler',
        img:'img/Frame 2.png'
    },
    {
        name:'rachel',
        img:'img/Frame 3.png'
    },
    {
        name:'joey',
        img:'img/Frame 4.png'
    },
    {
        name:'phoebe',
        img:'img/Frame 6.png'
    },
    {
        name:'ross',
        img:'img/Slice 3.png'
    },
    {
        name:'janice',
        img:'img/Slice 2.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
 
const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/backcard.png')
        card.setAttribute('data-id', i)
        gridDisplay.append(card)
        console.log(card, i)
    }
}
createBoard()