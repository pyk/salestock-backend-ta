# Salestock Backend Technical Assigment
This is The Salestock Backend TA. They give me two cases, and I choose the product and category management with hierarchical tree data for category. 

The end goal of this TA is to build API endpoint for that case.

## API Endpoints
Each description of endpoint will formatted like the following:

```
[HTTP METHOD] [ENDPOINT] - [DESCRIPTION]
```

Each `[ENDPOINT]` is relative to `http://salestock-backend-ta.herokuapp.com`. 

So for example 

```
GET /categories - List of all categories including related sub-category
```

is translated to `http://salestock-backend-ta.herokuapp.com/categories`.

Also, there is a `curl(1)` command that I use to play with the endpoint. You can copy & paste those command to your terminal. You can also use `postman` extension on Google Chrome or similar tool that you are familiar with.

### Categories
Each category have exactly one sup-category/parent category and many sub-category/childs category.

TODO: add image hierarchy of category

#### List of categories and corresponding sub-categories
This endpoint is used for displaying all categories and related sub-categories. It can be useful for navigation, dropdown menu of categories for instance.

```
GET /categories - fetch all categories and their corresponding sub-categories.

# curl(1) test, copy & paste this on your terminal
curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/categories
``` 
View in your browser [salestock-backend-ta.herokuapp.com/categories](http://salestock-backend-ta.herokuapp.com/categories).

#### Create a Category
This endpoint is used to create new category. The payload of request is a JSON object with `name` and `parent_name` field.

```
POST /categories - create a new category

# curl(1) test, copy & paste this on your terminal
curl -i -H "Content-Type: application/json" -X POST -d '{"name":"Demo Dress", "parent_name": "Dress"}' http://salestock-backend-ta.herokuapp.com/categories
```

For the root category, `parent_name` should be empty string. Newly created category will available on list endpoint.

#### Read a Category
This endpoint is used to get one category with specified id and related sub-categories. 

```
GET /categories/:id - Request a single category with specified id

# curl(1) test, copy & paste this on your terminal
curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/categories/1
```

View example in your browser [salestock-backend-ta.herokuapp.com/categories/1](http://salestock-backend-ta.herokuapp.com/categories/1).

## License
BSD 3-clause
