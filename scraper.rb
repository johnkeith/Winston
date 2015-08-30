require 'mechanize'
require 'pry'
require 'json'

m = Mechanize.new

# base = m.get('http://pinchofyum.com/category/recipes/dinner')
recipe_item = Struct.new :sourceHref, :recipeTitle, :ingredients, :cuisineType, :sourceName

recipe_collection = []

pages_to_search = ['http://www.loveandlemons.com/recipe-browser/#cat-main-dish']

pages_to_search.each do |url|
	base = m.get(url)

	recipe_links = base.search(".ri-cat-main-dish a")

	recipe_links.each do |noko_item|
		link = noko_item['href']
		recipe_page = m.get(link)
		title = recipe_page.title.gsub(' - Love and Lemons', '')
		ingredients = recipe_page.search("li.ingredient").map{ |i| i.text unless i.text == " " || i.text.empty? }.compact

		cuisine_type = recipe_page.search('.lnl-tags a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
		
		unless ingredients.empty?
			recipe_collection << recipe_item.new(link, title, ingredients, cuisine_type, 'Love and Lemons')
		end
	end
end

puts recipe_collection.length + "is the amount of recipes."

File.open('lal_scrapped.json', 'w') do |f|
	f.write JSON.pretty_generate(recipe_collection.map(&:to_h))
end

# for Love and Lemons
# m = Mechanize.new

# # base = m.get('http://pinchofyum.com/category/recipes/dinner')
# recipe_item = Struct.new :sourceHref, :recipeTitle, :ingredients, :cuisineType, :sourceName

# recipe_collection = []

# pages_to_search = ['http://www.loveandlemons.com/recipe-browser/#cat-main-dish']

# pages_to_search.each do |url|
# 	base = m.get(url)

# 	recipe_links = base.search(".ri-cat-main-dish a")

# 	recipe_links.each do |noko_item|
# 		link = noko_item['href']
# 		recipe_page = m.get(link)
# 		title = recipe_page.title.gsub(' - Love and Lemons', '')
# 		ingredients = recipe_page.search("li.ingredient").map{ |i| i.text unless i.text == " " || i.text.empty? }.compact

# 		cuisine_type = recipe_page.search('.lnl-tags a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
		
# 		unless ingredients.empty?
# 			recipe_collection << recipe_item.new(link, title, ingredients, cuisine_type, 'Love and Lemons')
# 		end
# 	end
# end

# File.open('lal_scrapped.json', 'w') do |f|
# 	f.write JSON.pretty_generate(recipe_collection.map(&:to_h))
# end

# for Damn Delicious
# m = Mechanize.new

# # base = m.get('http://pinchofyum.com/category/recipes/dinner')
# recipe_item = Struct.new :sourceHref, :recipeTitle, :ingredients, :cuisineType, :sourceName

# recipe_collection = []

# pages_to_search = ['http://damndelicious.net/recipe-index/entree/']

# pages_to_search.each do |url|
# 	base = m.get(url)

# 	recipe_links = base.search(".wp-cpl-sc-post h2 a")

# 	recipe_links.each do |noko_item|
# 		link = noko_item['href']
# 		recipe_page = m.get(link)
# 		title = recipe_page.title.gsub(' - Damn Delicious', '')
# 		ingredients = recipe_page.search("li.ingredient").map{ |i| i.text unless i.text == " " || i.text.empty? }.compact

# 		cuisine_type = recipe_page.search('.entry-categories a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
# 		cuisine_type += recipe_page.search('.entry-tags a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
		
# 		recipe_collection << recipe_item.new(link, title, ingredients, cuisine_type, 'Damn Delicious')
# 	end
# end

# File.open('dd_scrapped.json', 'w') do |f|
# 	f.write JSON.pretty_generate(recipe_collection.map(&:to_h))
# end

# FOR SCRUMPTIOUSLY SKINNY
# m = Mechanize.new

# # base = m.get('http://pinchofyum.com/category/recipes/dinner')
# recipe_item = Struct.new :sourceHref, :recipeTitle, :ingredients, :cuisineType, :sourceName

# recipe_collection = []

# pages_to_search = ['http://www.scrumptiouslyskinny.com/category/dinner/'] +
# 	(2..14).map { |n| "http://www.scrumptiouslyskinny.com/category/dinner/page/#{n}" }

# pages_to_search.each do |url|
# 	base = m.get(url)

# 	recipe_links = base.search("h1.entry-title a")

# 	recipe_links.each do |noko_item|
# 		link = noko_item['href']
# 		recipe_page = m.get(link)
# 		title = recipe_page.title
# 		ingredients = recipe_page.search("li.blog-yumprint-ingredient-item").map{ |i| i.text }

# 		if ingredients.empty? || ingredients.compact.empty?
# 			ingredients = recipe_page.search("li.ingredient").map{ |i| i.text }
# 		end

# 		cuisine_type = recipe_page.search('.entry-categories a').map{ |c| c.text.downcase unless c.text == 'Dinner'}.compact
# 		recipe_collection << recipe_item.new(link, title, ingredients, cuisine_type, 'Scrumptiously Skinny')
# 	end
# end

# File.open('ssk_scrapped.json', 'w') do |f|
# 	f.write JSON.pretty_generate(recipe_collection.map(&:to_h))
# end

# FOR PINCH OF YUM
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