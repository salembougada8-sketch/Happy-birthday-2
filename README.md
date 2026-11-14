# For Wiwi — Interactive Memory Book

A GitHub Pages-ready, responsive digital memory book with realistic 3D page turning.

## Included
- Real page-turn animation powered by StPageFlip (loaded from jsDelivr CDN).
- A personalized cover for Wiem / Wiwi / waomti.
- Story pages: Before We Met, Our First Date (April 21), Our Favourite Song, A Letter for You, Our Moments, and a final birthday page.
- Upload multiple photos in the browser; the book creates pages with one or two photos per page.
- Upload an audio file (MP3, M4A, etc.) to play in the music page, or add a song URL.
- Responsive layout for mobile and desktop.

## Preview locally
Open `index.html` in a modern browser while connected to the internet (the page-turn library and fonts load from CDNs).

## Publish with GitHub Pages
1. Create a new public repository on GitHub, for example `for-wiwi`.
2. Upload `index.html`, `style.css`, `app.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish. Your site URL will look like `https://YOUR-USERNAME.github.io/for-wiwi/`.

## Add permanent photos and song before publishing
- Put your pictures in `assets/photos/` and update/add image paths in `index.html`, or use the in-page photo picker for a local preview.
- Put an audio file in `assets/music/` and you can add an `<audio src="assets/music/your-song.mp3">` source in the song page.
- Browser-selected files are local to that browser session; they are not uploaded to GitHub automatically. For Wiwi to see the same pictures and hear the same audio, commit the media files into the repository.

## Note about the wording
The English text on the story pages follows the visible phrases in the reference video. A few words on the tiny letter image were not legible, so the letter has been carefully completed in the same tone rather than presented as a perfectly exact transcription.
