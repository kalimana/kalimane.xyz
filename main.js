// Steal a Brainrot Guide - JavaScript Functionality

// Complete Brainrots Database
const brainrotsData = [
    // Common Rarity
    { name: "Noobini Pizzanini", rarity: "common", income: 1, cost: 25 },
    { name: "Lirili Larila", rarity: "common", income: 3, cost: 250 },
    { name: "Tim Cheese", rarity: "common", income: 5, cost: 500 },
    { name: "FluriFlura", rarity: "common", income: 7, cost: 750 },
    { name: "Talpa Di Fero", rarity: "common", income: 9, cost: 1000 },
    { name: "Svinina Bombardino", rarity: "common", income: 10, cost: 1200 },
    { name: "Pipi Kiwi", rarity: "common", income: 13, cost: 1500 },

    // Rare Rarity
    { name: "Trippi Troppi", rarity: "rare", income: 15, cost: 2000 },
    { name: "Tung Tung Tung Sahur", rarity: "rare", income: 25, cost: 3000 },
    { name: "Gangster Footera", rarity: "rare", income: 30, cost: 4000 },
    { name: "Bandito Bobritto", rarity: "rare", income: 35, cost: 4500 },
    { name: "Boneca Ambalabu", rarity: "rare", income: 40, cost: 5000 },
    { name: "Cacto Hipopotamo", rarity: "rare", income: 50, cost: 6500 },
    { name: "Ta Ta Ta Ta Sahur", rarity: "rare", income: 55, cost: 7500 },
    { name: "Tric Trac Baraboom", rarity: "rare", income: 65, cost: 9000 },

    // Epic Rarity
    { name: "Cappuccino Assassino", rarity: "epic", income: 75, cost: 10000 },
    { name: "Brr Brr Patapim", rarity: "epic", income: 100, cost: 15000 },
    { name: "Trulimero Trulicina", rarity: "epic", income: 125, cost: 20000 },
    { name: "Bambini Crostini", rarity: "epic", income: 130, cost: 22500 },
    { name: "Bananita Dolphinita", rarity: "epic", income: 150, cost: 25000 },
    { name: "Perochello Lemonchello", rarity: "epic", income: 160, cost: 27500 },
    { name: "Brri Brri Bicus Dicus Bombicus", rarity: "epic", income: 175, cost: 30000 },
    { name: "Avocadini Guffo", rarity: "epic", income: 225, cost: 35000 },
    { name: "Salamino Penguino", rarity: "epic", income: 250, cost: 40000 },

    // Legendary Rarity
    { name: "Burbaloni Loliloli", rarity: "legendary", income: 200, cost: 35000 },
    { name: "Chimpanzini Bananini", rarity: "legendary", income: 300, cost: 50000 },
    { name: "Ballerina Cappuccina", rarity: "legendary", income: 500, cost: 100000 },
    { name: "Chef Crabracadabra", rarity: "legendary", income: 600, cost: 150000 },
    { name: "Lionel Cactuseli", rarity: "legendary", income: 650, cost: 175000 },
    { name: "Glorbo Fruttodrillo", rarity: "legendary", income: 750, cost: 200000 },
    { name: "Blueberrini Octopusin", rarity: "legendary", income: 1000, cost: 250000 },
    { name: "Strawberelli Flamingelli", rarity: "legendary", income: 1100, cost: 275000 },
    { name: "Pandaccini Bananini", rarity: "legendary", income: 1200, cost: 300000 },
    { name: "Quivioli Ameleonni", rarity: "legendary", income: 900, cost: 200000 },
    { name: "Caramello Filtrello", rarity: "legendary", income: 1000, cost: 255000 },

    // Mythic Rarity
    { name: "Frigo Camelo", rarity: "mythic", income: 1400, cost: 300000 },
    { name: "Orangutini Ananassini", rarity: "mythic", income: 1700, cost: 400000 },
    { name: "Rhino Toasterino", rarity: "mythic", income: 2100, cost: 450000 },
    { name: "Bombardiro Crocodilo", rarity: "mythic", income: 2500, cost: 500000 },
    { name: "Spioniro Golubiro", rarity: "mythic", income: 3500, cost: 750000 },
    { name: "Bombombini Gusini", rarity: "mythic", income: 5000, cost: 1000000 },
    { name: "Zibra Zubra Zibralini", rarity: "mythic", income: 6000, cost: 1000000 },
    { name: "Tigrilini Watermelini", rarity: "mythic", income: 6500, cost: 1000000 },
    { name: "Cavallo Virtuso", rarity: "mythic", income: 7500, cost: 2500000 },
    { name: "Gorillo Watermelondrillo", rarity: "mythic", income: 8000, cost: 3000000 },

    // Brainrot God Rarity
    { name: "Cocofanto Elefanto", rarity: "brainrot-god", income: 10000, cost: 5000000 },
    { name: "Girafa Celestre", rarity: "brainrot-god", income: 20000, cost: 7500000 },
    { name: "Gattatino Nyanino", rarity: "brainrot-god", income: 35000, cost: 7500000 },
    { name: "Matteo", rarity: "brainrot-god", income: 50000, cost: 10000000 },
    { name: "Tralalero Tralala", rarity: "brainrot-god", income: 50000, cost: 10000000 },
    { name: "Trigoligre Frutonni", rarity: "brainrot-god", income: 60000, cost: 15000000 },
    { name: "Espresso Signora", rarity: "brainrot-god", income: 70000, cost: 25000000 },
    { name: "Odin Din Din Dun", rarity: "brainrot-god", income: 75000, cost: 15000000 },
    { name: "Statutino Libertino", rarity: "brainrot-god", income: 75000, cost: 20000000 },
    { name: "Orcalero Orcala", rarity: "brainrot-god", income: 100000, cost: 15000000 },
    { name: "Trenostruzzo Turbo 3000", rarity: "brainrot-god", income: 150000, cost: 25000000 },
    { name: "Ballerino Lololo", rarity: "brainrot-god", income: 200000, cost: 35000000 },
    { name: "Los Crocodillitos", rarity: "brainrot-god", income: 55000, cost: 12500000 },
    { name: "Tukanno Banana", rarity: "brainrot-god", income: 45000, cost: 22500000 },

    // Secret Rarity
    { name: "La Vacca Staturno Saturnita", rarity: "secret", income: 250000, cost: 50000000 },
    { name: "Chimpanzini Spiderini", rarity: "secret", income: 325000, cost: 100000000 },
    { name: "Tortuginni Dragonfruitini", rarity: "secret", income: 350000, cost: 500000000 },
    { name: "Los Tralaleritos", rarity: "secret", income: 500000, cost: 150000000 },
    { name: "Las Tralaleritas", rarity: "secret", income: 650000, cost: 150000000 },
    { name: "Graipuss Medussi", rarity: "secret", income: 1000000, cost: 250000000 },
    { name: "Pot Hotspot", rarity: "secret", income: 2500000, cost: 500000000 },
    { name: "La Grande Combinasion", rarity: "secret", income: 10000000, cost: 1000000000 },
    { name: "Nuclearo Dinossauro", rarity: "secret", income: 15000000, cost: 2500000000 },
    { name: "Garama and Madundung", rarity: "secret", income: 50000000, cost: 10000000000 },
    { name: "Las Vaquitas Saturnitas", rarity: "secret", income: 750000, cost: 160000000 },
    { name: "Chicleteira Bicicleteira", rarity: "secret", income: 3500000, cost: 125000000 }
];

