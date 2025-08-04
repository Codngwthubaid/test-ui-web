export const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        height: 400,
    },
    {
        id: "4",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        height: 400,
    },
    {
        id: "10",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        height: 400,
    },
    {
        id: "7",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        height: 250,
    },
    {
        id: "5",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        height: 250,
    },
    {
        id: "8",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        height: 250,
    },
    {
        id: "11",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        height: 600,
    },
    {
        id: "6",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        height: 600,
    },
    {
        id: "13",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        height: 600,
    },
    {
        id: "9",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        height: 600,
    },
];


export const images = [
    { src: "./cas-02.jpg", alt: "Image 2" },
    { src: "./cas-03.jpg", alt: "Image 3" },
    { src: "./cas-04.jpg", alt: "Image 4" },
    { src: "./cas-05.jpg", alt: "Image 5" },
    { src: "./cas-06.jpg", alt: "Image 6" },
    { src: "./cas-07.jpg", alt: "Image 7" },
    { src: "./cas-08.jpg", alt: "Image 8" },
    { src: "./cas-09.jpg", alt: "Image 9" },
    { src: "./cas-10.jpg", alt: "Image 10" },
]



import type { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
    // Pizza Items
    {
        id: 'pizza-1',
        name: 'Margherita Supreme',
        description: 'Classic Italian pizza with fresh basil, tomatoes, and premium mozzarella cheese',
        price: 459,
        ingredients: ['Fresh Mozzarella', 'San Marzano Tomatoes', 'Fresh Basil', 'Extra Virgin Olive Oil', 'Sea Salt'],
        category: 'pizza',
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pizza-2',
        name: 'Pepperoni Deluxe',
        description: 'Loaded with premium pepperoni, melted cheese, and our signature tomato sauce',
        price: 549,
        ingredients: ['Pepperoni', 'Mozzarella Cheese', 'Tomato Sauce', 'Italian Herbs', 'Parmesan'],
        category: 'pizza',
        image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pizza-3',
        name: 'Quattro Formaggi',
        description: 'Four cheese blend with mozzarella, gorgonzola, parmesan, and ricotta',
        price: 599,
        ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Ricotta', 'White Sauce', 'Herbs'],
        category: 'pizza',
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pizza-4',
        name: 'BBQ Chicken Ranch',
        description: 'Grilled chicken with BBQ sauce, red onions, cilantro, and ranch drizzle',
        price: 649,
        ingredients: ['Grilled Chicken', 'BBQ Sauce', 'Red Onions', 'Cilantro', 'Ranch Dressing', 'Mozzarella'],
        category: 'pizza',
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=500'
    },

    // Pasta Items
    {
        id: 'pasta-1',
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with pancetta, eggs, parmesan, and black pepper',
        price: 399,
        ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan', 'Black Pepper', 'Cream'],
        category: 'pasta',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pasta-2',
        name: 'Fettuccine Alfredo',
        description: 'Rich and creamy fettuccine pasta in our signature alfredo sauce',
        price: 429,
        ingredients: ['Fettuccine', 'Heavy Cream', 'Parmesan', 'Butter', 'Garlic', 'Italian Parsley'],
        category: 'pasta',
        image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pasta-3',
        name: 'Penne Arrabbiata',
        description: 'Spicy tomato sauce with garlic, red chilies, and fresh herbs',
        price: 369,
        ingredients: ['Penne', 'Tomato Sauce', 'Red Chilies', 'Garlic', 'Olive Oil', 'Fresh Basil'],
        category: 'pasta',
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'pasta-4',
        name: 'Lasagna Bolognese',
        description: 'Layered pasta with rich meat sauce, bechamel, and three cheese blend',
        price: 599,
        ingredients: ['Lasagna Sheets', 'Ground Beef', 'Bechamel Sauce', 'Mozzarella', 'Parmesan', 'Ricotta'],
        category: 'pasta',
        image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=500'
    },

    // Appetizers
    {
        id: 'appetizer-1',
        name: 'Garlic Bread Supreme',
        description: 'Crispy garlic bread topped with herbs, cheese, and a side of marinara',
        price: 199,
        ingredients: ['Fresh Bread', 'Garlic Butter', 'Mozzarella', 'Italian Herbs', 'Marinara Sauce'],
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'appetizer-2',
        name: 'Mozzarella Sticks',
        description: 'Golden fried mozzarella sticks served with marinara dipping sauce',
        price: 299,
        ingredients: ['Mozzarella Cheese', 'Breadcrumbs', 'Italian Seasoning', 'Marinara Sauce'],
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'appetizer-3',
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with caesar dressing, croutons, and parmesan',
        price: 329,
        ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan', 'Anchovies'],
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'appetizer-4',
        name: 'Bruschetta Trio',
        description: 'Three varieties of bruschetta with tomato-basil, olive tapenade, and ricotta',
        price: 399,
        ingredients: ['Artisan Bread', 'Tomatoes', 'Fresh Basil', 'Olive Tapenade', 'Ricotta', 'Balsamic Glaze'],
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=500'
    },

    // Desserts
    {
        id: 'dessert-1',
        name: 'Tiramisu Classic',
        description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 349,
        ingredients: ['Ladyfingers', 'Espresso', 'Mascarpone', 'Cocoa Powder', 'Sugar', 'Eggs'],
        category: 'desserts',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'dessert-2',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: 299,
        ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Vanilla Ice Cream'],
        category: 'desserts',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'dessert-3',
        name: 'Panna Cotta Berry',
        description: 'Silky smooth vanilla panna cotta topped with fresh berry compote',
        price: 279,
        ingredients: ['Heavy Cream', 'Vanilla', 'Gelatin', 'Sugar', 'Mixed Berries', 'Berry Sauce'],
        category: 'desserts',
        image: 'https://images.pexels.com/photos/2067419/pexels-photo-2067419.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
        id: 'dessert-4',
        name: 'Gelato Selection',
        description: 'Choice of three scoops from our artisanal gelato collection',
        price: 249,
        ingredients: ['Vanilla Gelato', 'Chocolate Gelato', 'Strawberry Gelato', 'Pistachio Gelato', 'Wafer Cone'],
        category: 'desserts',
        image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
];