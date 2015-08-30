require 'pry'
require 'json'

ssk_data = JSON.parse File.read('ssk_scrapped.json')
lal_data = JSON.parse File.read('lal_scrapped.json')
poy_data = JSON.parse File.read('poy_scrapped.json')
dd_data = JSON.parse File.read('dd_scrapped.json')
binding.pry


