require 'pry'
require 'json'

puts "\e[H\e[2J"

data = JSON.parse File.read('combined.json')

valid_categories = ['veggie', 'vegan', 'vegetarian', 'gluten-free', 'seafood', 'beef', 'pork', 'chicken']

data.each_with_index do |d, idx|
	if d['cuisineType'].map{ |i| valid_categories.include?(i) }.uniq.include?(false)
		puts "\e[H\e[2J"

		puts "-------------------------------------------------"
		puts "Title: #{d['recipeTitle']} - (#{idx} of #{data.size})"
		puts "-------------------------------------------------"

		puts ''
		puts "-------------------------------------------------"
		puts "Ingredients: "
		puts "-------------------------------------------------"
		d['ingredients'].each do |i|
			puts i
		end

		puts ''
		puts "-------------------------------------------------"
		puts "Categories: #{d['cuisineType']}"
		puts "-------------------------------------------------"

		puts ''
		puts "New category names:"

		names = gets.chomp

		data.delete_at(idx) if names == 'd'

		next if names == 'n' || names == 'd'

		names = names.split(",").map { |n| n.gsub(' ', '') }

		d['cuisineType'] = names

		File.open('combined.json', 'w') do |f|
			f.write JSON.pretty_generate(data)
		end
	end
end