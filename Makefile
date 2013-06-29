component = ./node_modules/component-hooks/node_modules/.bin/component

default: node_modules components public

node_modules:
	@npm install

components:
	@$(component) install

public:
	@$(component) build -n $@ -o $@

clean:
	@rm -rf public

.PHONY: clean