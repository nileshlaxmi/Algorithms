//Remove all falsy values from an array.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(Boolean);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
