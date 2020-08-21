## DOCKER IMAGE TO BUILD
docker build -t hello-world-greeter-app .
docker run -p 8080:80 -d hello-world-greeter-app

## GET ENDPOINT
1) CURL
    curl localhost:8080/
2) ENDPOINT DESCRIPTION
    localhost:8080/ -  return the text "hello world"
3) OUTPUT
    {
        "greeting": "Hello world"
    }

## POST ENDPOINT
1) CURL
    curl -X POST -H "Content-Type: application/json" \
    -d '{"name":"shawn"}' \
    http://localhost:8080/greet | json_pp

    curl -X POST -H "Content-Type: application/json" \
    -d '{"name":"george"}' \
    http://localhost:8080/greet | json_pp

    curl -X POST -H "Content-Type: application/json" \
    -d '{"name":"john"}' \
    http://localhost:8080/greet | json_pp

2) ENDPOINT DESCRIPTION
    localhost:8080/greet - greets you with your name based on the time of day and input name supplied.

3) INPUTS/OUTPUTS
    Input1:
    {
        "name": "shawn"
    }
    Output1:
    {
        "id": "0d8619f4-ac4f-496e-8259-f6414b68ef6c",
        "greeting": " Good morning shawn"
    }
    Input2:
    {
        "name": "george"
    }
    Output2:
    {
        "id": "15b1b87e-baba-4adc-ad73-673bb158ac68",
        "greeting": " Good morning george"
    }
    Input3:
    {
        "name": "john"
    }
    Output3:
    {
        "id": "b25c19a4-454d-4d84-a602-f3346dbca9b3",
        "greeting": " Good morning john"
    }

## GET ALL ENDPOINTS
1) CURL
    curl localhost:8080/list | json_pp
2) DESCRIPTION
    localhost:8080/list - lists all greetings for the surrent session.
3) OUTPUTS
    Output:
    [
        {
            "id": "0d8619f4-ac4f-496e-8259-f6414b68ef6c",
            "greeting": " Good morning shawn"
        },
        {
            "id": "15b1b87e-baba-4adc-ad73-673bb158ac68",
            "greeting": " Good morning george"
        },
        {
            "id": "b25c19a4-454d-4d84-a602-f3346dbca9b3",
            "greeting": " Good morning john"
        }
    ]

## UPDATE ENDPOINT
1) CURL
    curl -X PUT -H "Content-Type: application/json" \
    -d '{ "id": "15b1b87e-baba-4adc-ad73-673bb158ac68","greeting": "how are you george" }' http://localhost:8080/update | json_pp

2) DESCRIPTION
    localhost:8080/update - updates an entry in the currrent list of greetings for the current session based on id supplied.

3) INPUTS/OUTPUTS
    Input:
    {
        "id": "15b1b87e-baba-4adc-ad73-673bb158ac68",
        "greeting": "how are you george"
    }
    Output:
    [
        {
            "id": "0d8619f4-ac4f-496e-8259-f6414b68ef6c",
            "greeting": " Good morning shawn"
        },
        {
            "id": "15b1b87e-baba-4adc-ad73-673bb158ac68",
            "greeting": " How are you george"
        },
        {
            "id": "b25c19a4-454d-4d84-a602-f3346dbca9b3",
            "greeting": " Good morning john"
        }
    ]

## DELETE ENDPOINT
1) CURL
    curl -X DELETE -H "Content-Type: application/json" \
    -d '{ "id": "605ed6ec-f7b9-429e-abf3-352c06027bcd"}' http://localhost:8080/delete | json_pp

2) DESCRIPTION
    localhost:8080/delete - deletes an entry in the currrent list of greetings for the current session based on id supplied.

3) INPUTS/OUTPUTS
    Input:
    {
        "id": "b25c19a4-454d-4d84-a602-f3346dbca9b3"
    }
    Output:
    [
        {
            "id": "0d8619f4-ac4f-496e-8259-f6414b68ef6c",
            "greeting": " Good morning shawn"
        },
        {
            "id": "15b1b87e-baba-4adc-ad73-673bb158ac68",
            "greeting": " How are you george"
        }
    ]