// Rebirth Data
const rebirthData = [
    {
        level: 1,
        cashRequired: "$1M",
        charactersRequired: "Trippi Troppi, Tung Tung Sahur",
        multiplier: "0.5x",
        keyUnlocks: "Friend Controller, Iron Slap, Gravity Coil, Bee Launcher"
    },
    {
        level: 2,
        cashRequired: "$3M",
        charactersRequired: "Brr Brr Patapim, Boneca Ambalabu",
        multiplier: "1x",
        keyUnlocks: "+1 Slot, Gold Slap, Coil Combo, Rage Table"
    },
    {
        level: 3,
        cashRequired: "$12.5M",
        charactersRequired: "Trulimero Trulicina, Chimpanzini Bananini",
        multiplier: "2x",
        keyUnlocks: "+1 Slot, Diamond Slap, Grapple Hook, Taser Gun"
    },
    {
        level: 4,
        cashRequired: "$35M",
        charactersRequired: "Chef-Crabracadabra, Glorbo Fruttodrillo",
        multiplier: "3x",
        keyUnlocks: "+1 Slot, Emerald Slap, Invisibility Cloak, Boogie Bomb"
    },
    {
        level: 5,
        cashRequired: "$100M",
        charactersRequired: "Frigo Camelo, Orangutini Ananassini",
        multiplier: "4x",
        keyUnlocks: "+1 Slot, Ruby Slap, Medusa Head"
    },
    {
        level: 6,
        cashRequired: "$350M",
        charactersRequired: "Bombardilo Crocodilo, Bombombini Gusini",
        multiplier: "5x",
        keyUnlocks: "+1 Slot, Dark Matter Slap, Web Slinger"
    },
    {
        level: 7,
        cashRequired: "$1B",
        charactersRequired: "Cocofanto Elefanto",
        multiplier: "6x",
        keyUnlocks: "+1 Slot, Flame Slap, Quantum Cloner, All Seeing Sentry"
    },
    {
        level: 8,
        cashRequired: "$5B",
        charactersRequired: "Tralalero Tralala",
        multiplier: "7x",
        keyUnlocks: "+1 Slot, Nuclear Slap, Rainbowrath Sword"
    },
    {
        level: 9,
        cashRequired: "$25B",
        charactersRequired: "Girafa Celestre",
        multiplier: "8x",
        keyUnlocks: "+1 Slot, Cosmic Slap, Divine Powers"
    },
    {
        level: 10,
        cashRequired: "$100B",
        charactersRequired: "Matteo",
        multiplier: "9x",
        keyUnlocks: "+1 Slot, Quantum Abilities"
    },
    {
        level: 11,
        cashRequired: "$500B",
        charactersRequired: "Espresso Signora",
        multiplier: "10x",
        keyUnlocks: "+1 Slot, Ultimate Defense"
    },
    {
        level: 12,
        cashRequired: "$2T",
        charactersRequired: "Secret Character",
        multiplier: "12x",
        keyUnlocks: "+1 Slot, Legendary Equipment"
    },
    {
        level: 13,
        cashRequired: "$10T",
        charactersRequired: "Ultimate Secret",
        multiplier: "15x",
        keyUnlocks: "+1 Slot, Godly Powers, Max Level Benefits"
    }
];

