# Assumptions

## Project

## Task
* Task is assigned to project 

## User
* User is assigned to task
* User is part of specific project

## Acceptance Criteria

* User can create project
* User can create task
* User can assign another user to task

# Requests

## Task request

Example request

url: host/api/task (POST)
body:
```{
    "name": "example task name",
    "description": "example task description",
    "creator_id": 1
}```