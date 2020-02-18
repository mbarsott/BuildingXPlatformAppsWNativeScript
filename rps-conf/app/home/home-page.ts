import HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new HomeViewModel();
}

function onTap(args) {
  let button = args.object;
  button.text = "I was tapped";
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
