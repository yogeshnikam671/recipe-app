// use this utility function to insert data into remote postgres db.
// use this only on local. do not introduce any feature in the app that uses this function for now.

import { sql } from "@vercel/postgres";

export const recipees = [
  {
    name: 'Dahi Vada',
    type: 'VEG',
    category: 'Indian',
    description: `
Rinse and soak urad dal in water for 6 hours or overnight.
Its size would increase to almost double during soaking. Drain and discard all water from dal.
Place it in grinder and grind into a smooth paste by gradually adding 1-2 tablespoons water at a time as required (approx. 1/2-cup total water). Amount of water required may vary according to the quality of dal. Do not add too much water otherwise batter will turn watery; it should have thick lumpy consistency and there should not be any broken dal pieces.
Transfer it to a large bowl and add crushed ginger-chili and salt.
Mix well and beat the batter until it turns light, about at-least 4-5 minutes. This step is very critical as it will decide how soft and fluffy vada would be after deep-frying. More or excess beating will not harm the softness and fluffiness of it.
Heat oil in a deep frying pan over medium flame. When oil is medium hot, take a medium lemon sized portion of batter in between your fingers or a spoon and gently drop it into the oil. Drop 4-5 portions at a time. Deep-fry them on medium heat until light golden brown and crispy. Take them out from oil and let them cool down at room temperature. Transfer them into a bowl filled with lukewarm water. Make vadas from remaining batter in similar way.
Soak them for about 7-8 minutes. Oil droplets would start floating on surface and vada would turn soft.
Takeout them out from water and press gently between your palms to remove excess water.
Transfer them to a plate.
Take 4-5 fried and soaked vadas in a deep serving plate or a bowl. Pour generous amount of curd evenly over it until fully covered. Top it with 2-teaspoons sweet chutney and sprinkle red chilli powder, roasted cumin powder and black pepper powder. Garnish dahi bhalla chaat with coriander leaves and serve.
`
  },
  {
    name: 'White Pasta',
    type: 'VEG',
    category: 'Italian',
    description: `
1-Boil 150 grams of pasta according to instructions on the package. I used regular penne pasta which was supposed to be boiled for 9 to 11 minutes. and drain. Make sure you don’t overcook your pasta, you want it al-dente. Note: use only 1 cup pasta if you like more sauce in your pasta. While the pasta is boiling chop all the veggies.

2- Once the pasta is boiled, drain it using a colander and set aside.

3- Melt 1 tablespoon of butter in a pan on medium heat. Add all the veggies –

1 small red onion, chopped
1 medium red pepper, sliced
3/4 cup small broccoli florets
1/2 cup sweet corn (frozen corn which I added to hot water for 5 minutes before using).
4- Cook the veggies for 2 minutes. They should remain crunchy. You can use other veggies like carrots, peas as well.
5- Once done, remove veggies onto a plate.
6- To another pan or you can use the same pan, now add 1 tablespoon olive oil and the remaining tablespoon of butter.
7- Once the butter melts, add the 5-6 chopped garlic cloves and cook for 1 minute until fragrant.
8- Then add in 1 & 1/2 tablespoons of flour.
9- Whisk the flour continuously, using a wire whisk for around 30 to 60 seconds. You don’t have to brown the flour much.

10- Then add in 2 cups of milk. You can also add 1/4 cup heavy cream here or use additional 1/4 cup milk.

11- Mix everything using a whisk so that there are no lumps formed.

12- Add in the seasonings:
        1 teaspoon Italian seasonings
        1 teaspoon dried oregano
        1/2 teaspoon red chili flakes (to taste)
        1/2 teaspoon salt, or to taste
        black pepper, to taste
13- Mix in everything and let the sauce simmer.

14- Sauce will thicken as it simmers and in 4 to 5 minutes it will coat the back of the spoon. Turn heat to lowest.

15- Add in the veggies and the boiled pasta.

16- Toss until the pasta and veggies are coated with the sauce. Taste test and adjust the seasonings at this point. Serve warm!
`
  },
  {
    name: 'Chicken Cheese Burger',
    type: 'NON_VEG',
    category: 'American',
    description: `
To make this delicious burger recipe, take a pan and add oil in it. Heat it over medium flame. Once the oil is sufficiently hot, add chicken in it and cook for around 5 to 7 minutes. Once the chicken is cooked well, remove from heat and transfer it in a plate.

Now with a help of a knife, slice the burger buns in halves. Meanwhile, spread the ranch dressing on the bottom half. Place the cooked chicken on it and then put lettuce leaf on the same. Top with salsa, cheese and cover with the second half of the bun. Let it rest for 2 minutes.

Repeat the same procedure with the remaining buns and serve along with any cold beverage of your choice. For the best culinary experience, pair this Chicken Cheese Burger recipe with chilled cranberry juice and enjoy its flavours.
`
  },
  {
    name: 'Pani Puri',
    type: 'VEG',
    category: 'Indian',
    description: `
1. Rinse 1 cup tightly packed coriander leaves, ½ cup tightly packed mint leaves, 2 to 3 green chilies and 1 inch ginger very well in water a few times. Drain all the water.

Peel the ginger and roughly chop it. Also chop the green chilies. Roughly chop the coriander leaves and mint leaves. Don’t use the stem of mint leaves as they can make the spiced water have a bitter taste. Only use the fresh mint leaves.

2. Add coriander leaves, mint leaves, ginger and green chili in a grinder or blender jar. For a less spicy pani you can add just 1 chopped green chilli.

3. Add 1 tablespoon tightly packed tamarind and 3.5 to 4 tablespoons jaggery powder or grated jaggery.

4. Now add 1 teaspoon roasted cumin powder, 1 teaspoon chaat masala and salt as per taste. You can also use a mix of black salt and pink salt or regular salt. I personally prefer to use either black salt or edible rock salt.

5. Add ⅓ cup water and grind to a smooth consistency.

6. Now add ½ cup water in the grinder jar and swirl the jar so that the chutney at the sides of the jar gets mixed with the water.

7. Add this water to the bowl containing the chutney.

8. Then add ½ to ¾ cup water. You can add less or more water depending on the consistency you want. But do not add too much water as then the taste and flavor of the spiced water reduces. Also check the taste and if required you can add some more jaggery or salt as required.
`
  },
  {
    name: 'Chicken Dum Biryani',
    type: 'NON_VEG',
    category: 'Indian',
    description: `
Marinating Chicken:
In a bowl, mix the chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, and salt.
Let the chicken marinate for at least 1-2 hours or preferably overnight in the refrigerator.
Cooking Rice:
Boil water in a large pot. Add soaked basmati rice, green cardamom pods, cloves, cinnamon stick, and salt.
Cook the rice until it is 70-80% cooked (parboiled). The grains should still be firm.
Drain the rice and set aside.
Biryani Masala:
In a deep pan, heat oil and ghee. Add whole spices - cardamom, cloves, cinnamon, and bay leaf.
Add thinly sliced onions and fry until golden brown.
Add chopped tomatoes and cook until they are soft and oil starts separating.
Add marinated chicken and cook until the chicken is almost cooked.
Add chopped mint and coriander leaves. Mix well.
Layering Biryani:
Preheat your oven to 350°F (180°C).
In a large ovenproof dish, layer half of the parboiled rice at the bottom.
Spread the cooked chicken masala evenly over the rice.
Add the remaining rice on top of the chicken.
Drizzle saffron-infused milk over the rice for color.
Garnish with fried onions.
Dum Cooking:
Seal the dish tightly with aluminum foil or a tight-fitting lid.
Place the dish in the preheated oven and cook for 25-30 minutes.
Alternatively, you can place the sealed dish on a tawa (griddle) and cook on low heat for 25-30 minutes.
Serving:
Gently fluff the biryani with a fork.
Serve hot with raita, salad, or your favorite side dish.
Enjoy your delicious Chicken Dum Biryani!
`
  },
  {
    name: 'Chhole Bhature',
    type: 'VEG',
    category: 'Indian',
    description: `
For Chhole (Chickpea Curry):
Wash and soak chickpeas overnight or for at least 6-8 hours.
Boil chickpeas with a tea bag or black cardamom and baking soda until they are soft. Discard the tea bag or cardamom.
In a separate pan, heat oil or ghee. Add cumin seeds and let them splutter.
Add finely chopped onions and sauté until golden brown.
Add ginger-garlic paste and sauté until the raw smell disappears.
Add tomato puree and cook until the oil separates from the masala.
Add coriander powder, cumin powder, turmeric powder, red chili powder, garam masala, and salt. Mix well.
Add boiled chickpeas along with some of the water they were boiled in. Simmer for 15-20 minutes until the flavors meld together.
Garnish with chopped green chilies and fresh coriander leaves.
For Bhature (Fried Bread):
In a mixing bowl, combine all-purpose flour, semolina, yogurt, oil, sugar, baking powder, baking soda, and salt.
Gradually add water and knead the mixture into a soft and smooth dough.
Cover the dough and let it rest for 2-3 hours.
Divide the dough into small balls and roll them into discs using a rolling pin.
Heat oil in a deep pan for frying. The oil should be hot but not smoking.
Fry the bhature until they puff up and turn golden brown on both sides.
Drain excess oil by placing them on paper towels.
Serving:
Serve hot Chhole with Bhature.
Garnish the Chhole with additional chopped coriander leaves.
Serve with sliced onions, lemon wedges, and pickles on the side.
Enjoy your delicious Chhole Bhature!
`
  },
  {
    name: 'Aloo Chat',
    type: 'VEG',
    category: 'Indian',
    description: `
Tamarind Chutney:
In a small pan, combine tamarind pulp, jaggery or sugar, roasted cumin powder, red chili powder, and salt.
Cook on low heat until the mixture thickens into a chutney-like consistency. Set aside to cool.
Mint-Coriander Chutney:
In a blender, combine fresh coriander leaves, mint leaves, green chili, ginger, roasted cumin powder, and salt.
Blend into a smooth chutney, adding water as needed to achieve the desired consistency.
Assembling Aloo Chaat:
In a large mixing bowl, combine the boiled and chopped potatoes with chaat masala, roasted cumin powder, and salt. Mix well.

Add the finely chopped red onion, tomato, green chili, and fresh coriander leaves to the potatoes. Mix gently.

Drizzle both the tamarind chutney and mint-coriander chutney over the potato mixture according to your taste preferences.

Toss everything together until the potatoes are well coated with the chutneys.

Transfer the Aloo Chaat to serving plates.

Garnish with a generous sprinkle of sev on top.

Serve immediately with lemon wedges on the side.

Enjoy your flavorful and tangy Aloo Chaat!
`
  },
  {
    name: 'Butter Chicken',
    type: 'NON_VEG',
    category: 'Indian',
    description: `
Marinating Chicken:

In a bowl, combine yogurt, ginger-garlic paste, red chili powder, turmeric powder, and salt.
Add the chicken cubes and coat them well with the marinade.
Allow the chicken to marinate for at least 30 minutes or, for better flavor, refrigerate it for a few hours or overnight.

Cooking Butter Chicken:

In a pan, heat butter and oil over medium heat.

Add finely chopped onions and sauté until they become golden brown.

Add ginger-garlic paste and sauté for another minute until the raw smell disappears.

Add tomato puree and cook until the oil starts separating from the masala.

Add red chili powder, garam masala, coriander powder, turmeric powder, and salt. Mix well.

Add the marinated chicken and cook until it is no longer pink. Stir occasionally.

Pour in the heavy cream and mix until the chicken is well coated.

Simmer the curry for 5-7 minutes until the chicken is cooked through and the flavors meld together.

Garnish and Serve:

Garnish with fresh coriander leaves.

Serve the Butter Chicken hot with naan, rice, or your favorite bread.

Enjoy your quick and delicious Butter Chicken!
`
  },
  {
    name: 'Nachos',
    type: 'VEG',
    category: 'Mexican',
    description: `
Preheat the Oven:

Preheat your oven to 375°F (190°C).
Layer the Tortilla Chips:

Arrange a layer of tortilla chips on a large baking sheet or an oven-safe dish.
Add Cheese:

Sprinkle a layer of shredded cheese evenly over the tortilla chips.
Add Toppings:

Add your choice of toppings over the cheese. You can include seasoned ground beef or shredded chicken, black beans, diced tomatoes, jalapeños, black olives, and diced red onion.
Repeat Layers:

Repeat the process by adding another layer of tortilla chips, cheese, and toppings.
Bake in the Oven:

Place the baking sheet or dish in the preheated oven and bake for about 10-15 minutes or until the cheese is fully melted and bubbly.
Garnish:

Remove the nachos from the oven and garnish with chopped cilantro.
Serve:

Serve the loaded nachos hot with sides of sour cream, salsa, and guacamole.
Enjoy:

Dive into the deliciousness of your homemade loaded nachos!
`
  },
  {
    name: 'Ramen Soup',
    type: 'VEG',
    category: 'Japanese',
    description: `
Making the Broth:
In a large pot, heat sesame oil over medium heat. Add minced garlic and grated ginger. Sauté for a minute until fragrant.

Pour in the chicken or vegetable broth and bring it to a simmer.

Add soy sauce, mirin, and sake to the broth. Allow it to simmer for about 15-20 minutes, allowing the flavors to meld.

Taste the broth and adjust the seasoning with salt if needed. Keep the broth warm on low heat while preparing the other components.

Preparing the Ramen:
Cook the ramen noodles according to the package instructions. Drain and rinse them under cold water to stop the cooking process.

In a separate pot, blanch the baby spinach or bok choy until wilted. Drain and set aside.

Assemble the ramen bowls by placing cooked ramen noodles in each bowl.

Pour the hot broth over the noodles, making sure to distribute it evenly.

Arrange the blanched spinach or bok choy, boiled eggs, sliced green onions, and shiitake mushrooms (if using) on top of the noodles.

Garnish with shredded nori sheets and sesame seeds.

Serve the ramen hot and enjoy!
`
  },
  {
    name: 'Sushi',
    type: 'NON_VEG',
    category: 'Japanese',
    description: `
Preparing Sushi Rice:
Rinse the sushi rice under cold water until the water runs clear.

Combine rice and water in a rice cooker and cook according to the manufacturer's instructions.

While the rice is still warm, transfer it to a large bowl. In a separate bowl, mix rice vinegar, sugar, and salt. Gently fold this mixture into the warm rice using a wooden or plastic spatula.

Allow the seasoned rice to cool to room temperature.

Preparing Sushi Filling:
Prepare the vegetables by julienning the cucumber and carrot, and slicing the avocado.
Rolling the Sushi:
Place a bamboo sushi rolling mat on a flat surface and put a sheet of plastic wrap on top.

Lay a sheet of nori, shiny side down, on the plastic wrap.

Wet your hands to prevent the rice from sticking, and take a handful of sushi rice. Spread it evenly over the nori, leaving about 1 inch at the top without rice.

Arrange the vegetable fillings horizontally along the center of the rice.

Sprinkle sesame seeds over the filling if desired.

Lift the edge of the bamboo mat closest to you, and tightly roll the nori and rice over the filling. Use the mat to shape the roll.

Moisten the edge of the nori with a little water to seal the roll.

Using a sharp knife dipped in water, slice the roll into bite-sized pieces.

Repeat the process with the remaining ingredients.
`
  },
];

const insertRecipees = async () => {
  
  for(let i=0; i < recipees.length; i++) {
    const { name, category, type, description } = recipees[i];
    await sql.query(
      `
        INSERT INTO recipe(name, category, type, description) 
        VALUES ($1, $2, $3, $4)
      `,
      [name, category, type, description]
    );
  }
};
