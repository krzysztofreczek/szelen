default: add_event

.PHONY: add_event
add_event:
	@test $(EVENT_USER) || ( echo "EVENT_USER not set" & exit 1 )
	@test $(EVENT_TIMESTAMP) || ( echo "EVENT_TIMESTAMP not set" & exit 2 )
	@test $(CIRCLE_BUILD_NUM) || ( echo "CIRCLE_BUILD_NUM not set" & exit 3 )

	@echo "Adding event to JS files:"
	sed -i -e 's#{}#{date:\"${EVENT_TIMESTAMP}\",user:\"${EVENT_USER}\"},\n{}#g' ./db/events.$$(($(CIRCLE_BUILD_NUM) % 6)).js
	@echo "...done"

.PHONY: push
push:
	@test $(GITHUB_TOKEN) || ( echo "GITHUB_TOKEN not set" & exit 1 )
	@echo "Pushing events to GH:"
	git config user.email "reczek.krzysztof@gmail.com" && \
		git config user.name "krzysztofreczek" && \
		git pull
		git add . && \
		git commit -m "Add event" && \
		git push -q https://${GITHUB_TOKEN}@github.com/krzysztofreczek/szelen.git master
	@echo "...done"
