import item1 from 'static/item1.jpg'
import item2 from 'static/item2.jpg'
import item3 from 'static/item3.jpg'
import item4 from 'static/item4.jpg'

const mockProducts = [
  {
    productId: 0,
    productName: '로로 2016 SS',
    productPrice: '114,000',
    productShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto commodi enim a animi quibusdam necessitatibus sequi repellat laborum modi?',
    productPictures: [item1, item3, item2],
    productAmount: 1,
    productOptions: ['빨강', '파랑', '녹색'],
    productFullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    productReviews: [],
    productRelated: [
      {
        productId: 1,
        productName: '민트 뿔테',
        productPrice: '134,000',
        productPictures: [item2],
      },
      {
        productId: 2,
        productName: '블랙 블랙',
        productPrice: '184,000',
        productPictures: [item3],
      },
    ],
  },
  {
    productId: 1,
    productName: '민트 뿔테',
    productPrice: '134,000',
    productShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto commodi enim a animi quibusdam necessitatibus sequi repellat laborum modi?',
    productPictures: [item2, item3, item1],
    productAmount: 1,
    productOptions: ['빨강', '파랑', '녹색'],
    productFullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    productReviews: [],
    productRelated: [],
  },
  {
    productId: 2,
    productName: '블랙 블랙',
    productPrice: '184,000',
    productShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto commodi enim a animi quibusdam necessitatibus sequi repellat laborum modi?',
    productPictures: [item3, item2, item4],
    productAmount: 1,
    productOptions: ['빨강', '파랑', '녹색'],
    productFullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    productReviews: [],
    productRelated: [],
  },
  {
    productId: 3,
    productName: '노랭이',
    productPrice: '94,000',
    productShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto commodi enim a animi quibusdam necessitatibus sequi repellat laborum modi?',
    productPictures: [item4, item2, item1],
    productAmount: 1,
    productOptions: ['빨강', '파랑', '녹색'],
    productFullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    productReviews: [],
    productRelated: [],
  },
]

export default mockProducts
