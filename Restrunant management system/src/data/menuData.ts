import { MenuItem } from '../types';

export const menuData: Record<string, MenuItem[]> = {
  appetizers: [
    {
      id: 1,
      name: 'Garlic Shrimp',
      price: 16.99,
      description: 'Succulent shrimp sautéed in garlic butter, white wine, and fresh herbs, served with artisan bread.',
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Shellfish', 'Dairy', 'Gluten']
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: 12.99,
      description: 'Grilled rustic bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil.',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Gluten']
    },
    {
      id: 3,
      name: 'Calamari Fritti',
      price: 15.99,
      description: 'Crispy fried calamari served with a zesty marinara sauce and lemon wedges.',
      image: 'https://images.pexels.com/photos/8280728/pexels-photo-8280728.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Gluten', 'Shellfish']
    },
    {
      id: 4,
      name: 'Spicy Meatballs',
      price: 14.99,
      description: 'House-made meatballs in a spicy tomato sauce, topped with Parmesan and fresh basil.',
      image: 'https://images.pexels.com/photos/6419736/pexels-photo-6419736.jpeg',
      isSpicy: true,
      isVegetarian: false,
      allergens: ['Dairy', 'Gluten', 'Eggs']
    }
  ],
  salads: [
    {
      id: 5,
      name: 'Mediterranean Salad',
      price: 14.99,
      description: 'Fresh mixed greens with tomatoes, cucumbers, red onions, feta cheese, kalamata olives, and Greek dressing.',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy']
    },
    {
      id: 6,
      name: 'Caesar Salad',
      price: 13.99,
      description: 'Crisp romaine lettuce with house-made Caesar dressing, croutons, and shaved Parmesan cheese.',
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy', 'Gluten', 'Eggs']
    },
    {
      id: 7,
      name: 'Beet & Goat Cheese Salad',
      price: 15.99,
      description: 'Roasted beets with mixed greens, goat cheese, candied walnuts, and balsamic vinaigrette.',
      image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy', 'Tree Nuts']
    }
  ],
  mains: [
    {
      id: 8,
      name: 'Grilled Atlantic Salmon',
      price: 28.99,
      description: 'Fresh Atlantic salmon fillet grilled to perfection, served with roasted vegetables and herb butter.',
      image: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Fish', 'Dairy']
    },
    {
      id: 9,
      name: 'Filet Mignon',
      price: 36.99,
      description: '8oz AAA tenderloin, grilled to your preference, with truffle mashed potatoes and seasonal vegetables.',
      image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Dairy']
    },
    {
      id: 10,
      name: 'Wild Mushroom Risotto',
      price: 24.99,
      description: 'Creamy Arborio rice with a medley of wild mushrooms, white wine, and Parmesan cheese.',
      image: 'https://images.pexels.com/photos/6541815/pexels-photo-6541815.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy']
    },
    {
      id: 11,
      name: 'Chicken Marsala',
      price: 26.99,
      description: 'Pan-seared chicken breast with Marsala wine and mushroom sauce, served with pasta.',
      image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Gluten', 'Dairy']
    }
  ],
  pasta: [
    {
      id: 12,
      name: 'Linguine alle Vongole',
      price: 24.99,
      description: 'Linguine with fresh clams in a white wine and garlic sauce, finished with parsley.',
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Gluten', 'Shellfish']
    },
    {
      id: 13,
      name: 'Spaghetti Bolognese',
      price: 22.99,
      description: 'Classic spaghetti with rich, slow-cooked beef and tomato Bolognese sauce.',
      image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg',
      isSpicy: false,
      isVegetarian: false,
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 14,
      name: 'Penne Arrabbiata',
      price: 19.99,
      description: 'Penne pasta in a spicy tomato sauce with garlic, red chili flakes, and fresh basil.',
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
      isSpicy: true,
      isVegetarian: true,
      allergens: ['Gluten']
    }
  ],
  desserts: [
    {
      id: 15,
      name: 'Tiramisu',
      price: 9.99,
      description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
      image: 'https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy', 'Eggs', 'Gluten']
    },
    {
      id: 16,
      name: 'Chocolate Lava Cake',
      price: 10.99,
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
      image: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy', 'Eggs', 'Gluten']
    },
    {
      id: 17,
      name: 'Crème Brûlée',
      price: 9.99,
      description: 'Classic French vanilla custard with a caramelized sugar crust.',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: ['Dairy', 'Eggs']
    }
  ],
  drinks: [
    {
      id: 18,
      name: 'Signature Sangria',
      price: 12.99,
      description: 'House-made red or white sangria with fresh fruits and a blend of spirits.',
      image: 'https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: []
    },
    {
      id: 19,
      name: 'Craft Cocktails',
      price: 14.99,
      description: 'Seasonally inspired cocktails made with premium spirits and fresh ingredients.',
      image: 'https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: []
    },
    {
      id: 20,
      name: 'Italian Espresso',
      price: 4.99,
      description: 'Authentic Italian espresso, served with a twist of lemon peel.',
      image: 'https://images.pexels.com/photos/3020233/pexels-photo-3020233.jpeg',
      isSpicy: false,
      isVegetarian: true,
      allergens: []
    }
  ]
};