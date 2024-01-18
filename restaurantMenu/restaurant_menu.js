const breakfastMenu = ['Pancakes - £12', 'Eggs Benedict - £11', 'Oatmeal - £15', 'Frittata - £16'];
const mainCourseMenu = ['Steak - £16', 'Pasta - £18', 'Burger - £13', 'Salmon - £20'];
const dessertMenu = ['Cake - £12', 'Ice Cream - £13', 'Pudding - £15', 'Fruit Salad - £12'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;