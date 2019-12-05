const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

const R = require('ramda')
const { prisma } = require('../prisma/generated/js')

const sendReminderMessages = async () => {
  const fragment = `
    fragment UserWithNumber on User {
      phoneNumber
    }
  `

  const userNumbers = await prisma.users().$fragment(fragment)

  Promise.all(
    R.map(({ phoneNumber }) => {
      return (
        client.messages
          .create({
            body:
              'Remember to log what your child eats for dinner tonight on SnapEat!',
            from: '+447428147340',
            to: `${phoneNumber}`,
          })
          //eslint-disable-next-line
          .then(message => console.log(message.sid))
          //eslint-disable-next-line
          .catch(e => console.log(e))
      )
    })(userNumbers),
  )
}

module.exports = sendReminderMessages
