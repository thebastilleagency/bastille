# Bastille
This is the repo for [Bastille](www.bastilleagency.com)


## Locals only
The site is built on [Siteleaf](http://siteleaf.com), which makes running it locally super easy.

- Install the Siteleaf gem by running `gem install siteleaf`
- Clone this repo
- In the directory containing this repo, run `siteleaf config bastille.siteleaf.net` (It'll ask you to sign in - you should've been made an admin through the Siteleaf admin area)
- You have two options for running the site locally:
	- If you have Pow installed, just go to [http://bastille.siteleaf.dev](http://bastille.siteleaf.dev)
	- If you don't or don't want to, just run `siteleaf server` and go to [http://localhost:9292/](http://localhost:9292/)


#### Hacking
- Make your changes locally
- Once you're happy with your changes, run `siteleaf push theme` to put your local changes on the remote
- Click `Publish changes` to push **content and code** changes

For more info, check the [Siteleaf theme documentation](http://www.siteleaf.com/help/themes/)


#### Pushing
- You can make changes in the CMS and they'll appear locally, just don't click `Publish changes` or they'll end up on the live site
- Click `Publish changes` to push **content and code** changes

For more info, check the [Siteleaf docs](https://github.com/siteleaf/siteleaf-gem).
