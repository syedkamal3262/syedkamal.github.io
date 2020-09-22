const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/syedkamal3262/syedkamal3262.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
