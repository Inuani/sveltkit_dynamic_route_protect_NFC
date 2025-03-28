include .env

#  repomix --ignore "ufr-lib/"    


REPLICA_URL := $(if $(filter ic,$(subst ',,$(DFX_NETWORK))),https://ic0.app,http://127.0.0.1:4943)
CANISTER_NAME := $(shell grep "CANISTER_ID_" .env | grep -v "INTERNET_IDENTITY\|CANISTER_ID='" | head -1 | sed 's/CANISTER_ID_\([^=]*\)=.*/\1/' | tr '[:upper:]' '[:lower:]')
# CANISTER_ID := $(CANISTER_ID_$(shell echo $(CANISTER_NAME) | tr '[:lower:]' '[:upper:]'))
FRONTEND_CANISTER_ID := $(CANISTER_ID_FRONTEND)

UNAME := $(shell uname)
ifeq ($(UNAME), Darwin)
    OPEN_CMD := open
else ifeq ($(UNAME), Linux)
    OPEN_CMD := xdg-open
else
    OPEN_CMD := start
endif

all:
	dfx deploy
	
ic:
	dfx deploy --ic

url:
	$(OPEN_CMD) http://$(CANISTER_ID_FRONTEND).localhost:4943/

setup_route_example:
	python3 scripts/setup_route.py $(CANISTER_ID_FRONTEND) page

random_key:
	python3 scripts/setup_route.py $(CANISTER_ID) page2.html --random-key --params "key=value"

production_ic:
	python3 scripts/setup_route.py $(CANISTER_ID) page1.html --params "key=value" --ic

reinstall:
	dfx canister install $(CANISTER_NAME) --mode=reinstall