// Mutations Data
const mutationsData = [
    {
        name: "Gold",
        multiplier: "1.25x",
        description: "Golden appearance with moderate income boost",
        howToGet: "Naturally from conveyor belt",
        available: true
    },
    {
        name: "Diamond",
        multiplier: "1.5x",
        description: "Blue diamond appearance with good income boost",
        howToGet: "Naturally from conveyor belt",
        available: true
    },
    {
        name: "Rainbow",
        multiplier: "10x",
        description: "Rainbow colors with massive income boost",
        howToGet: "Naturally from conveyor belt (very rare)",
        available: true
    },
    {
        name: "Lava",
        multiplier: "6x",
        description: "Fiery lava appearance with high income boost",
        howToGet: "Naturally from conveyor belt",
        available: true
    },
    {
        name: "Bloodrot",
        multiplier: "2x",
        description: "Dark red appearance (legacy mutation)",
        howToGet: "No longer available (admin spawn only)",
        available: false
    },
    {
        name: "Celestial",
        multiplier: "4x",
        description: "Starry celestial appearance (legacy mutation)",
        howToGet: "No longer available (admin spawn only)",
        available: false
    },
    {
        name: "Candy",
        multiplier: "4x",
        description: "Sweet candy appearance (legacy mutation)",
        howToGet: "No longer available (admin spawn only)",
        available: false
    },
    {
        name: "Galaxy",
        multiplier: "6x (7x during event)",
        description: "Cosmic galaxy appearance with swirling effects",
        howToGet: "During Galaxy events only",
        available: true
    }
];

