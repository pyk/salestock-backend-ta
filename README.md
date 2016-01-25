# Salestock Backend Technical Assesment
This is The Salestock Backend TA. They give me two cases, and I choose the product and category management with hierarchical tree data for category. 

The end goal of this TA is to build API endpoint for that case.

## Model & Database
I keep the database schema fairly simple without sacrificing the end goal of this assesment. Since I use `knex` module and `bookshelf` module to manage migrations, seeds data, and model abstraction this API can be easily extended by another nodejs developers.

I use the adjacency list model as a solution to the hierarchical tree data for category. It's very practical and have a good performance, so far.

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

#### List of categories and the corresponding sub-categories
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

#### Update a Category
This endpoint is used to update category. The payload of request is a JSON object with required `name` field.

```
PUT /categories/:id - Update a category

# curl(1) test, copy & paste this on your terminal
# change x with one of category ID
curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"Update name"}' http://salestock-backend-ta.herokuapp.com/categories/x
```

#### Delete a Category
This endpoint is used to delete a category. The parent category are cannot deleted until all the sub-categories are deleted.

```
DELETE /categories/:id - Delete a category

# curl(1) test, copy & paste this on your terminal
# change x with one of category ID
curl -i -H "Accept: application/json" -X DELETE http://salestock-backend-ta.herokuapp.com/categories/x
```


### Products
Each products have many categories.

#### List of Products
This endpoint is used for displaying all products and their categories.

```
GET /products - Request all products
GET /products/category/:id - Request all products from a single category

# curl(1) test, copy & paste this on your terminal
curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/products

curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/products/category/13
``` 

View in your browser [salestock-backend-ta.herokuapp.com/products](http://salestock-backend-ta.herokuapp.com/products).

#### Create a Product
This endpoint is used to create new product. The payload of request is a JSON object with `name` and `categories` field. `categories` field have value an array of category name for the product.

Only valid category name will be assigned to a product.

```
POST /products - Create new product

# curl(1) test, copy & paste this on your terminal
curl -i -H "Content-Type: application/json" -X POST -d '{"name":"Product Demo", "categories": ["Dress", "Long Dress"]}' http://salestock-backend-ta.herokuapp.com/products
```

#### Read a Product
This endpoint is used to get one product with specified id and related categories.

```
GET /products/:id - Request a single product with specified id

# curl(1) test, copy & paste this on your terminal
curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/products/1
```

View example in your browser [salestock-backend-ta.herokuapp.com/products/1](http://salestock-backend-ta.herokuapp.com/products/1).

#### Update a Product
This endpoint is used to update product. The payload of request is a JSON object with required `name` field.

```
PUT /products/:id - Update a Product

# curl(1) test, copy & paste this on your terminal
# change x with one of category ID
curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"Update name"}' http://salestock-backend-ta.herokuapp.com/products/x
```

#### Delete a Product
This endpoint is used to delete a product. 

```
DELETE /products/:id - Delete a product

# curl(1) test, copy & paste this on your terminal
# change x with one of category ID
curl -i -H "Accept: application/json" -X DELETE http://salestock-backend-ta.herokuapp.com/categories/x
```

## License
BSD 3-clause
