const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const initDataBase = require('./start/initDataBase')
const routes = require('./routes')

const app = express()

const PORT = config.get('port') ?? 8070

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

async function start() {
	try {
		await mongoose.connection.once('open', () => {
			initDataBase()
		})
		await mongoose.connect(config.get('mongoUri'))
		console.log(chalk.blue('MongoDB connected'))

		app.listen(PORT, () => {
			console.log(chalk.green(`Server has been started on port: ${PORT}...`))
		})
	} catch (error) {
		console.log(chalk.red(error.message))
		process.exit(1)
	}
}

start()