// Traits Data
const traitsData = [
    {
        name: "La Vacca Saturno Saturnita",
        multiplier: "4x",
        description: "Special ritual trait with cosmic powers",
        howToGet: "3 players form triangle with La Vacca characters"
    },
    {
        name: "Bombardiro",
        multiplier: "4x",
        description: "Explosive trait from crocodile ritual",
        howToGet: "3 players line up with Bombardiro Crocodilo"
    },
    {
        name: "Raining Tacos",
        multiplier: "3x",
        description: "Taco rain event trait",
        howToGet: "Admin Raining Tacos event"
    },
    {
        name: "Tung Tung Attack",
        multiplier: "4x",
        description: "Invasion trait from Tung Tung army",
        howToGet: "Tung Tung invasion admin event"
    },
    {
        name: "Glitch",
        multiplier: "5x",
        description: "Matrix-like glitch appearance",
        howToGet: "Brainrot falls into glitch hole during event"
    },
    {
        name: "Crab Rave",
        multiplier: "5x",
        description: "Beach party trait with dancing crabs",
        howToGet: "Crab Rave admin event"
    },
    {
        name: "Fire",
        multiplier: "5x",
        description: "Blazing fire aura from solar flare",
        howToGet: "Sun strikes brainrot with solar beam"
    },
    {
        name: "4th of July",
        multiplier: "6x",
        description: "Patriotic fireworks trait",
        howToGet: "4th of July admin event"
    },
    {
        name: "Nyan Cats",
        multiplier: "6x",
        description: "Rainbow trail from Nyan Cat strike",
        howToGet: "Nyan Cat event"
    },
    {
        name: "Rain",
        multiplier: "2.5x",
        description: "Water droplets from natural rain",
        howToGet: "Natural weather event"
    },
    {
        name: "Snow",
        multiplier: "3x",
        description: "Snowflakes from winter weather",
        howToGet: "Natural snow weather"
    },
    {
        name: "Starfall",
        multiplier: "3.5x",
        description: "Shooting star trail effect",
        howToGet: "Natural starfall event"
    },
    {
        name: "Concert",
        multiplier: "5x",
        description: "Musical notes and concert lights",
        howToGet: "Admin concert event"
    },
    {
        name: "10B",
        multiplier: "3x",
        description: "Celebration trait for 10 billion visits",
        howToGet: "Special milestone celebration event"
    },
    {
        name: "Shark",
        multiplier: "3x",
        description: "Ocean predator aura",
        howToGet: "Orcalero ritual triggers shark event"
    },
    {
        name: "Matteo",
        multiplier: "5x",
        description: "Divine Matteo blessing",
        howToGet: "Matteo ritual event"
    },
    {
        name: "Brazil",
        multiplier: "6x",
        description: "Brazilian flag colors and samba rhythm",
        howToGet: "Brazilian concert admin event"
    },
    {
        name: "UFO",
        multiplier: "3x",
        description: "Alien abduction effects",
        howToGet: "UFO invasion event"
    },
    {
        name: "Sleepy",
        multiplier: "3x",
        description: "Skull emoji with sleep text",
        howToGet: "Fall asleep during gameplay"
    },
    {
        name: "Lightning",
        multiplier: "6x",
        description: "Electric lightning aura",
        howToGet: "Lightning galaxy event"
    },
    {
        name: "Strawberry",
        multiplier: "8x",
        description: "Sweet strawberry essence",
        howToGet: "Strawberry Elephant spawn event"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupMobileMenu();
    setupSmoothScrolling();
    renderCharacters();
    renderRebirthTable();
    renderMutations();
    renderTraits();
    setupCharacterFilters();
    setupCharacterSearch();
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

// Render Characters Grid
function renderCharacters(filteredData = brainrotsData) {
    const charactersGrid = document.getElementById('characters-grid');
    if (!charactersGrid) return;
    
    charactersGrid.innerHTML = '';
    
    filteredData.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
}

// Create Character Card
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = `character-card bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300 rarity-${character.rarity}`;
    
    const rarityColors = {
        'common': 'text-gray-400',
        'rare': 'text-green-400',
        'epic': 'text-blue-400',
        'legendary': 'text-yellow-400',
        'mythic': 'text-red-400',
        'brainrot-god': 'text-pink-400',
        'secret': 'text-purple-400'
    };
    
    const rarityIcons = {
        'common': 'fas fa-circle',
        'rare': 'fas fa-star',
        'epic': 'fas fa-gem',
        'legendary': 'fas fa-crown',
        'mythic': 'fas fa-fire',
        'brainrot-god': 'fas fa-bolt',
        'secret': 'fas fa-eye'
    };
    
    card.innerHTML = `
        <div class="flex items-center mb-4">
            <i class="${rarityIcons[character.rarity]} text-2xl ${rarityColors[character.rarity]} mr-3"></i>
            <h3 class="text-lg font-bold text-white">${character.name}</h3>
        </div>
        <div class="space-y-2">
            <div class="flex justify-between items-center">
                <span class="text-gray-400">Rarity:</span>
                <span class="capitalize ${rarityColors[character.rarity]} font-semibold">
                    ${character.rarity.replace('-', ' ')}
                </span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-400">Income:</span>
                <span class="text-green-400 font-semibold">$${formatNumber(character.income)}/s</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-400">Cost:</span>
                <span class="text-yellow-400 font-semibold">$${formatNumber(character.cost)}</span>
            </div>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-700">
            <div class="text-sm text-gray-400">
                Efficiency: ${(character.income / character.cost * 1000).toFixed(2)} per $1k
            </div>
        </div>
    `;
    
    return card;
}

// Format Numbers
function formatNumber(num) {
    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(1) + 'T';
    }
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Setup Character Filters
function setupCharacterFilters() {
    const filterButtons = document.querySelectorAll('.rarity-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter characters
            const rarity = button.dataset.rarity;
            let filteredData;
            
            if (rarity === 'all') {
                filteredData = brainrotsData;
            } else {
                filteredData = brainrotsData.filter(character => character.rarity === rarity);
            }
            
            renderCharacters(filteredData);
        });
    });
}

