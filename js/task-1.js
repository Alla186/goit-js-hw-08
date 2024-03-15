const categoriesList = document.querySelectorAll('ul#categories li.item');

console.log(`Numbers of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle} - Elements: ${categoryItems}`);
});