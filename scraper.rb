# require 'mechanize'
# require 'pry'
# require 'json'

# m = Mechanize.new

# # base = m.get('http://pinchofyum.com/category/recipes/dinner')
# recipe_item = Struct.new :sourceHref, :recipeTitle, :ingredients, :cuisineType, :sourceName

# recipe_collection = []

# pages_to_search = ['http://pinchofyum.com/category/recipes/dinner'] + 
# 	(2..8).map { |n| "http://pinchofyum.com/category/recipes/dinner/page/#{n}" }

# pages_to_search.each do |url|
# 	base = m.get(url)

# 	recipe_links = base.search("h2.entry-title a")

# 	recipe_links.each do |noko_item|
# 		link = noko_item['href']
# 		recipe_page = m.get(link)
# 		title = recipe_page.title
# 		ingredients = recipe_page.search("li.ingredient").map{ |i| i.text }
# 		cuisine_type = recipe_page.search('.categories a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
# 		recipe_collection << recipe_item.new(link, title, ingredients, cuisine_type, 'Pinch of Yum')
# 	end
# end

# File.open('scrapped.json', 'w') do |f|
# 	f.write JSON.pretty_generate(recipe_collection.map(&:to_h))
# end