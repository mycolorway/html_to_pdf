const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

app.use(bodyParser.text({ limit: '2mb' }))

app.post('/', function(req, res) {
    // var contentType = req.headers['content-type']

    (async() => {
        try {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            })
    
            const page = await browser.newPage()
            await page.setContent(req.body)
            await page.pdf({ format: 'A4' }).then(function(buffer) {
                res.setHeader('Content-Disposition', 'attachment;filename="default.pdf"')
                res.setHeader('Content-Type', 'application/pdf')
                res.send(buffer)
            })
    
            await browser.close()
        } catch (error) {
            console.error(error);
        }
    })()
})

app.listen(port, function() {
    console.log('App listening on port ' + port)
})
