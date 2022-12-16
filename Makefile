install:
	npm install

lint:
	# npx stylelint ./src/css/*.css
	npx stylelint ./src/scss/**/*.scss
	# npx htmlhint ./src/*.html
	pug-lint ./src/pages/*.pug

lint-fix:
	npx stylelint ./src/scss/**/*.scss --fix

deploy:
	npx surge ./build/

