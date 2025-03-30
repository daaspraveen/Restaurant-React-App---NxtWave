import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// const apidata = [
//   {
//     restaurant_id: '1010000001',
//     restaurant_name: 'UNI Resto Cafe',
//     restaurant_image: 'https://i.imgur.com/gLlF09p.jpg',
//     table_id: '1',
//     table_name: 'Riyadh-Table 01',
//     branch_name: 'UNI Resto Cafe-Riyadh',
//     nexturl:
//       'http://snapittapp.snapitt.net/api/menu/10/?org=1010000001&branch_id=1000000001&limit=10&offset=20&lang=en',
//     table_menu_list: [
//       {
//         menu_category: 'Salads and Soup',
//         menu_category_id: '11',
//         menu_category_image:
//           'http://restaurants.unicomerp.net/images/Restaurant/Item/ItemGroup_11.jpg',
//         nexturl:
//           'http://snapittapp.snapitt.net/api/menu/20/?org=1010000001&branch_id=1000000001&menuCat=11&limit=10&offset=20&lang=en',
//         category_dishes: [
//           {
//             dish_id: '100000001',
//             dish_name: 'Spinach Salad',
//             dish_price: 7.95,
//             dish_image: 'https://i.imgur.com/PoJfqsD.jpg',
//             dish_currency: 'SAR',
//             dish_calories: 15,
//             dish_description:
//               'Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette',
//             dish_Availability: true,
//             dish_Type: 2,
//             nexturl:
//               'http://snapittapp.snapitt.net/api/menu/30/?org=1010000001&branch_id=1000000001&menuItem=100000001&limit=10&offset=20&lang=en',
//             addonCat: [
//               {
//                 addon_category: 'Spicy/Non-Spicy',
//                 addon_category_id: '104',
//                 addon_selection: 0,
//                 nexturl:
//                   'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000001&menuAddonCat=104&menuAddonselc=0&limit=10&offset=20&lang=en',
//                 addons: [
//                   {
//                     dish_id: '100000032',
//                     dish_name: 'Non Spicy',
//                     dish_price: 25,
//                     dish_image:
//                       'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000025.jpg',
//                     dish_currency: 'SAR',
//                     dish_calories: 15,
//                     dish_description: 'Non Spicy',
//                     dish_Availability: true,
//                     dish_Type: 1,
//                   },
//                 ],
//               },
//               {
//                 addon_category: 'Add On',
//                 addon_category_id: '101',
//                 addon_selection: 1,
//                 nexturl:
//                   'http://snapittapp.snapitt.net/api/menu/40/?org=1010000001&branch_id=1000000001&menuItem=100000001&menuAddonCat=101&menuAddonselc=1&limit=10&offset=20&lang=en',
//                 addons: [
//                   {
//                     dish_id: '100000020',
//                     dish_name: 'fried onions',
//                     dish_price: 15,
//                     dish_image:
//                       'http://restaurants.unicomerp.net/images/Restaurant/Item/Item_100000020.jpg',
//                     dish_currency: 'SAR',
//                     dish_calories: 10,
//                     dish_description: 'fried onions',
//                     dish_Availability: true,
//                     dish_Type: 2,
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]
