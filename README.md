# Tokopedia Play Clone

## Database Structure/Schema

### Collection 1: Videos

```js
{
  '_id': "video_id"
  'title': 'Video Title',
  'urlImage': 'https://example.com/video12345.jpg',
  'thumbnail': 'https://example.com/thumbnail12345.jpg',
}
```

### Collection 2: Products

```js
{
  '_id': "product_id"
  'linkProduct': 'https://example.com/product/p001',
  'title': "Product Title",
  'price': 'product_price',
  'videoId': 'video_id',
}
```

### Collection 3: Comments

```js
{
  '_id': "product_id"
  'username': 'Fandi Hasnur',
  'comment': 'This is comment! ',
  'videoId': 'video_id',
}
```

## **API Structure**

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| GET    | /api/videos/           | Video list          |
| GET    | /api/products/         | Product list        |
| GET    | /api/comments/         | Comment list        |
| GET    | /api/videos/:id        | Video by Id         |
| GET    | /api/products/:videoId | Product by Video Id |
| GET    | /api/comments/:videoId | Comment by Video Id |
| POST   | /api/videos/           | Create Video        |
| POST   | /api/products          | Add Product         |
| POST   | /api/comments          | Add Comment         |

## **List API Request and Response**

#Videos

- Videos object

```js
{
  _id: string;
  title: string;
  urlImage: string;
  thumbnail: string;
}
```

## **GET /videos**

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```js
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

## **GET /videos/:id**

Returns the specified video.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : error.message }`

## **POST /videos**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```js
  {
    title: string,
    urlImage: string,
    thumbnail: string,
  }
```

- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`

---

#Products

- Products object

```js
{
  _id: string;
  linkProduct: string;
  title: string;
  price: number;
  videoId: string;
}
```

## **GET /products**

Returns all products in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```js
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

## **GET /products/:videoID**

- **URL Params**  
  _Required:_ `videoId=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```js
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Product not found" }`  
    OR
  - **Code:** 400  
    **Content:** `{ error :"Invalid productId" }`

#Comments

- Comments object

```js
{
  _id: string;
  username: string;
  comment: string;
  videoId: string;
  timestamp: date;
}
```

## **GET /comments**

Returns all comments in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

## **GET /comments/:videoID**

Returns all comments associated with a specified Video.

- **URL Params**  
  _Required:_ `videoId=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video not found!" }`  
    OR
  - **Code:** 400  
    **Content:** `{ error :"videoId is required!" }`

## **POST /comments**

Creates a new Comment based on the current Video ID .

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```js
  {
    username: string,
    comment: string,
    videoId: string,
  }
```

- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`

### How to Run Locally

1. Install Node.js and MongoDB on your local machine if you haven't already.

2. Clone this repository to your local machine.

3. In the src directory of the project, go to a `.env.example` and replace it with `.env` file and set the following environment variables:
   ```js
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/tokopedia_play
   ```

- Adjust the `PORT` as per your preference.

4. Install the required dependencies by running:

   ```
   yarn install
   ```

5. Seed the database with the dummy data by running:

   ```
   yarn run seed
   ```

6. Start the API server by running:

   ```
   yarn start
   ```

7. The API should now be running locally on `http://localhost:3000`.
