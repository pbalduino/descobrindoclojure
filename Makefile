@phony: build

test:
	yarn test:unit

build: test
	yarn build
