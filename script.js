import foods from './recipeData.js';

const recipeBtn = document.getElementById("recipeBtn");
const slotBtn = document.getElementById("slotBtn");
const recipeModal = document.getElementById("recipeModal");
const slotModal = document.getElementById("slotModal");
const closeBtn = document.getElementsByClassName("close");
const foodName = document.getElementById("foodName");
const recipe = document.getElementById("recipe");
const foodImages = document.getElementById("foodImages");
const modalSearchBtn = document.getElementById("modalSearchBtn");
const searchInput = document.getElementById('searchInput');
const errorMessage = document.getElementById('errorMessage');
const backButton = document.getElementById('backButton');

// 카테고리 버튼 생성 및 이벤트 처리
function createCategoryButtons() {
    const categories = ['한식', '양식', '중식', '일식'];
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category-container';
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'category-btn';
        button.addEventListener('click', () => filterByCategory(category));
        categoryContainer.appendChild(button);
    });

    // 검색 컨테이너 다음에 카테고리 버튼들을 삽입
    const searchContainer = document.querySelector('.search-container');
    searchContainer.parentNode.insertBefore(categoryContainer, searchContainer.nextSibling);
}

// 카테고리별 필터링 함수
function filterByCategory(category) {
    // 모든 카테고리 버튼의 스타일 초기화
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // 선택된 카테고리 버튼 스타일 적용
    event.target.classList.add('active');
    
    // 이미지 컨테이너 비우기
    foodImages.innerHTML = '';
    
    // 선택된 카테고리의 음식들만 필터링하여 표시
    const filteredFoods = foods.filter(food => food.category === category);
    
    filteredFoods.forEach(food => {
        const img = document.createElement('img');
        img.src = food.image;
        img.alt = food.name;
        
        img.addEventListener('click', () => {
            displayFood(food);
            closeModal(recipeModal);
        });
        
        foodImages.appendChild(img);
    });
}

function openModal(modal) {
    modal.style.display = 'block';
    if (modal === recipeModal && !document.querySelector('.category-container')) {
        createCategoryButtons();
    }
}

// 나머지 기존 코드는 동일하게 유지
function closeModal(modal) {
    modal.style.display = 'none';
}

recipeBtn.addEventListener('click', () => openModal(recipeModal));
slotBtn.addEventListener('click', () => openModal(slotModal));

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchFood();
    }
});

Array.from(closeBtn).forEach(btn => {
    btn.addEventListener('click', () => {
        closeModal(recipeModal);
        closeModal(slotModal);
    });
});

function searchFood() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const foundFood = foods.find(food => food.name.toLowerCase() === searchTerm);

    if (foundFood) {
        displayFood(foundFood);
        closeModal(recipeModal);
    } else {
        errorMessage.textContent = '음식을 찾을 수 없습니다.';
    }
}

modalSearchBtn.addEventListener('click', searchFood);

function displayFood(food) {
    foodName.textContent = food.name;
    backButton.style.display = 'block';
    
    // 레시피 표시 HTML 구성
    const recipeHTML = `
        <div class="recipe-section">
            <h3>🥘 재료</h3>
            <ul>
                ${food.recipe.ingredients ? 
                    food.recipe.ingredients.map(item => `<li>${item}</li>`).join('') :
                    '<li>등록된 재료가 없습니다.</li>'}
            </ul>
            
            <h3>🔪 준비하기</h3>
            <ul>
                ${food.recipe.preparation ?
                    food.recipe.preparation.map(step => `<li>${step}</li>`).join('') :
                    '<li>등록된 준비 과정이 없습니다.</li>'}
            </ul>
            
            <h3>👩‍🍳 조리하기</h3>
            <ul>
                ${food.recipe.cooking ?
                    food.recipe.cooking.map((step, index) => `<li>${index + 1}. ${step}</li>`).join('') :
                    '<li>등록된 조리 과정이 없습니다.</li>'}
            </ul>
        </div>
    `;
    
    recipe.innerHTML = recipeHTML;
}

backButton.addEventListener('click', () => {
    // 레시피 내용 초기화
    foodName.textContent = '';
    recipe.innerHTML = '';
    backButton.style.display = 'none'; // 뒤로가기 버튼 숨기기
});

// 초기 상태에서는 뒤로가기 버튼 숨기기
backButton.style.display = 'none';