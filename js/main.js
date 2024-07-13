import { en } from "./en.js";
import { fr } from "./fr.js";
import { ua } from "./ua.js";
import { refs } from "./refs.js";

const {
  btn: { btn_ua, btn_en, btn_fr },
  elements: {
    banner_info,
    button_info_1,
    button_info_2,
    best_food_text,
    best_food_descr_text,
    best_food_discover,
    bites,
    years,
    dish_type,
    cheese,
    fries,
    noodles,
    prawns,
    rides,
    list_rest,
    list_city,
    list_brand,
    list_more,
    menu_list_1,
    menu_list_2,
    menu_list_3,
  },
} = refs;

function changeLanguage(lang) {
  banner_info.textContent = lang.banner_info;
  button_info_1.textContent = lang.button_info_1;
  button_info_2.textContent = lang.button_info_2;
  best_food_text.textContent = lang.best_food_text;
  best_food_descr_text.textContent = lang.best_food_descr_text;
  best_food_discover.textContent = lang.best_food_discover;
  bites.textContent = lang.bites;
  years.textContent = lang.years;
  cheese.textContent = lang.cheese;
  fries.textContent = lang.fries;
  noodles.textContent = lang.noodles;
  prawns.textContent = lang.prawns;
  rides.textContent = lang.rides;
  list_rest.textContent = lang.list_rest;
  list_city.textContent = lang.list_city;
  list_brand.textContent = lang.list_brand;
  list_more.textContent = lang.list_more;
  menu_list_1.textContent = lang.menu_list_1;
  menu_list_2.textContent = lang.menu_list_2;
  menu_list_3.textContent = lang.menu_list_3;
}

const button = { btn_en, btn_ua, btn_fr };
const languages = { en, fr, ua };

Object.keys(refs.btn).forEach((key) => {
  button[key].addEventListener("click", (e) => {
    const langCode = key.split("_")[1];
    changeLanguage(languages[langCode]);

    Object.keys(button).forEach((btnKey) => {
      button[btnKey].classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
