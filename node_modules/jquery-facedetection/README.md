## jquery-facedetection

browserify-compatible fork of @jaysalvat's [jquery.facedetection](https://github.com/jaysalvat/jquery.facedetection) -- a jQuery plugin to detect faces on an image, video, or canvas -- based on [an algorithm](https://github.com/liuliu/ccv) by @liuliu


### install

```bash
npm i --save jquery-facedetection
```


### usage

```js
import $ from 'jquery'
import faceDetection from 'jquery-facedetection'
faceDetection($)

$('#picture').faceDetection({
  complete: function (faces) {
    console.log(faces);
  }
})
```

returns an array of found faces object:

- **x** — x coord of the face in the picture
- **y** — y coord of the face in the picture
- **width** — width of the face
- **height** — height of the face
- **positionx** — x position relative to the document
- **positiony** — y position relative to the document
- **offsetx** — x position relative to the offset parent
- **offsety** — y position relative to the offset parent
- **scalex** — ratio between original image width and displayed width
- **scaley** — ratio between original image height and displayed height
- **confidence** — level of confidence


### settings

  - **interval** — interval (default 4)
  - **minneighbors** — minimum neighbors threshold which sets the cutoff level for discarding rectangle groups as face (default 1)
  - **confidence** — minimum confidence (default null)
  - **async** — async mode if worker available (default false). the async mode uses workers and needs the script to be on the same domain.
  - **grayscale** — convert to grayscale before processing (default true)
  - **complete** — callback function trigged after the detection is completed
    ```js
      complete: function (faces) {
          // ...
      }
    ```

  - **error** — callback function trigged on errors
    ```js
      error: function (code, message) {
          // ...
      }
    ```