// Setup Character Search
function setupCharacterSearch() {
    const searchInput = document.getElementById('character-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = brainrotsData.filter(character => 
                character.name.toLowerCase().includes(searchTerm)
            );
            renderCharacters(filteredData);
            
            // Reset filter buttons
            document.querySelectorAll('.rarity-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('[data-rarity="all"]').classList.add('active');
        });
    }
}

// Render Rebirth Table
function renderRebirthTable() {
    const tableBody = document.getElementById('rebirth-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    rebirthData.forEach(rebirth => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-700 transition duration-300';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                ${rebirth.level}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-yellow-400 font-semibold">
                ${rebirth.cashRequired}
            </td>
            <td class="px-6 py-4 text-sm text-gray-300">
                ${rebirth.charactersRequired}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-semibold">
                ${rebirth.multiplier}
            </td>
            <td class="px-6 py-4 text-sm text-purple-400">
                ${rebirth.keyUnlocks}
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Render Mutations
function renderMutations() {
    const mutationsList = document.getElementById('mutations-list');
    if (!mutationsList) return;
    
    mutationsList.innerHTML = '';
    
    mutationsData.forEach(mutation => {
        const mutationItem = document.createElement('div');
        mutationItem.className = `mutation-item bg-gray-800 p-4 rounded-lg ${!mutation.available ? 'opacity-60' : ''}`;
        
        mutationItem.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h4 class="font-bold text-lg text-pink-400">${mutation.name}</h4>
                <span class="text-green-400 font-semibold">${mutation.multiplier}</span>
                ${!mutation.available ? '<span class="text-red-400 text-xs">[LEGACY]</span>' : ''}
            </div>
            <p class="text-gray-300 text-sm mb-2">${mutation.description}</p>
            <p class="text-gray-400 text-xs">${mutation.howToGet}</p>
        `;
        
        mutationsList.appendChild(mutationItem);
    });
}

// Render Traits
function renderTraits() {
    const traitsList = document.getElementById('traits-list');
    if (!traitsList) return;
    
    traitsList.innerHTML = '';
    
    traitsData.forEach(trait => {
        const traitItem = document.createElement('div');
        traitItem.className = 'trait-item bg-gray-800 p-4 rounded-lg';
        
        traitItem.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h4 class="font-bold text-lg text-purple-400">${trait.name}</h4>
                <span class="text-green-400 font-semibold">${trait.multiplier}</span>
            </div>
            <p class="text-gray-300 text-sm mb-2">${trait.description}</p>
            <p class="text-gray-400 text-xs">${trait.howToGet}</p>
        `;
        
        traitsList.appendChild(traitItem);
    });
}

// Update Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});