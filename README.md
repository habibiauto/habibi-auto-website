# Habibi Auto Service website

An improved responsive static website for **Habibi Auto Service**, ready to store in a GitHub repository and deploy with Cloudflare Pages.

## Recommended free setup

Use **GitHub for the code** and **Cloudflare Pages for free hosting**. This is a better fit for a business website than GitHub Pages itself.

### 1. Upload to GitHub

1. Create a new public repository named `habibi-auto-website`.
2. Choose **Add file → Upload files**.
3. Upload every file and folder from this package.
4. Commit the files to the `main` branch.

### 2. Deploy with Cloudflare Pages

1. Create or sign in to a Cloudflare account.
2. Add `habibiauto.ca` to Cloudflare and follow its instructions to update the domain nameservers at your domain registrar.
3. Open **Workers & Pages → Create → Pages → Connect to Git**.
4. Connect GitHub and choose the `habibi-auto-website` repository.
5. Use these build settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy the project.
7. Open the Pages project → **Custom domains** and add:
   - `habibiauto.ca`
   - `www.habibiauto.ca`

Cloudflare will handle HTTPS after the domain is connected.

## Add the booking-app link

Open `assets/site.js` and replace:

```js
appUrl: "",
```

with the published booking app URL, for example:

```js
appUrl: "https://app.habibiauto.ca",
```

The website button will automatically change from **App launching soon** to **Open booking app**.

## Update prices or wording

Edit `index.html`. Search for the service name or price and replace the text.

## Contact details currently used

- Phone: 289-214-1944
- Email: Contact@habibiauto.ca
- Instagram: @habibiautoservice
- Service area: London, Ontario and surrounding areas

## Important

Do not put passwords, private customer information, database keys or payment credentials inside this public repository.
