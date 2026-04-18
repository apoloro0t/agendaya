import express from 'express'
import { procesarMensaje } from './servidor.js'

const app = express()
app.use(express.json())

const TOKEN = 'agendaya123'
const WHATSAPP_TOKEN = 'EAALhZBzP9bssBRCLZCh3cbj1ZB2yTh0xkEJxZBHu0YFrgnmgeLsWTN9Tev1omPeTOeOXZCmiCfIAWsbp85hE6qMCYIGigxacB338qByiEWCOKctIxupzO6Sd5TJQNhm9vvI94QsdnSONgsNs8Ip5MXheXNcjVxzEV4ygYlGMHdMdG6E4Wtd6Uc8ZCxFe75hgZDZD'
const PHONE_ID = '1111463398716862'

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === TOKEN) {
    res.send(req.query['hub.challenge'])
  } else {
    res.sendStatus(403)
  }
})

app.post('/webhook', async (req, res) => {
  const body = req.body
  if (body.object !== 'whatsapp_business_account') return res.sendStatus(404)

  const entry = body.entry?.[0]
  const change = entry?.changes?.[0]
  const message = change?.value?.messages?.[0]

  if (!message) return res.sendStatus(200)

  const telefono = message.from
  const texto = message.text?.body

  if (!texto) return res.sendStatus(200)

  console.log('Mensaje recibido de:', telefono, '→', texto)

  const phoneNumberId = change?.value?.metadata?.phone_number_id
const respuesta = await procesarMensaje(telefono, texto, phoneNumberId)

  await fetch(`https://graph.facebook.com/v25.0/${PHONE_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: telefono,
      type: 'text',
      text: { body: respuesta }
    })
  })

  res.sendStatus(200)
})

app.listen(3001, () => console.log('Bot corriendo en puerto 3001'))