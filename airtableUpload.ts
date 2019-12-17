// //comment out isolated Modules line in tsconfig to run this file

// const Airtable = require('airtable')
// const R = require('ramda')
// const moment = require('moment')
// const { prisma } = require('./prisma/generated/js')

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: process.env.AIRTABLE_API_KEY,
// })

// const base = Airtable.base(process.env.AIRTABLE_BASE)

// // first create the users in AT
// const createAirtableUsersWithMeals = async () => {
//   // get all users from prisma where project is "Snapeat Trial"
//   const snapeatTrialProject = 'ck3slx3qm00a30743r7sdk8hk'

//   const users = await prisma.users({
//     where: {
//       //eslint-disable-next-line
//       projects_every: {
//         id: snapeatTrialProject,
//       },
//     },
//   })

//   // for each user, push it into Airtable

//   const addUsersToAirtable = async user => {
//     user.ages = []

//     // get ages of children

//     const ageFragment = `
// fragment ChildAge on Child {
//   age
// }`
//     const children = await prisma
//       .children({
//         where: {
//           Parent: {
//             id: user.id,
//           },
//         },
//       })
//       .$fragment(ageFragment)

//     // add ages to user object
//     await R.map(({ age }) => user.ages.push(age))(children)

//     // upload to AT
//     const { ages, postCode, consentGDPR } = user

//     const airtableId = 'recDbH65aPnaXslJM'

//     const [{ id: airtableParent }] = await base('Users').create([
//       {
//         fields: {
//           Project: [airtableId],
//           'Postcode Area': postCode.substring(0, 5),
//           'Consent for Data Usage': consentGDPR,
//         },
//       },
//     ])

//     if (!R.isEmpty(ages)) {
//       const emptyFields = []

//       R.map(age =>
//         emptyFields.push({
//           fields: {
//             Parent: [airtableParent],
//             'Age Group': `${age}`,
//           },
//         }),
//       )(ages)

//       await base('Children')
//         .create(emptyFields)
//         .catch(e => console.log('error', e))
//     }

//     await prisma.updateUser({
//       data: { airtableId: airtableParent },
//       where: { id: user.id },
//     })
//   }

//   //add all of each users meals into AT
//   const addUserMeals = async user => {
//     //get all meals for user

//     const mealFragment = `
//     fragment MealWithDetails on Meal {
//       imageURL
//       createdAt
//       proportionVeg {
//         name
//       }
//       proportionFruit {
//         name
//       }
//       categories {
//         name
//       }
//       tags {
//         name
//       }
//     }`

//     const meals = await prisma
//       .meals({
//         where: {
//           user: {
//             id: user.id,
//           },
//         },
//       })
//       .$fragment(mealFragment)

//     //get userAirtableId

//     const airtableIdFragment = `
// fragment AirtableId on User {
//   airtableId
// }`
//     const { airtableId: userAirtableId } = await prisma
//       .user({
//         id: user.id,
//       })
//       .$fragment(airtableIdFragment)

//     // upload each meal of that user to AT

//     R.map(async meal => {
//       const {
//         categories,
//         tags,
//         proportionFruit,
//         proportionVeg,
//         imageURL,
//         id,
//       } = meal

//       const mealCategories = []
//       const mealTags = []
//       const { name: mealPropFruit } = proportionFruit
//         ? proportionFruit
//         : { name: '' }
//       const { name: mealPropVeg } = proportionVeg ? proportionVeg : { name: '' }

//       !R.isEmpty(tags) && (await R.map(({ name }) => mealTags.push(name))(tags))
//       !R.isEmpty(categories) &&
//         (await R.map(({ name }) => mealCategories.push(name))(categories))

//       const dbCategories = await prisma.categories()
//       const dbTags = await prisma.tags()
//       const dbProportions = await prisma.proportions()

//       interface AirtableDbLink {
//         name: string
//         airtableId: string
//       }

//       //map airtable ids for categories etc

//       const getAirtableIds = (airtableArray: AirtableDbLink[], prismaArray) =>
//         R.pipe(
//           x => R.filter(({ name }) => R.contains(name)(airtableArray))(x),
//           x => R.map(({ airtableId }) => airtableId)(x as AirtableDbLink[]),
//         )(prismaArray)

//       const Categories = getAirtableIds(mealCategories, dbCategories)
//       const Tags = getAirtableIds(mealTags, dbTags)
//       const ProportionFruit = getAirtableIds([mealPropFruit], dbProportions)
//       const ProportionVeg = getAirtableIds([mealPropVeg], dbProportions)

//       const [{ id: airtableMeal }] = await base('Meals').create([
//         {
//           fields: {
//             Image: [
//               {
//                 url: imageURL,
//               },
//             ],
//             'User ID': [userAirtableId],
//             'Proportion of Fruit': ProportionFruit,
//             'Proportion of Veg': ProportionVeg,
//             Categories,
//             Tags,
//             'Date and Time': moment(),
//           },
//         },
//       ])

//       console.log('airtableMeal', airtableMeal)

//       prisma.updateMeal({
//         data: { airtableId: airtableMeal },
//         where: { id: id },
//       })
//     })(meals)
//   }

//   await R.map(addUsersToAirtable)(users)
//   await R.map(addUserMeals)(users)
// }

// createAirtableUsersWithMeals()
