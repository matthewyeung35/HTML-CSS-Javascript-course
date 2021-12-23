document.addEventListener("DOMContentLoaded",
    function (event){

        document.querySelector(".navbar-toggler")
        .addEventListener("blur", function(){
            var screenWidth = window.innerWidth;
            if (screenWidth <992){
                ("#collapsable-nav").collapse("hide")
            };

        });

    });

(function(global){
var dc = {};

var homeHtml = "snippets/home-snippet.html";
var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

// for insreting innerHTMl for selects
var insertHtml = function (selector, html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};
// show loading inside element
var showLoading = function (selector){
    var html = "<div class= 'text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector,html);
};

// return {{name}} with name
var insertProperty = function (string, propName, propValue){
    var propToReplace = "{{" + propName + "}}";
    string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
    return string
}

document.addEventListener("DOMContentLoaded", function (event){
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText){
        document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
});

//load menu categories
dc.loadMenuCategories = function (){
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
        allCategoriesUrl,
        buildAndShowCategoriesHTML
    );
};

function buildAndShowCategoriesHTML(categories){
    $ajaxUtils.sendGetRequest(
        categoriesTitleHtml,
        function (categoriesTitleHtml){
            $ajaxUtils.sendGetRequest(
                categoryHtml,
                function(categoryHtml) {
                    var categoriesViewHtml =
                    buildCategoriesViewHtml(categories,
                        categoriesTitleHtml,
                        categoryHtml
                    );
                insertHtml("#main-content", categoriesViewHtml);
                },
                false);
        },
        false);
}

function buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml){
    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class = 'row'>";

    for (var i = 0; i<categories.length; i++){
        var html = categoryHtml.response;
        var name = "" + categories[i].name;
        var short_name = categories[i].short_name;
        html = insertProperty(html, "name", name);
        html = insertProperty(html,"short_name",short_name)
        finalHtml += html
    }
    finalHtml += "</section>";
    return finalHtml;
}

//for individual items

dc.loadMenuItems = function (categoryShort){
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
        menuItemsUrl + categoryShort,
        buildAndShowMenuItemsHTML
    );
};

function buildAndShowMenuItemsHTML(categoryMenuItems){
    $ajaxUtils.sendGetRequest(
        menuItemsTitleHtml,
        function (menuItemsTitleHtml){
            $ajaxUtils.sendGetRequest(
                menuItemHtml,
                function (menuItemHtml){
                    var menuItemsViewHtml = 
                    buildMenuItemsViewHtml(categoryMenuItems,
                        menuItemsTitleHtml,
                        menuItemHtml);
                    insertHtml("#main-context", menuItemsViewHtml)
                },
                false);
    },
    false);
}
    
function buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml){
    menuItemsTitleHtml = insertProperty(menuItemsTitleHtml,"name",categoryMenuItems.category.name);

    menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    //loop over categories
    var menuItems = categoryMenuItems.menu_items;
    var catShortName = categoryMenuItems.category.short_name;
    for (var i = 0; i < menuItems.length; i++){
        var html = menuItemHtml.response;
        html = insertProperty(html, "short_name", menuItems[i].short_name);
        html = insertProperty(html,"catShortName",catShortName);
        html = insertItemPrice(html,"price_small",menuItems[i].price_small);
        html = insertItemPortionName(html,"small_portion_name",menuItems[i].menuItems[i].small_portion_name);
        html = insertItemPrice(html,"price_large",menuItems[i].price_large);
        html = insertItemPortionName(html,"large_portion_name",menuItems[i].large_portion_name);
        html = insertProperty(html,"name",menuItems[i].name);
        html = insertProperty(html,"description",menuItems[i].description);
        /// add clear fix after every 2 item
        if (i % 2 != 0){
            html+="<div class='clearfix'></div>"
        }
        finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
}

function insertItemPrice(html,pricePropName,priceValue){
    if (!priceValue){
        return insertProperty(html, pricePropName, "");
    }
    priceValue = "$" + priceValue.toFixed(2);
    html = insertProperty(html,pricePropName,priceValue);
    return html;
}

function insertItemPortionName(html,portionPropName,portionValue){
    if(!portionValue){
        return insertProperty(html,portionPropName, "");
    }
    portionValue = "(" + portionValue + ")";
    html = insertProperty(html,portionPropName, portionValue);
    return html
}

global.$dc = dc;

})(window);



