async function fetchBikes() {
    const response = await fetch('bikes.json');
    const bikes = await response.json();
    displayBikes(bikes);

    const searchBar = document.getElementById('search-bar');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const wheelSize = document.getElementById('wheel-size');
    const availability = document.getElementById('availability');
    const category = document.getElementById('category');

    searchBar.addEventListener('input', () => filterBikes(bikes));
    minPriceInput.addEventListener('input', () => filterBikes(bikes));
    maxPriceInput.addEventListener('input', () => filterBikes(bikes));
    wheelSize.addEventListener('change', () => filterBikes(bikes));
    availability.addEventListener('change', () => filterBikes(bikes));
    category.addEventListener('change', () => filterBikes(bikes));
}

function filterBikes(bikes) {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || 5000;
    const selectedSize = document.getElementById('wheel-size').value;
    const selectedAvailability = document.getElementById('availability').value;
    const selectedCategory = document.getElementById('category').value;

    const filteredBikes = bikes.filter(bike => {
        const matchesSearch = bike.name.toLowerCase().includes(searchTerm) || bike.category.toLowerCase().includes(searchTerm);
        const matchesPrice = bike.price >= minPrice && bike.price <= maxPrice;
        const matchesSize = selectedSize === "" || bike.wheel_size === selectedSize;
        const matchesAvailability = selectedAvailability === "" || bike.available_in_store.toString() === selectedAvailability;
        const matchesCategory = selectedCategory === "" || bike.category === selectedCategory;

        return matchesSearch && matchesPrice && matchesSize && matchesAvailability && matchesCategory;
    });

    displayBikes(filteredBikes);
}

function displayBikes(bikes) {
    const bikeList = document.getElementById('bike-list');
    bikeList.innerHTML = '';

    if (bikes.length === 0) {
        bikeList.innerHTML = '<p>No bikes found.</p>';
        return;
    }

    bikes.forEach(bike => {
        const bikeItem = document.createElement('div');
        bikeItem.classList.add('bike-item');
        bikeItem.innerHTML = `
            <h2>${bike.name}</h2>
            <p><strong>Category:</strong> ${bike.category}</p>
            <p><strong>Price:</strong> $${bike.price}</p>
            <p><strong>Wheel Size:</strong> ${bike.wheel_size}</p>
            <p><strong>Available:</strong> ${bike.available_in_store ? 'Yes' : 'No'}</p>
            <p><strong>Stock:</strong> ${bike.stock}</p>
        `;
        bikeList.appendChild(bikeItem);
    });
}

fetchBikes();