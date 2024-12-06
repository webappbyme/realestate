// Static property data (hardcoded)
const properties = [
    {
        title: 'Luxury Apartment',
        location: 'New York',
        price: 3000000,
        type: 'Apartment',
        description: 'A luxurious apartment in downtown New York.',
        image_url: 'ny.jpg'
    },
    {
        title: 'Cozy Cottage',
        location: 'Boston',
        price: 150000,
        type: 'Cottage',
        description: 'A cozy cottage in the countryside.',
        image_url: 'boston.jpg'
    },
    {
        title: 'Modern House',
        location: 'Los Angeles',
        price: 1200000,
        type: 'House',
        description: 'A beautiful modern house with a sea view.',
        image_url: 'la.jpg'
    }
];

// Function to display properties
function displayProperties(filteredProperties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';  // Clear the current property list

    filteredProperties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <img src="${property.image_url}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p>$${property.price}</p>
            <p>${property.type}</p>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(propertyDiv);
    });
}

// Event listener for the filter form
document.getElementById('filter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const maxPrice = document.getElementById('price-range').value;
    const location = document.getElementById('location-filter').value;
    const type = document.getElementById('type-filter').value;

    // Filter properties based on the selected filters
    const filteredProperties = properties.filter(property => {
        const matchesPrice = property.price <= maxPrice;
        const matchesLocation = location === 'All' || property.location === location;
        const matchesType = type === 'All' || property.type === type;

        return matchesPrice && matchesLocation && matchesType;
    });

    // Display the filtered properties
    displayProperties(filteredProperties);
});

// Initially display all properties
displayProperties(properties);
