compile: clean
	./node_modules/.bin/babel src --out-dir dist

setup:
	npm install --save-dev

test:
	./node_modules/.bin/babel-tape-runner test/**/*.js

clean:
	rm -rf ./dist

release:
	publish

.PHONY: compile setup test clean release
