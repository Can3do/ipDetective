const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0782f04bf3msh5f602eca47747ccp151aeejsn31650e69de03',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
	},
}

const fetchIp = ip => {
	return fetch(
		`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,
		OPTIONS
	)
		.then(res => res.json())
		.catch(err => console.log(err))
}

const $form = document.getElementById('form')
const $input = document.getElementById('ip-input')
const $results = document.getElementById('results')

$form.addEventListener('submit', async event => {
	event.preventDefault()
	const { value } = $input
	const ipInfo = await fetchIp(value)
	$results.innerHTML = JSON.stringify(ipInfo, null, 2)
})
