# Salestock Backend Technical Assigment
This is The Salestock Backend TA. They give me two cases, and I choose the product and category management with hierarchical tree data for category. 

The end goal of this TA is to build API endpoint for that case.

## API Endpoints

You can also use `postman` extension on Google Chrome or similar tool that you are familiar with.

### Categories
Each category have exactly one sup-category/parent category and many sub-category/childs category.

TODO: add image

```
GET /categories

# curl(1) test, copy & paste this on your terminal
curl -i -H "Accept: application/json" http://salestock-backend-ta.herokuapp.com/categories
```
fetch all categories. 

## License
BSD 3-clause
