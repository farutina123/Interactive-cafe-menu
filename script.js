// ============================================================
//  ИНТЕРАКТИВНОЕ МЕНЮ КАФЕ — script.js
//  1. Данные меню
//  2. Состояние приложения
//  3. Отрисовка категорий
//  4. Отрисовка карточек блюд
//  5. Корзина (добавить / изменить количество / удалить)
//  6. Обновление интерфейса корзины
//  7. Запуск
// ============================================================


// ============================================================
// 1. ДАННЫЕ МЕНЮ
// Чтобы добавить блюдо — добавь объект в menuItems.
// Чтобы добавить категорию — добавь её в CATEGORIES.
// image — URL фото (Unsplash). emoji — иконка в корзине.
// ============================================================

const menuItems = [
  { id: 1,  category: "hot",      emoji: "🥩", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&h=280", name: "Стейк из свинины",       weight: "250 г",  price: 450, description: "Сочный стейк с гарниром из запечённых овощей" },
  { id: 2,  category: "hot",      emoji: "🍗", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&h=280", name: "Куриная грудка гриль",   weight: "200 г",  price: 320, description: "С соусом из трав, лимоном и рисом" },
  { id: 3,  category: "hot",      emoji: "🍖", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&h=280", name: "Котлета по-домашнему",   weight: "300 г",  price: 280, description: "С картофельным пюре и грибным соусом" },
  { id: 4,  category: "soups",    emoji: "🍲", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&h=280", name: "Борщ",                   weight: "350 мл", price: 180, description: "Традиционный украинский, со сметаной и хлебом" },
  { id: 5,  category: "soups",    emoji: "🍄", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&h=280", name: "Грибной крем-суп",       weight: "300 мл", price: 220, description: "Из белых грибов со сливками и гренками" },
  { id: 6,  category: "soups",    emoji: "🍜", image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&h=280", name: "Куриная лапша",          weight: "350 мл", price: 160, description: "На домашнем бульоне с деревенской лапшой" },
  { id: 7,  category: "salads",   emoji: "🥗", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=280", name: "Цезарь с курицей",       weight: "250 г",  price: 290, description: "Классический с пармезаном, соусом и крутонами" },
  { id: 8,  category: "salads",   emoji: "🫒", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=280", name: "Греческий",              weight: "220 г",  price: 250, description: "Оливки, фета, свежие овощи и оливковое масло" },
  { id: 9,  category: "salads",   emoji: "🥙", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&h=280", name: "Оливье",                 weight: "200 г",  price: 200, description: "По классическому советскому рецепту" },
  { id: 10, category: "desserts", emoji: "🍰", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&h=280", name: "Тирамису",               weight: "150 г",  price: 280, description: "Итальянский десерт с маскарпоне и кофе" },
  { id: 11, category: "desserts", emoji: "🎂", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&h=280", name: "Чизкейк Нью-Йорк",      weight: "160 г",  price: 310, description: "Нежный сыр на песочной основе с ягодным соусом" },
  { id: 12, category: "desserts", emoji: "🥞", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=280", name: "Блинчики с вареньем",    weight: "200 г",  price: 190, description: "Тонкие блинчики с домашним клубничным вареньем" },
  { id: 13, category: "drinks",   emoji: "☕", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&h=280", name: "Кофе американо",         weight: "200 мл", price: 120, description: "Крепкий, свежеобжаренный, без молока" },
  { id: 14, category: "drinks",   emoji: "🍵", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&h=280", name: "Чай чёрный",             weight: "300 мл", price: 90,  description: "С лимоном и мёдом по желанию" },
  { id: 15, category: "drinks",   emoji: "🍊", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&h=280", name: "Апельсиновый сок",       weight: "250 мл", price: 180, description: "Свежевыжатый, без сахара и консервантов" },
];

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
// ============================================================

let cart = [];
let tipPercent = 10;
let activeCategory = "all";


// ============================================================
// 3. ОТРИСОВКА КАТЕГОРИЙ
// ============================================================

function renderCategories() {
  const nav = document.getElementById("categories-nav");

  Object.keys(CATEGORIES).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (key === activeCategory ? " active" : "");
    btn.textContent = CATEGORIES[key];

    btn.addEventListener("click", () => {
      activeCategory = key;
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDishes();
    });

    nav.appendChild(btn);
  });
}


// ============================================================
// 4. ОТРИСОВКА КАРТОЧЕК БЛЮД
// ============================================================

// Возвращает HTML нижней части карточки: счётчик или кнопку «В корзину»
function getCardFooterHTML(item, inCart) {
  if (inCart) {
    return `
      <div class="quantity-control">
        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
        <span class="qty-value">${inCart.quantity}</span>
        <button class="qty-btn" onclick="changeQuantity(${item.id}, +1)">+</button>
      </div>`;
  }
  return `<button class="add-btn" onclick="addToCart(${item.id})">В корзину</button>`;
}

function renderDishes() {
  const grid = document.getElementById("dishes-grid");
  grid.innerHTML = "";

  const visible = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  visible.forEach(item => {
    const inCart = cart.find(c => c.id === item.id);
    const card = document.createElement("div");
    card.className = "dish-card";
    card.innerHTML = `
      <img class="dish-image" src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="dish-info">
        <h3 class="dish-name">${item.name}</h3>
        <span class="dish-weight">${item.weight}</span>
        <p class="dish-desc">${item.description}</p>
        <div class="dish-footer">
          <span class="dish-price">${item.price} ₽</span>
          ${getCardFooterHTML(item, inCart)}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


// ============================================================
// 5. КОРЗИНА
// addToCart и changeQuantity должны оставаться глобальными —
// они вызываются напрямую из onclick-атрибутов в HTML.
// ============================================================

function addToCart(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  renderDishes();
}

function changeQuantity(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  updateCartUI();
  renderDishes();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  renderDishes();
}


// ============================================================
// 6. ОБНОВЛЕНИЕ ИНТЕРФЕЙСА КОРЗИНЫ
// ============================================================

// Подсчёт суммы заказа — используется и в updateCartUI, и при оформлении
function calcTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tipsAmount = Math.round(subtotal * (tipPercent / 100));
  return { subtotal, tipsAmount, total: subtotal + tipsAmount };
}

// Возвращает HTML одной строки в панели корзины
function getCartItemHTML(item) {
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
}

function renderCartPanel() {
  const list = document.getElementById("cart-items-list");
  if (cart.length === 0) {
    list.innerHTML = '<p class="cart-empty">Корзина пуста.<br>Добавьте блюда из меню!</p>';
    return;
  }
  list.innerHTML = cart.map(getCartItemHTML).join("");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { subtotal, tipsAmount, total } = calcTotals();

  const badge = document.getElementById("cart-count");
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? "flex" : "none";

  const subtotalEl = document.getElementById("cart-subtotal-price");
  if (subtotalEl) subtotalEl.textContent = subtotal;

  const tipsEl = document.getElementById("cart-tips-amount");
  if (tipsEl) tipsEl.textContent = tipsAmount;

  document.getElementById("cart-total-price").textContent = total;

  const tipsContainer = document.getElementById("cart-tips-container");
  if (tipsContainer) {
    tipsContainer.style.display = cart.length > 0 ? "block" : "none";
  }

  renderCartPanel();
}

function updateTipsButtons() {
  document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.percent) === tipPercent);
  });
}

function initTips() {
  document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      tipPercent = parseInt(this.dataset.percent);
      updateTipsButtons();
      updateCartUI();
    });
  });
  updateTipsButtons();
}


// ============================================================
// 7. ЗАПУСК
// ============================================================

function initEventListeners() {
  const modal = document.getElementById("cart-modal");

  document.getElementById("cart-btn").addEventListener("click", () => {
    modal.classList.add("open");
  });

  document.getElementById("close-cart-btn").addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // Закрыть по клику на затемнённый фон (вне панели)
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("open");
  });

  document.getElementById("order-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Добавьте хотя бы одно блюдо в корзину!");
      return;
    }

    const { subtotal, tipsAmount, total } = calcTotals();

    let message = "Заказ оформлен! 🎉\n";
    message += "Сумма блюд: " + subtotal + " ₽\n";
    if (tipsAmount > 0) {
      message += "Чаевые (" + tipPercent + "%): " + tipsAmount + " ₽\n";
    }
    message += "ИТОГО: " + total + " ₽\n\n";
    message += "Спасибо, что выбрали нас!";

    alert(message);

    cart = [];
    tipPercent = 10;
    updateTipsButtons();
    updateCartUI();
    renderDishes();
    modal.classList.remove("open");
  });
}

renderCategories();
renderDishes();
initTips();
initEventListeners();
