// ============================================================
//  ИНТЕРАКТИВНОЕ МЕНЮ КАФЕ — script.js
//  Структура файла:
//    1. Данные меню (добавляй блюда сюда)
//    2. Состояние приложения (корзина, активная категория)
//    3. Отрисовка категорий
//    4. Отрисовка карточек блюд
//    5. Работа с корзиной (добавить, удалить, изменить кол-во)
//    6. Обновление интерфейса корзины
//    7. Запуск приложения
// ============================================================


// ============================================================
// 1. ДАННЫЕ МЕНЮ
// Чтобы добавить блюдо — добавь объект в этот массив.
// Чтобы добавить категорию — добавь её в CATEGORIES ниже.
// ============================================================

// Список всех блюд.
// image — URL фото с Unsplash. Чтобы сменить фото — замени ссылку.
// emoji — используется только в корзине (маленькая иконка рядом с названием).
const menuItems = [
  // --- Горячие блюда ---
  // weight — граммовка (г для еды, мл для напитков и супов)
  { id: 1,  category: "hot",      emoji: "🥩", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&h=280", name: "Стейк из свинины",       weight: "250 г",  price: 450, description: "Сочный стейк с гарниром из запечённых овощей" },
  { id: 2,  category: "hot",      emoji: "🍗", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&h=280", name: "Куриная грудка гриль",   weight: "200 г",  price: 320, description: "С соусом из трав, лимоном и рисом" },
  { id: 3,  category: "hot",      emoji: "🍖", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&h=280", name: "Котлета по-домашнему",   weight: "300 г",  price: 280, description: "С картофельным пюре и грибным соусом" },

  // --- Супы ---
  { id: 4,  category: "soups",    emoji: "🍲", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&h=280", name: "Борщ",                   weight: "350 мл", price: 180, description: "Традиционный украинский, со сметаной и хлебом" },
  { id: 5,  category: "soups",    emoji: "🍄", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&h=280", name: "Грибной крем-суп",       weight: "300 мл", price: 220, description: "Из белых грибов со сливками и гренками" },
  { id: 6,  category: "soups",    emoji: "🍜", image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&h=280", name: "Куриная лапша",          weight: "350 мл", price: 160, description: "На домашнем бульоне с деревенской лапшой" },

  // --- Салаты ---
  { id: 7,  category: "salads",   emoji: "🥗", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=280", name: "Цезарь с курицей",       weight: "250 г",  price: 290, description: "Классический с пармезаном, соусом и крутонами" },
  { id: 8,  category: "salads",   emoji: "🫒", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=280", name: "Греческий",              weight: "220 г",  price: 250, description: "Оливки, фета, свежие овощи и оливковое масло" },
  { id: 9,  category: "salads",   emoji: "🥙", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&h=280", name: "Оливье",                 weight: "200 г",  price: 200, description: "По классическому советскому рецепту" },

  // --- Десерты ---
  { id: 10, category: "desserts", emoji: "🍰", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&h=280", name: "Тирамису",               weight: "150 г",  price: 280, description: "Итальянский десерт с маскарпоне и кофе" },
  { id: 11, category: "desserts", emoji: "🎂", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&h=280", name: "Чизкейк Нью-Йорк",      weight: "160 г",  price: 310, description: "Нежный сыр на песочной основе с ягодным соусом" },
  { id: 12, category: "desserts", emoji: "🥞", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=280", name: "Блинчики с вареньем",    weight: "200 г",  price: 190, description: "Тонкие блинчики с домашним клубничным вареньем" },

  // --- Напитки ---
  { id: 13, category: "drinks",   emoji: "☕", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&h=280", name: "Кофе американо",         weight: "200 мл", price: 120, description: "Крепкий, свежеобжаренный, без молока" },
  { id: 14, category: "drinks",   emoji: "🍵", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&h=280", name: "Чай чёрный",             weight: "300 мл", price: 90,  description: "С лимоном и мёдом по желанию" },
  { id: 15, category: "drinks",   emoji: "🍊", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&h=280", name: "Апельсиновый сок",       weight: "250 мл", price: 180, description: "Свежевыжатый, без сахара и консервантов" },
];

// Названия категорий для кнопок-фильтров.
// Ключ — совпадает с полем category в menuItems, значение — отображаемое имя.
const CATEGORIES = {
  all:      "Все",
  hot:      "Горячие блюда",
  soups:    "Супы",
  salads:   "Салаты",
  desserts: "Десерты",
  drinks:   "Напитки",
};


// ============================================================
// 2. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// Все данные, которые меняются в процессе работы
// ============================================================

// Корзина: массив объектов вида { id, name, price, emoji, quantity }
let cart = [];

// Процент чаевых (по умолчанию 10%)
let tipPercent = 10;

// Какая категория сейчас выбрана (ключ из CATEGORIES)
let activeCategory = "all";


// ============================================================
// 3. ОТРИСОВКА КАТЕГОРИЙ
// Создаём кнопки-фильтры и вешаем на них обработчики кликов
// ============================================================

function renderCategories() {
  const nav = document.getElementById("categories-nav");

  // Для каждого ключа в CATEGORIES создаём кнопку
  Object.keys(CATEGORIES).forEach(function (key) {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (key === activeCategory ? " active" : "");
    btn.textContent = CATEGORIES[key];

    btn.addEventListener("click", function () {
      activeCategory = key;

      // Убираем класс active со ВСЕХ кнопок, потом ставим на нажатую
      document.querySelectorAll(".category-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      renderDishes(); // Перерисовываем карточки по новому фильтру
    });

    nav.appendChild(btn);
  });
}


// ============================================================
// 4. ОТРИСОВКА КАРТОЧЕК БЛЮД
// Фильтруем menuItems по категории и строим HTML карточек
// ============================================================

function renderDishes() {
  const grid = document.getElementById("dishes-grid");
  grid.innerHTML = ""; // Очищаем сетку перед новой отрисовкой

  // Если выбрано "Все" — берём все блюда, иначе фильтруем
  const visible = activeCategory === "all"
    ? menuItems
    : menuItems.filter(function (item) { return item.category === activeCategory; });

  visible.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "dish-card";

    // Ищем блюдо в корзине, чтобы понять, что показать:
    // если блюда нет — кнопку «В корзину»
    // если есть — счётчик «−  2  +»
    const inCart = cart.find(function (c) { return c.id === item.id; });

    // Нижняя часть карточки зависит от того, есть ли товар в корзине
    const footerHTML = inCart
      ? `<div class="quantity-control">
           <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
           <span class="qty-value">${inCart.quantity}</span>
           <button class="qty-btn" onclick="changeQuantity(${item.id}, +1)">+</button>
         </div>`
      : `<button class="add-btn" onclick="addToCart(${item.id})">В корзину</button>`;

    card.innerHTML = `
      <img class="dish-image" src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="dish-info">
        <h3 class="dish-name">${item.name}</h3>
        <span class="dish-weight">${item.weight}</span>
        <p class="dish-desc">${item.description}</p>
        <div class="dish-footer">
          <span class="dish-price">${item.price} ₽</span>
          ${footerHTML}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}


// ============================================================
// 5. РАБОТА С КОРЗИНОЙ
// Функции: добавить, изменить количество, удалить
// ============================================================

// Добавить блюдо в корзину (вызывается из карточки блюда)
function addToCart(id) {
  const item = menuItems.find(function (m) { return m.id === id; });
  if (!item) return; // Защита: если блюдо не найдено — выходим

  const existing = cart.find(function (c) { return c.id === id; });

  if (existing) {
    // Блюдо уже в корзине — увеличиваем количество
    existing.quantity += 1;
  } else {
    // Новое блюдо — добавляем в корзину с количеством 1
    // Оператор {...item} копирует все поля объекта item
    cart.push(Object.assign({}, item, { quantity: 1 }));
  }

  updateCartUI();
  renderDishes(); // Перерисовываем карточки — кнопка сменится на счётчик
}

// Изменить количество товара: delta = +1 (добавить) или -1 (убрать)
function changeQuantity(id, delta) {
  const item = cart.find(function (c) { return c.id === id; });
  if (!item) return;

  item.quantity += delta;

  // Если количество стало 0 или меньше — удаляем товар из корзины
  if (item.quantity <= 0) {
    removeFromCart(id);
    return; // Выходим, иначе updateCartUI вызовется дважды
  }

  updateCartUI();
  renderDishes();
}

// Полностью убрать блюдо из корзины (кнопка ✕ в панели корзины)
function removeFromCart(id) {
  // filter возвращает новый массив БЕЗ элемента с этим id
  cart = cart.filter(function (c) { return c.id !== id; });

  updateCartUI();
  renderDishes(); // Счётчик на карточке снова сменится на кнопку «В корзину»
}


// ============================================================
// 6. ОБНОВЛЕНИЕ ИНТЕРФЕЙСА КОРЗИНЫ
// Пересчитываем сумму, обновляем бейдж и содержимое панели
// ============================================================

function updateCartUI() {
  // Подсчёт: сколько единиц товара в корзине (для бейджа)
  const totalCount = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  // Подсчёт: сумма без чаевых
  const subtotal = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  // Подсчёт: сумма чаевых
  const tipsAmount = Math.round(subtotal * (tipPercent / 100));

  // Итоговая сумма
  const totalPrice = subtotal + tipsAmount;

  // Обновляем бейдж на кнопке корзины
  const badge = document.getElementById("cart-count");
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? "flex" : "none";

  // Обновляем цены в панели корзины
  const subtotalEl = document.getElementById("cart-subtotal-price");
  if (subtotalEl) subtotalEl.textContent = subtotal;

  const tipsEl = document.getElementById("cart-tips-amount");
  if (tipsEl) tipsEl.textContent = tipsAmount;

  document.getElementById("cart-total-price").textContent = totalPrice;

  // Показываем/скрываем блок чаевых
  const tipsContainer = document.getElementById("cart-tips-container");
  if (tipsContainer) {
    tipsContainer.style.display = cart.length > 0 ? "block" : "none";
  }

  // Перерисовываем список товаров в панели
  renderCartPanel();
}

// Отрисовка содержимого панели корзины (список товаров)
function renderCartPanel() {
  const list = document.getElementById("cart-items-list");

  if (cart.length === 0) {
    list.innerHTML = '<p class="cart-empty">Корзина пуста.<br>Добавьте блюда из меню!</p>';
    return;
  }

  // Строим HTML для каждого товара в корзине
  list.innerHTML = cart.map(function (item) {
    return `
      <div class="cart-item">
        <span class="cart-item-emoji">${item.emoji}</span>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${item.price} ₽ × ${item.quantity} = ${item.price * item.quantity} ₽</span>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Удалить">✕</button>
      </div>
    `;
  }).join(""); // join("") соединяет массив строк в одну без разделителей
}


// ============================================================
// 7. ЗАПУСК ПРИЛОЖЕНИЯ
// Вешаем обработчики на кнопки шапки и запускаем отрисовку
// ============================================================

// Открыть / закрыть панель корзины
document.getElementById("cart-btn").addEventListener("click", function () {
  document.getElementById("cart-modal").classList.add("open");
});

document.getElementById("close-cart-btn").addEventListener("click", function () {
  document.getElementById("cart-modal").classList.remove("open");
});

// Закрыть по клику на затемнённый фон (вне панели)
document.getElementById("cart-modal").addEventListener("click", function (e) {
  // e.target — элемент, по которому кликнули
  // this — сам overlay (фон)
  // Закрываем только если кликнули по фону, а не по панели
  if (e.target === this) {
    this.classList.remove("open");
  }
});

// Кнопка «Оформить заказ»
document.getElementById("order-btn").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Добавьте хотя бы одно блюдо в корзину!");
    return;
  }

  const subtotal = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  const tips = Math.round(subtotal * (tipPercent / 100));
  const total = subtotal + tips;

  let message = "Заказ оформлен! 🎉\n";
  message += "Сумма блюд: " + subtotal + " ₽\n";
  if (tips > 0) {
    message += "Чаевые (" + tipPercent + "%): " + tips + " ₽\n";
  }
  message += "ИТОГО: " + total + " ₽\n\n";
  message += "Спасибо, что выбрали нас!";

  alert(message);

  // Очищаем корзину после заказа
  cart = [];
  tipPercent = 10; // Сбрасываем чаевые на дефолт
  updateTipsButtons();
  updateCartUI();
  renderDishes();
  document.getElementById("cart-modal").classList.remove("open");
});

// Обработка выбора чаевых
function initTips() {
  const tipButtons = document.querySelectorAll(".tip-btn");
  tipButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      tipPercent = parseInt(this.dataset.percent);
      updateTipsButtons();
      updateCartUI();
    });
  });
  updateTipsButtons();
}

function updateTipsButtons() {
  const tipButtons = document.querySelectorAll(".tip-btn");
  tipButtons.forEach(btn => {
    if (parseInt(btn.dataset.percent) === tipPercent) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// --- Запускаем начальную отрисовку страницы ---
renderCategories();
renderDishes();
initTips();
